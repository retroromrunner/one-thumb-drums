# Backing-song samples — One-Thumb Jam drum game

Four original backing tracks to listen to and choose from. **None of them
contains any drums** — no kick, snare, hi-hat, cymbal or percussion of any
kind. The player supplies all the drums by tapping, using the real CC0 drum
kit in `../audio/`.

All three are **original compositions made for this game** from real recorded
instrument samples (not a famous song, not a drumless rip of one, not
synthesised).

## FULL SONGS (new — Nov 11, 2026)

All three loop samples below were extended to full songs, all three go in
the game and the player chooses a track at the start. Each has the same
structure — intro, verse, pre-chorus, chorus, interlude, chorus, ending —
and resolves cleanly at the end (no dead bars, verified: zero silent
100 ms windows in any track).

| # | File | Style | BPM | Length | Size |
|---|---|---|---|---|---|
| 1 | full-1-iron-pulse.mp3 | Driving rock — Em–C–G–D | 120 | 2:16 (68 bars) | 3.2 MB |
| 2 | full-2-cathedral-rain.mp3 | Dark / goth — Am–F–C–G | 100 | 2:14 (56 bars) | 3.1 MB |
| 3 | full-3-night-shift-reworked.mp3 | Fast Phrygian metal — F#m–G–A–E, gallop 16ths | 140 | 2:03 (72 bars) | 2.9 MB |
| 4 | full-4-ironclad.mp3 | Heavy metal — B harmonic minor, Bm–F#–E–G, distorted | 156 | 2:03 (80 bars) | 2.9 MB |
| 4h | full-4-ironclad-heavy.mp3 | **Ironclad HEAVY** — same song, much heavier distortion (see §4) | 156 | 2:03 (80 bars) | 2.9 MB |
| 4c | full-4-ironclad-clean-intro-heavy.mp3 | **Ironclad CLEAN INTRO + HEAVY** — clean intro 0:00–0:18, heavy from 0:18 on (see §4) | 156 | 2:03 (80 bars) | 2.9 MB |

Format: MP3, 44.1 kHz, mono, 192 kbps. Peak −1 dB, no clipping.
Tempos verified by onset-envelope autocorrelation on the rendered files:
120.0, 100.0, ~139.5 BPM (the last is the analysis grid; the grid itself
is exactly 140 BPM), and 156 BPM for track 4 (autocorrelation peaks at
156–157 BPM; the render grid is exactly 156). Dynamics verified: intro RMS ~0.05–0.10, chorus
~0.10–0.14, endings taper down. Track 4 dynamics: intro RMS 0.16, chorus
0.32, interlude 0.16, ending 0.18 — a driving metal intro that still lifts
into the chorus.

### 1 — Iron Pulse (120 BPM, E minor, 2:16)
- Intro 0:00–0:16 (bars 1–8): piano chords + soft bass, guitar joins bar 5
- Verse 0:16–0:32 (bars 9–16): bass 8ths, guitar stabs, piano chords
- Pre-chorus 0:32–0:48 (bars 17–24): rising arpeggio, crescendo
- Chorus 0:48–1:20 (bars 25–40): full power chords, lead line bars 2/4
- Interlude 1:20–1:36 (bars 41–48): piano-led, guitar returns bar 45
- Chorus 1:36–2:08 (bars 49–64): full, lead variation
- Ending 2:08–2:16 (bars 65–68): final Em chord, piano answer, resolve
- **Drums:** kick 1 & 3, snare 2 & 4, hat 8ths.

### 2 — Cathedral Rain (100 BPM, A minor, 2:14)
- Intro 0:00–0:19 (bars 1–8): piano arpeggio solo, bass from bar 5
- Verse 0:19–0:38 (bars 9–16): piano + bass walk-up, soft guitar arpeggio
- Pre-chorus 0:38–0:58 (bars 17–24): rising, guitar stabs
- Chorus 0:58–1:26 (bars 25–36): full guitar + piano chords
- Interlude 1:26–1:46 (bars 37–44): piano solo + bass
- Chorus 1:46–2:05 (bars 45–52): full
- Ending 2:05–2:14 (bars 53–56): final Am chord, piano answer, resolve
- **Drums:** kick 1 + walk-up, snare 2 & 4, hat 8ths, crash per 4-bar group.

### 3 — Night Shift, REWORKED (140 BPM, F# Phrygian, 2:03)
**Changed vs the loop sample:** the old Dm–Bb–F–C progression and its
eighth-note chug riff were too close to Iron Pulse. The rework is a
different song: key F# Phrygian (F#–G semitone clash), progression
F#m–G–A–E, a descending chromatic Phrygian riff (Gb–F–E–Eb–D), and a
16th-note gallop bass with palm-muted guitar chugs instead of straight
8th-note chugging. Same speed and energy, recognisably different.
- Intro 0:00–0:14 (bars 1–8): muted chugs + gallop bass, piano bar 5
- Verse 0:14–0:27 (bars 9–16): gallop, off-beat guitar stabs
- Pre-chorus 0:27–0:41 (bars 17–24): Phrygian riff over gallop
- Chorus 0:41–1:09 (bars 25–40): full chugs + power chords, riff fills
- Interlude 1:09–1:22 (bars 41–48): piano + bass, chugs return bar 45
- Chorus 1:22–1:50 (bars 49–64): full
- Ending 1:50–2:03 (bars 65–72): final F#m, chugs, piano, resolve
- **Drums:** kick on the gallop, snare 2 & 4, open hat off-beats, toms on fills.

### 4 — Ironclad (156 BPM, B harmonic minor, 2:03)
**Heavy metal, the fastest track.** Key B harmonic minor
(B C# D E F# G A# — the raised 7th, A#, is the harmonic-minor colour),
progression **Bm–F#–E–G** (i–V–iv–VI; F# and E are major).
Clearly different from the other three — it shares at most one chord
with each in a different position/order: vs Iron Pulse (Em–C–G–D) only G,
vs Cathedral Rain (Am–F–C–G) only G, vs Night Shift (F#m–G–A–E) the
roots F#/G/E recur but F# is major here (minor there) and the order
F#→E, E→G, G→Bm matches none of them. No piano — guitar-led, as a
metal track should be.
- **Distortion:** the guitar bus (real Emilyguitar recordings + muted
  chugs) is rendered separately from the bass bus and run through a real
  waveshaping distortion — pre-gain ×4, tanh soft-clip, one-pole
  low-pass to tame the fizz, blended 70% distorted / 30% dry — then
  summed with the clean bass bus (`compose_track4.py`). Amp-style
  distortion on real recorded notes, not a synthesised tone.
- **Riffs & hooks:** the main riff is a root-pedal 8th-note riff that
  changes shape over every chord (Bm: B–B–F#–B–A#–B–G–F#; F#: F#–F#–C#–
  F#–A#–F#–C#–A#; E: E–E–B–E–D#–E–G#–B; G: G–G–D–G–F#–G–B–D). The
  chorus hook is a repeating lead line B4–A#4–G4–F#4–E4–F#4–G4–A#4 on
  alternate bars. The pre-chorus is an ascending B harmonic-minor scale
  run (B–C#–D–E–F#–G–A#–B). The interlude is a lead-guitar answer
  phrase over soft bass, with the riff returning for the last 4 bars.
- Intro 0:00–0:12 (bars 1–8): muted chugs + gallop bass, riff enters bar 5
- Verse 0:12–0:31 (bars 9–20): main riff, bass 8ths, off-beat chugs
- Pre-chorus 0:31–0:43 (bars 21–28): scale run, gallop bass, rising
- Chorus 0:43–1:08 (bars 29–44): full power chords + hook, gallop bass
- Interlude 1:08–1:26 (bars 45–56): lead answer phrase, soft bass, riff returns bar 53
- Chorus 1:26–1:51 (bars 57–72): full, hook
- Ending 1:51–2:03 (bars 73–80): final Bm chord, riff fragment, hook fragment, chugs, scale run, resolve — no dead bars
- **Drums:** kick on the gallop / every quarter, snare 2 & 4, hats on 8ths/16ths, toms and crash on the riff accents and chorus hook. The fastest, hardest track — best as the final song / hard mode.
- **Bass:** real Swagbass driving underneath throughout — 8ths in the verse, 16th gallop in intro/chorus/pre-chorus, half notes in the interlude. Guitar AND bass, as specified.

### 4 — Ironclad HEAVY version (Nov 11, 2026)
Playtesting loved the track but said the guitar sounded like clean guitar with
reverb, not heavy enough. Re-rendered as
full-4-ironclad-heavy.mp3
— same song, same notes/riff/hook/structure/tempo (156 BPM)/length
(2:03)/bass, ONLY the guitar distortion chain changed
(`compose_track4_heavy.py`). Old
full-4-ironclad.mp3
kept for comparison.
- **New chain:** pre-gain ×10 tanh, second tanh stage ×3 + hard clip at
  ±0.85, double-tracked (second take pre-gain ×8, 6 ms delay),
  **100% wet / 0% dry** (the old 30% clean blend was part of the
  "sounds clean" problem), soft noise gate on the guitar bus to cut the
  washy sample-decay tails she heard as reverb, then post-distortion EQ
  (high-pass 90 Hz, low-pass 5.2 kHz) to tame fizz. Bass clean and
  untouched. (Note: there was no reverb effect in the old render at all
  — the washy sound was the clean blend + the samples' long natural
  decay; the gate addresses the decay directly.)
- **Measured heavier (old → heavy):** overall RMS 0.255 → 0.371 (+45%),
  crest factor 3.39 → 2.33 (more saturated/compressed), samples within
  80% of peak 0.3% → 2.9% (10× more near-peak), spectral centroid
  940 Hz → 1671 Hz (far more harmonic energy). Same 123.1 s length,
  peak −1 dB, no clipping, zero silent 100 ms windows. One side effect
  to listen for: distortion compresses dynamics, so the interlude
  (soft lead + bass) is now nearly chorus-loud (RMS 0.369 vs chorus
  0.392, was 0.160 vs 0.317) — the breather is less of a breather.

### 4 — Ironclad CLEAN INTRO + HEAVY (Nov 11, 2026)
Playtesting asked for the first 18 seconds of the original (clean) version at
the front of the heavy version, so the intro is clean guitar and the
rest is heavy. full-4-ironclad-clean-intro-heavy.mp3
— splice of full-4-ironclad.mp3
0:00–0:18 and
full-4-ironclad-heavy.mp3
0:18–end, joined with a 0.3 s triangular crossfade at the 18 s mark
(ffmpeg `acrossfade`; both files share the same 156 BPM grid, so the
splice lands on the beat). Neither source file was overwritten.
- **Verified:** total length 123.08 s (2:03, same as both sources),
  MP3 44.1 kHz mono 192 kbps, peak −1.5 dB, no clipping, zero silent
  100 ms windows, and RMS rises smoothly through the join
  (0.21 → 0.35 across 17.5–18.5 s, no dip or click) — the clean intro
  is quieter by design, then the heavy guitar kicks in at 0:18.

## What changed vs the loop samples — realism

Playtesting found the loops sounded fake/synthesised. The samples were always real
recordings, so the fakeness came from how they were rendered. The full
songs fix the rendering (`compose_full.py`, reproducible — re-run it):
- **Nearest real pitch, max 1 semitone:** every note now uses the closest
  actually-recorded pitch (guitar/bass sample A/C/Db/E/Eb/Gb, piano samples
  A#/C/D/E/F#/G# — between them every chromatic pitch is ≤1 semitone from a
  real recording). The loops shifted up to 2 semitones.
- **Real velocity layers:** guitar mp/mf/f, bass p/f, piano vl2/vl3, chosen
  by section dynamics (soft intro, loud chorus) instead of one mf layer.
- **Round-robin takes:** rr1/rr2 alternate on repeated notes, so no two
  identical hits in a row.
- **Humanisation:** seeded timing jitter ±8 ms and gain variation ±12%.
- **Strummed chords:** guitar chord notes staggered 8–14 ms low→high,
  instead of all hitting at the same instant.
- **Natural ring:** notes keep their full recorded decay (guitar ~2.5 s,
  piano ~4–6 s); bass is monophonic like a real bass. The loops cut every
  note to 0.45 of a beat with a 20% fade.
- **Gentler mix:** tanh 0.9 instead of 1.2, peak −1 dB.
- **NEW — real piano:** VCSL Steinway B grand piano (Sus, close mics),
  https://github.com/sgossner/VCSL — **CC0 1.0**. Piano carries the
  intro/interlude of every song and chords throughout; it is sampled on a
  whole-tone grid, so every piano note is also ≤1 semitone from a real
  recording. Samples trimmed to 6 s on download (originals are ~30 s).
- **NEW — palm-muted guitar chugs** (song 3): real muted-string noises
  from the Emilyguitar library, not a gated synth.

## The samples (original loops — kept untouched)

| # | File | Style | BPM | Length | Size |
|---|---|---|---|---|---|
| 1 | sample-1-iron-pulse-120bpm.mp3 | Driving rock — Em–C–G–D | 120 | 32.0 s (16 bars) | 627 KB |
| 2 | sample-2-cathedral-rain-100bpm.mp3 | Dark / goth — Am–F–C–G | 100 | 38.4 s (16 bars) | 752 KB |
| 3 | sample-3-night-shift-140bpm.mp3 | Fast metalcore / punk — Dm–Bb–F–C | 140 | 41.1 s (24 bars) | 805 KB |

Format: MP3, 44.1 kHz, mono, 160 kbps. Peak level −1 dB, no clipping.
Tempos verified by onset-envelope autocorrelation on the rendered files:
120.0, 100.0 and ~139.5 BPM (the last is the 10 ms analysis grid, the
grid itself is exactly 140 BPM). No silent gaps in any track.

### 1 — Iron Pulse (120 BPM, E minor)
Driving rock riff. Bass plays eighth notes with an octave jump on beat 3;
electric guitar plays power-chord stabs (root + fifth) on beats 1, 2½, 3, 4,
with a short E-minor-pentatonic lead line in bars 2 and 4 of each group.
**Where the drums land:** kick on beats 1 and 3 (with the bass), snare on
beats 2 and 4, hi-hat on the eighth notes between — the classic rock beat,
and the guitar stabs give the player obvious hit targets.

### 2 — Cathedral Rain (100 BPM, A minor)
Slower, darker, goth-leaning. Bass holds half-note roots with a walk-up in
the second half of each bar; guitar plays a sustained eighth-note arpeggio
(root–3rd–5th–octave) over a low sustained root pad.
**Where the drums land:** kick on beat 1 and the walk-up notes, snare on
beats 2 and 4, closed hat on eighth notes, crash on the first beat of each
4-bar group. The empty space between arpeggio notes is where fills belong —
good for a slower, moodier level.

### 3 — Night Shift (140 BPM, D minor)
Fastest and hardest. Bass drives eighth notes; guitar chugs short
root+fifth hits on every eighth, with a lead fill in the last bar of each
4-bar group.
**Where the drums land:** kick on every quarter note (four-on-the-floor
feel), snare on 2 and 4, open hat on the off-beats, toms for the fill at
the end of each group. Best as the fast final song / hard mode.

## Instruments and licence

- Electric guitar: **Karoryfer Emilyguitar** — real recorded electric-guitar
  notes (D. Smolken / Karoryfer Lecolds, 2014),
  https://github.com/sfzinstruments/karoryfer.emilyguitar — **CC0 1.0**
- Electric bass: **Karoryfer Swagbass** — real recorded electric-bass notes
  (D. Smolken / Karoryfer Lecolds, 2014),
  https://github.com/sfzinstruments/karoryfer.swagbass — **CC0 1.0**
- Grand piano (full songs only): **VCSL Steinway B** — real recorded grand
  piano, Sus / close mics (Versilian Studios),
  https://github.com/sgossner/VCSL — **CC0 1.0**
- Compositions themselves: original, written for this game, **CC0 1.0** —
  no attribution required, safe to ship in an itch.io jam game (commercial
  or not). Courtesy credit to Karoryfer Samples / Versilian Studios is
  welcome but not required.

How they were made: `compose.py` (loops), `compose_full.py` (full songs
1–3) and `compose_track4.py` (full song 4, with its own distortion
stage on the guitar bus) in this folder (reproducible — re-run them to
regenerate). Sample sources for the full songs are in `src_full/` (guitar/bass/piano, trimmed piano).
Each note is a real recorded sample, pitch-shifted at most 1 semitone by
resampling to reach the needed pitch, placed on a humanised beat grid.
Nothing was synthesised and no drum or percussion sample was used anywhere
in the mix.

## What was rejected, and why

- **Free Music Archive "Melodies/Samples [No Drums]" (1000 Handz)** —
  genuinely drum-free and CC-BY, but ambient/electronic, no driving beat
  and no rock energy; wrong feel for a drum game.
- **Incompetech / Kevin MacLeod rock tracks** — CC-BY and usable, but
  almost all of them *have* a drum kit in the mix; layering the player's
  drums over existing drums defeats the concept.
- **Drumless versions of famous songs** (DrumlessVersion, DDrums, YouTube
  play-alongs) — practice-only; shipping one in a jam game would be a
  copyright problem even with the drums removed.
- **SFXMint** — checked earlier for the drum kit and ruled out: its sounds
  are AI-generated/synthesised, not real recordings.
- **VCSL alone** — the Versilian library has no electric guitar or bass
  (piano, harp, organ, orchestral), so it could not carry a rock backing
  on its own; Karoryfer's CC0 guitar/bass were used instead.
