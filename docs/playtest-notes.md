# One-Thumb Drums — playtest build

A proper playable drum rhythm game for the exidex One-Thumb Jam.
HTML5, portrait, one thumb. The backing tracks have **no drums** —
you are the drummer.

## Play

Open the hosted URL on your phone (iPhone / Safari works). Pick a song,
tap **the matching pad as each note crosses the gold line**:

- **KICK** — beat 1 & 3 · **SNARE** — beat 2 & 4
- **HI-HAT** — off-beats · **SPLASH** — fills & accents

Scoring: Perfect (±70 ms, 300 pts), Good (±140 ms, 100 pts), Miss.
Tapping a pad with no note nearby just plays the drum sound (free play,
no penalty). Pause / restart / quit from the pause button; results
screen at the end shows score, Perfect/Good/Miss, max combo, accuracy
and a grade (S/A/B/C/D).

## Tracks (player picks one at the start)

| # | Song | BPM | Length | Difficulty |
|---|---|---|---|---|
| 1 | Iron Pulse | 120 | 2:16 | Medium |
| 2 | Cathedral Rain | 100 | 2:14 | Easy |
| 3 | Night Shift | 140 | 2:03 | Hard |
| 4 | Ironclad | 156 | 2:03 | Expert |

All backing tracks are original CC0 compositions from real recorded
guitar/bass/piano samples (see `docs/backing-samples.md`).
Track 4 uses the clean-intro + heavy version (clean 0:00–0:18, heavy
after). Drum hits are real CC0 VCSL samples in `drums/`.

## Splash replaces toms (Nov 11, Playtest note: "toms seem less important")

The 4th pad is now **SPLASH** (pink), not Tom. The sample is VCSL's
short clash-cymbal hit (`cymbal_crash1_short1.wav`, CC0 — VCSL has no
dedicated splash cymbal; this short bright hit is the splash role),
trimmed to 1.0 s with a fade tail, mono 128 kbps (`drums/splash.mp3`,
see `docs/audio-kit.md`). Every tom note in the charts became a splash
note at the same time/density (fills every 4th bar + chorus-opener
accent); the three tom samples were removed from the game. A true
Zildjian 8" splash exists on Freesound (pjcohen, sound 46647) but its
download is login-gated and its license could not be verified from
available sources, so it was not used.

**Splash fix (Nov 11, Playtest note: "the cymbal lane never comes up with a
note"):** investigated first — the chart was actually correct (30–42
splash notes per song, first at 5.8–9.0 s, live `chart-v3.js` verified
identical to local, lane/pad/sample/rendering all mapped). The real
problem was placement: splash only ever appeared as a back-to-back
pair at slots 6+7 in the last eighth of every 4th bar — at 156 BPM
that's 192 ms apart, so it read as one blur, ~6–9 s apart. New
pattern: a SINGLE splash fill at slot 6 of every 2nd bar (first one
in bar 1, at 2.7–4.2 s depending on song), plus a splash accent on
beat 1 at every section change (chorus openers included). Counts now
40/34/41/46 per song, first splash 3.5/4.2/3.0/2.7 s, max gap between
splash notes 3–5 s — unmissable from the first seconds.

## Note graphics & trails (added Nov 11 after playtesting: "just ovals")

Falling notes are no longer plain ovals — each is a glossy drum-head
disc with a white rim, 3D radial gradient (bright top, dark edge),
top gloss highlight, a glow in its lane colour, and a per-pad icon in
the middle so each lane is instantly recognisable:

- **KICK** (red) — 🥁 drum · **SNARE** (gold) — ✦ starburst
- **HI-HAT** (blue) — ◎ rings · **SPLASH** (pink) — ✹ cymbal star

Each falling note also leaves a trail behind it (above it, since it
travels down): tiny 4-point sparkles in the pad colour / white plus
an occasional pale smoke wisp, drifting gently upward and fading in
~0.4 s. Trails reuse the existing `#fx` canvas particle system:
1 spawn per visible note every 3rd frame, hard-capped at 80 trail
particles (steady state ~70 alive in a 7-note simulation), separate
from the 160-particle hit-burst cap — so 60 fps on iPhone is preserved
and timing/charts/mix are untouched (visual only, same note size and
position logic).

## Hit effects (added Nov 11 after playtesting: "add fireworks")

A lightweight 2D canvas (`#fx`) overlaid on the highway, driven by its
own rAF loop that runs only while particles are alive. Hooked into
`judgeNote`, so every judged note fires at the gold hit line, in the
note's lane, coloured to match the pad (kick red, snare gold, hat blue,
splash pink):

- **Perfect:** 26-spark firework burst with white-hot cores, expanding
  gold ring, lane glow + pad flash (180 ms).
- **Good:** smaller version — 12 sparks, smaller pad-colour ring, softer flash.
- **Miss:** no explosion — just 6 slow grey puffs drifting up, so correct
  vs miss is instantly readable.
- Every 10 combo: extra gold ring + 12 gold sparks.
- Performance: hard cap of 160 particles, lifetimes 0.3–0.5 s, DPR capped
  at 2, loop stops when the last particle fades — no cost between hits,
  and it never touches the audio clock or note timing.

## Mix (fixed Nov 11 after playtesting: drums inaudible, backing too loud)

- Drum bus **+6 dB** (gain 2.0), backing/music bus **−6 dB** (gain 0.5) —
  drums sit ~12 dB above the backing. Master has a DynamicsCompressor
  limiter (threshold −6 dB, ratio 12) so coincident hits don't clip.
- Per-sample gains normalize the raw samples, whose peaks varied wildly
  (kick −10.7 dB, snare −23.0, hi-hat closed −23.9, splash −6.2): snare ×3.2,
  hi-hat closed ×3.5, splash ×0.5, hi-hat open ×1.6, crash ×0.9.
  After all gains every drum peaks around −5 to −8 dBFS vs backing −8.2 dBFS.
- **Ironclad heavy section, round 3 (Nov 11, Playtest note: "still overpowers
  the drums after 18s" — second report):** the round-2 runtime fix
  (musicGain 0.15 at 18 s + ducking) was verified present in the LIVE
  served `index.html` (byte-identical to local), so it was either a
  stale tab/cache on her phone or the dense wall still masking hits.
  Fixed at the FILE level instead: `songs/track4-quiet.mp3` was the
  Ironclad backing with 0–18 s untouched (mean −15.1 dB) and 18 s–end
  attenuated 12 dB (mean −20.8 dB, max −13.8 dB, 0.5 s ramp at
  18 s). Runtime section-flip logic is REMOVED; Ironclad `musicGain`
  is 0.5. No double attenuation.
- **Ironclad, round 4 (Nov 11, Playtest note: "-12 dB was too low, bring it 3/4
  back"):** `songs/track4-mid.mp3` re-rendered from the original
  `full-4-ironclad-clean-intro-heavy.mp3`: intro 0–18 s unchanged
  (mean −15.1 dB), heavy 18 s–end only −3 dB below the original
  (mean −11.9 dB vs original −8.7 dB, peak −2.7 dB, 0.5 s ramp at
  18 s) — i.e. +9.1 dB / 3/4 of the way back from the −12 dB cut.
  `musicGain` stays 0.5. Cache-busted again: `chart-v2.js` →
  `chart-v3.js?v=4`, `track4-quiet.mp3` → `track4-mid.mp3`; old files
  deleted.
- **Splash now optional, round 4 (Nov 11, Playtesting changed the call):**
  ALL splash notes removed from the charts (`chart-v3.js`, Node
  verified 0 splash notes in all 4 songs; charts are kick/snare/hat
  only). The SPLASH pad, 4th lane (labelled, pink) and title-screen
  try-out pad stay: tapping Splash anytime plays the cymbal with no
  penalty/score effect (free-play path in `tapPad`).
- **Cache-busting (same round):** `chart-v3.js` → `chart-v2.js?v=3` and
  `songs/track4.mp3` → `songs/track4-quiet.mp3`, because `chart-v3.js`
  and the MP3s are served `Cache-Control: public, max-age=3600,
  stale-while-revalidate=86400` — her phone could serve stale files
  for a day. New filenames force a fresh download. Old `chart-v3.js` /
  `track4.mp3` deleted from the game folder.
- **Splash lane, round 3 (Nov 11, Playtest note: "I still see no cymbal in the
  fourth purple lane"):** root causes found — (1) the highway had NO
  visible lanes at all: CSS defined `.lane` but the HTML never created
  any lane divs, so the 4th "lane" was just dark-purple background;
  the game now renders 4 tinted lanes with labels (KICK / SNARE /
  HI-HAT / SPLASH, splash lane pink-tinted). (2) Chart, pads, render
  and judge paths all mapped splash correctly (verified live
  `chart-v3.js` byte-identical, Node counts 40/34/41/46 splash notes),
  so the remaining suspect was the stale cached `chart-v3.js` (see
  cache-busting above) plus rarity — first splash is now in bar 0,
  slot 6, at 1.2–1.8 s in every song, then at least one per 2 bars
  (41/35/42/47 splash notes per song, max gap 3.1–4.8 s). A Node
  harness simulating pad → lane → draw for every note confirms 0
  unmapped notes.
- Pause screen has Drums / Music volume sliders (0–150%) for fine tuning.

## Title screen

Game-style front end: big gradient "ONE-THUMB DRUMS" title with 🥁 drum
art and floating notes, a gold **▶ TAP TO PLAY** button (starts
Cathedral Rain, Easy), song cards with difficulty badge + ▶ PLAY,
a 3-line how-to, drum try-out pads, and a CC0 credit footer.

## How it works

- Charts are generated from each song's BPM and section structure
  (`chart-v3.js`, `buildChart`) — kick/snare on the quarters, hats on
  the off-beats. No splash notes (Splash is an optional free-play pad).
  One note per eighth-note slot at most, so a single thumb can always
  reach the next note. Fast tracks (≥140 BPM) use a sparser chart.
- Timing runs on the Web Audio clock (`AudioContext.currentTime`),
  not `setTimeout`, so notes stay in sync with the backing track.
  Pause uses `AudioContext.suspend()`, which freezes the clock.
- Audio unlocks on the first tap (iOS requirement). All audio is
  decoded once at song start.

## Run locally

```bash
cd ~/workspace/one-thumb-drum-game/game
python3 -m http.server 8000
# open http://localhost:8000/ on your phone (same Wi-Fi)
```

## Files

- `index.html` — the whole game (UI, audio, scoring)
- `chart-v3.js` — track list + chart generation (also loadable in Node for tests)
- `songs/track1–4.mp3` — backing tracks (no drums)
- `drums/*.mp3` — kick, snare, hi-hats, crash, splash

## Hosting

Live playtest URL: https://nimble-ember-rxy6.here.now/
Published with here.now. Note: the stock `publish.py` fails uploading the
~3 MB song MP3s (urllib `RemoteDisconnected` on the R2 PUTs) — republish
with `../publish_retry.py`, which PUTs files with curl + retries:
`PYTHONPATH=/opt/muse/skills/custom-connector-setup/bin python3 ../publish_retry.py . "One-Thumb Drums"`
