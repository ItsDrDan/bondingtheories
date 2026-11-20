#!/usr/bin/env node
/* Deep-link checks: loads index.html?… in Chromium (Playwright) at a phone size (390×844, touch) and a
   desktop size, and checks that each demo link opens its lab, that the plain URL still opens the normal
   start screen, and that nothing logs a console error. Shared scripts from itsdrdan.github.io are served
   from the sibling clones (../games, ../questionbank); track.js is stubbed so tests send no stats.
   Usage: NODE_PATH=/path/to/node_modules node tools/check-deeplink.js   (needs the playwright package) */
const path=require('path'),fs=require('fs');
const {chromium}=require('playwright');
const ROOT=path.join(__dirname,'..'),SIB=path.join(ROOT,'..');
const page0='file://'+path.join(ROOT,'index.html');
const SIZES=[['phone',{viewport:{width:390,height:844},hasTouch:true,isMobile:true,deviceScaleFactor:3}],['desktop',{viewport:{width:1280,height:900}}]];
const inView=sel=>`(()=>{const r=document.querySelector(${JSON.stringify(sel)}).getBoundingClientRect();return r.height>0&&r.top>=-4&&r.top<innerHeight*.6;})()`;
let fails=0,checks=0;const ok=(c,m)=>{checks++;if(!c){fails++;console.log('FAIL',m);}};
async function run(CASES){
 const browser=await chromium.launch();
 for(const [size,opts] of SIZES){
  for(const [query,tests] of CASES){
   const ctx=await browser.newContext({...opts,reducedMotion:'reduce'});const page=await ctx.newPage();const errs=[];
   await ctx.route('https://itsdrdan.github.io/**',r=>{const u=new URL(r.request().url()),p=path.join(SIB,decodeURIComponent(u.pathname));
    if(u.pathname.endsWith('/track.js'))return r.fulfill({status:200,contentType:'text/javascript',body:''});
    if(fs.existsSync(p)&&fs.statSync(p).isFile())return r.fulfill({path:p});return r.abort();});
   await ctx.route(/^https?:\/\/(?!itsdrdan\.github\.io)/,r=>r.abort());
   page.on('console',m=>{if(m.type()==='error'&&!/net::ERR_FAILED|ERR_INTERNET|Failed to load resource/.test(m.text()))errs.push(m.text());});
   page.on('pageerror',e=>errs.push(String(e)));
   await page.goto(page0+query,{waitUntil:'load'});await page.waitForTimeout(400);
   const tag=size+' '+(query||'(plain)');
   for(const [expr,msg] of tests){let v;try{v=await page.evaluate(expr);}catch(e){v='threw '+e.message;}ok(v===true,tag+': '+msg+' ('+JSON.stringify(v)+')');}
   ok(errs.length===0,tag+': console errors: '+errs.join(' | '));
   await ctx.close();
  }
 }
 await browser.close();
 console.log((fails?'FAILED ':'OK ')+checks+' checks, '+fails+' failures');process.exit(fails?1:0);
}
const shown=id=>`(()=>{const e=document.getElementById('${id}');return !!e&&!e.hidden&&e.getClientRects().length>0;})()`;
/* bondingtheories: ?topic=<key>[,<key>] opens Practice on just those topics (Demo Library links) */
const only=keys=>[["state.mode==='practice'&&!state.ch",'Practice mode, no round'],
 [`state.sel.size===${keys.length}&&${JSON.stringify(keys)}.every(t=>state.sel.has(t))`,'only the linked topics are on'],
 [`!!state.q&&${JSON.stringify(keys)}.includes(state.q.topic)`,'the question is from a linked topic'],
 [inView('#play'),'practice card is scrolled into view']];
const T=['mixer','studio','builder','bondenergy','labeler','tagger','ranker','boxes'];
run([
 ['',[["state.course==='1A'",'default course 1A'],["window.scrollY<50",'plain URL does not scroll']]],
 ...T.map(t=>['?topic='+t,only([t])]),
 ['?course=1B&topic=builder,ranker',[...only(['builder','ranker']),["state.course==='1B'",'course 1B kept']]],
 ['?topic=nonsense',[["window.scrollY<50",'unknown topic is ignored']]],
 ['?topic=mixer',[["(()=>{let x=0,bad=0;for(let i=0;i<600;i++){const q=genMixer(),p=q.parts[0],I=info(q.mol);if(I.expanded){x++;if(!(p.want.d>0&&(p.groups===5||p.groups===6)&&/expanded octet/.test(q.tag)))bad++}if(!checkMixer(p,{s:p.want.s,p:p.want.p,d:p.want.d}).ok)bad++}return bad===0&&x>120&&x<300})()",'Mixer: about 1 in 3 questions are expanded octets (sp³d/sp³d²) and every right mix checks out']]],
 ['?topic=mixer',[["(()=>{let bad=[];for(let i=0;i<600;i++){const q=genMixer(),I=info(q.mol),p3=q.parts[2];if(q.parts.length!==3){bad.push('parts');continue}const ok=p3.choices.filter(c=>c.ok);const hs=p3.choices.map(c=>c.html);if(ok.length!==1||ok[0].html!==I.shape)bad.push('right '+q.mol.f);if(new Set(hs).size!==hs.length||hs.length<3)bad.push('dupes '+q.mol.f);if(I.lpC&&!hs.includes(I.eg))bad.push('no EG trap '+q.mol.f);if(!/lone pairs and bonds the same/.test(p3.ask))bad.push('stem');if(I.lpC&&!/repels? more/.test(ok[0].why))bad.push('why '+q.mol.f)}return bad.length?bad.slice(0,5).join('; '):true})()",'Mixer step 3: real VSEPR shape is right, the electron-group trap is offered when there are lone pairs, no duplicate choices']]],
 ['?mode=skill&topic=mixer',[["!!state.ch&&state.ch.kind==='skill'",'?mode= still wins']]],
]);
