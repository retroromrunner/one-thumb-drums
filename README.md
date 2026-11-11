# One-Thumb Drums

A mobile portrait one-thumb drum rhythm game. The backing tracks have **no drums** — you are the drummer.

**Play it:** https://nimble-ember-rxy6.here.now/

Made for the [exidex One-Thumb Jam](https://itch.io/jam/exidex-one-thumb-jam) — a game for phones that plays with one thumb, held in portrait.

## How to play

Pick a song, then tap the matching pad as each note crosses the gold line:

- **KICK** — beat 1 & 3
- **SNARE** — beat 2 & 4
- **HI-HAT** — off-beats
- **SPLASH** — optional free-play pad: tap it anytime for a cymbal accent, no penalty, no score effect

Scoring: Perfect (±70 ms, 300 pts), Good (±140 ms, 100 pts), Miss. Tapping a pad with no note nearby just plays the drum sound (free play, no penalty). Pause / restart from the pause button; a results screen at the end shows score, Perfect/Good/Miss, max combo, accuracy and a grade (S/A/B/C/D).

Falling notes are glossy drum-head discs with a per-pad icon (kick 🥁, snare ✦, hi-hat ◎, splash ✹), each leaving a sparkle-and-smoke trail. A correct hit fires a firework burst at the gold line — big on Perfect, smaller on Good, grey puffs on a Miss.

## Tracks

Pick one at the start. All four are original compositions, made from real recorded instrument samples, with no drums anywhere in the mix.

| # | Song | BPM | Length | Difficulty | Style |
|---|---|---|---|---|---|
| 1 | Iron Pulse | 120 | 2:16 | Medium | Driving rock, Em–C–G–D |
| 2 | Cathedral Rain | 100 | 2:14 | Easy | Dark / goth, Am–F–C–G |
| 3 | Night Shift | 140 | 2:03 | Hard | Fast Phrygian metal, F#m–G–A–E |
| 4 | Ironclad | 156 | 2:03 | Expert | Heavy metal, B harmonic minor, Bm–F#–E–G — clean intro 0:00–0:18, heavy distortion after |

## Credits

- **Designer** — design, code, composition
- Drum samples: real acoustic recordings from the [Versilian Community Sample Library (VCSL)](https://github.com/sgossner/VCSL), **CC0 1.0** — see [docs/audio-kit.md](docs/audio-kit.md)
- Backing tracks: original compositions from real recorded samples — Karoryfer Emilyguitar (electric guitar) and Swagbass (electric bass), plus VCSL Steinway B grand piano, all **CC0 1.0** — see [docs/backing-samples.md](docs/backing-samples.md)
- Playtest notes and mix history: [docs/playtest-notes.md](docs/playtest-notes.md)

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000/ on your phone (same Wi-Fi)
```

## Files

- `index.html` — the whole game (UI, audio, scoring)
- `chart-v3.js` — track list + chart generation (also loadable in Node for tests)
- `songs/track1–4.mp3` — backing tracks (no drums; track 4 is the clean-intro + heavy Ironclad, heavy section −3 dB)
- `drums/*.mp3` — kick, snare, hi-hats, crash, splash
- `docs/` — drum-kit sources, backing-track sources, playtest notes

## What's next — the Dream variant (AI Jam #7)

This repo is the base for a themed variant, **Dream in Music**, for the [Ultimate AI-Powered Game Jam #7](https://itch.io/jam/ultimate-ai-powered-game-jam-7) (theme: DREAM, Nov 13–16, 2026). The plan — **not built yet**, to be done in the jam window by branching this repo:

- Branch this repo and tag the Dream release separately.
- Reskin the falling notes as **clouds floating down** the lanes.
- Jazz up the background: **dream rainbow-coloured swirls, twinkling stars, animated falling stars fading in and out** behind the highway.
- Same drum engine, same songs, new dream framing — drumming inside a dream.
