# Orbital Overlap (Bonding Theories): instructor notes

Working title **Orbital Overlap**. Repo/hub label: **Bonding Theories**. Suggested repo `ItsDrDan/bondingtheories`, short link `games.itsdrdan.com/bonding`.

- **Courses:** CHEM 1A (default) and CHEM 1B review. Link with `?course=1A` or `?course=1B`; progress is saved separately per course on the student's device.
- **Source:** OpenStax *Chemistry 2e* §7.6 (VSEPR) and §8.1–8.4. Numbers in the game: the H₂ energy curve (74 pm, 436 kJ/mol, §8.1), real angles (NH₃ 107.3°, H₂O 104.5°, §8.2; v1 said 107°, corrected in v2 to match OpenStax), and bond lengths/energies from **Table 8.1** (H–Cl, H–Br, H–I, C–C/C=C/C≡C, C–N/C=N/C≡N, C–O/C=O/C≡O), all checked against openstax.org on 2026-11-11. Bond orders, electron counts, unpaired electrons and magnetism are **computed** from the MO filling, never typed in.
- **Current file:** `bonding-theories-v2.html` (version in the file name only). v1 is kept alongside for comparison.

## New in v2

- **Bond Labeler (every bond)** (Tile 3): numbered bonds on the drawing; bonds of the same kind share a number. Students pick the σ overlap for each (and the π overlap for double/triple bonds) from a menu. Tap a number on the drawing to jump to its row. Wrong picks name the slip (π from hybrids, H hybridized, σ from 2p, wrong hybrid from forgetting lone pairs or counting a double bond as 2 groups).
- **σ/π in line drawings** (Tile 3): 18 skeletal structures drawn by the SMILES layout engine from Bond Voyage (zig-zag 109.5°/120°/180°, rings). H on carbon is hidden, so this is where the `missed-CH-bonds` slip shows up. Carbons between two collinear bonds (C≡C–, C=C=C) are written as C so they don't disappear in a straight line.
- **Boss molecules** (Tile 3, tagged "challenge", off by default): caffeine (fused rings, placed by hand: 25 σ, 4 π, 5 sp² C) and aspirin (21 σ, 5 π, 8 sp² C). Both values computed from the structure.
- **Why bond strengths differ** (Tile 1): OpenStax Table 8.1 data: H–X length vs strength, π weaker than σ (C=C 614 is less than 2 × C–C 347), more bonds → shorter, end-to-end overlap is greatest, what bond energy means.
- **Energy curve, tap version** (Tile 1): students tap the curve at the bond length (graded within ±10 pm of 74; ◀ ▶ buttons fine-tune and work by keyboard), then tap the arrow that shows the bond energy.
- Challenge now draws from line drawings, boss molecules and bond strengths too. Badges: Bond Labeler = every bond right in 3 molecules; Pi Hunter counts line drawings and boss molecules.

## What v1 includes

| Tile | Topics |
|---|---|
| Overlap Basics (§8.1) | What makes a bond · Energy curve (H₂; read A–D or tap the curve) · Overlap Gallery (s–s, s–p, p–p end-on, p–p side-on → σ/π) · Which orbitals overlap (H₂, HF, HCl, HBr, F₂, Cl₂, Br₂) · Why bond strengths differ (Table 8.1) |
| Hybrid Workshop (§8.2) | Why hybridize · Hybrid table · Hybridize the center (groups → hybrid → geometry/shape) · Flat Lewis → real angle (with wedge/dash sketch in the answer) · Orbital boxes (ground state → hybridized) · Tag every atom (multi-center molecules) · sp³d and sp³d² (tagged "expanded octet", off by default) |
| Sigma & Pi (§8.3) | Count σ and π (all H drawn) · σ/π in line drawings · Label one bond · Bond Labeler (every bond) · Where π bonds come from · Restricted rotation · Resonance & delocalized π · Boss molecules (caffeine, aspirin) |
| MO Builder (§8.4) | LCAO pictures · Which ordering? · MO Diagram Builder (count → ordering → fill AOs → fill MOs → bond order + unpaired → para/dia) · Read a diagram · Bond order trends · HOMO & ionization |

Modes: **Learn** (Professor Tips + worked example revealed one step at a time), **Practice** (hints, Show step, retry), **Challenge** (10 mixed questions across all tiles, no hints, results + study plan).

MO species: H₂, H₂⁺, H₂⁻, He₂, He₂⁺, Li₂, Be₂, B₂, B₂⁺, C₂, C₂²⁻, N₂, N₂⁺, N₂⁻, N₂²⁻, O₂, O₂⁺, O₂⁻, O₂²⁻, F₂, F₂⁺, F₂⁻, Ne₂. Li₂–N₂ use π2p below σ2p; O₂–Ne₂ use σ2p below π2p. Valence electrons only for second-row diatomics.

Organic molecules (ethane, ethene, ethyne, methanol, methylamine, formic acid, acetonitrile, hydrazine, allene, acrylonitrile, benzene, plus the line drawings, caffeine and aspirin) appear **only** for σ/π counting, hybridization and bond labels. Line drawings are labeled by molecular formula only. No functional-group naming or reactions.

## Conventions to know

- **Terminal atoms in "Tag every atom":** students tag atoms bonded to 2+ others, plus one H (to catch "H is sp³"). Terminal O/N/halogens are left out, per OpenStax convention. "Label the bond" still names a terminal O or N by its electron-group count (C=O oxygen is sp², C≡N nitrogen is sp).
- **Resonance species** (CO₃²⁻, NO₃⁻, NO₂⁻, O₃, SO₂, SO₃) are drawn as one octet contributor. They are used for central-atom hybridization and shape only, not σ/π counting.
- **On phones** the MO diagram shows one atom's orbitals plus the MOs (the other atom is identical), so the part students fill fits on screen. Desktop shows the full three-column diagram.
- **XP:** +10 for finishing a question, +5 with no slips, +5 with no help, plus a streak bonus; 2 XP after using Show step.

## Slips logged to Game Stats (game id `bondingtheories`)

From the design outline: `double-bond-two-groups`, `forgot-lone-pairs`, `shape-vs-eg`, `pi-from-hybrid`, `hybrid-count`, `hydrogen-hybridized`, `sigma-pi-total`, `missed-CH-bonds`, `charge-sign`, `wrong-ordering`, `bo-not-halved`, `included-core`, `hund-violation`, `para-dia-flip`, `ionize-wrong-mo`, `bo-length-backwards`.

Added in v1 and v2: `ignored-charge` (used the neutral count for an ion), `one-atom` (counted one atom's electrons), `aufbau` (filled a higher MO before a lower one), `flat-drawing` (read the angle off the flat Lewis drawing), `ideal-angle` (109.5° for NH₃/H₂O), `sigma-vs-pi`, `pi-from-s`, `electron-count`, `group-count`, `tag-count`, `p-overfill`, `hybrid-fill`, `sigma-from-p`, `pe-read`, `length-strength`, `pi-strength`, `overlap-direction`, `hyb-all`, `gave-up` (used Show step), plus `concept`-style codes for the static multiple-choice items.

## Not in v1 yet (per the build plan)

- **v3:** Hybrid Mixer (drag/tap s + p cards), Ranker, Theory Face-Off boss round (O₂ magnet), Skill Check Prep, Daily 5 + question-bank export.
- **v4:** art package (logo, mascot moods, tile icons, badges), study hub card, chemistry accuracy pass. v1 uses an inline SVG p-orbital mascot and brand-kit badges as stand-ins, and `meta.json` has no `logo` entry until the art exists.
- **Heteronuclear / isoelectronic** (CO, CN⁻, NO⁺, NO) is held back until checked against OpenStax §8.4 exercises and the Tro test bank.
- **Videos** open at the start of each lecture; timestamps are not mapped yet.

## To check before pushing

- Read through the worked steps for a few species per topic.
- s–p mixing wording and the N₂/O₂ ordering switch were checked against OpenStax §8.4 (it writes "s-p mixing").
- In caffeine, the ring N atoms count as 4 groups by the simple rule but are really planar; the boss question asks only about carbons to avoid that.
- Decide whether 1B should open on a different default tile.
