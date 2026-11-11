# Drum kit — One-Thumb Jam game

Real acoustic drum one-shots, trimmed and converted for mobile web play.
All samples are **real recordings** (not synthesized) from the Versilian
Community Sample Library (VCSL).

- **Source:** https://github.com/sgossner/VCSL
- **License:** CC0 1.0 Universal (public domain) — free for commercial and
  personal use, no attribution required. VCSL LICENSE file is CC0 1.0.
- **Format:** MP3, 44.1 kHz, mono, 128 kbps. Converted from the original
  44.1 kHz stereo WAVs (16-bit, except tom-mid which was 24-bit) with
  ffmpeg; trimmed to the useful hit and given a short fade-out tail so
  rapid re-triggers stay clean. Total kit size: ~160 KB.

## Files

| File | Drum | VCSL source file | Source URL | Trimmed length |
|---|---|---|---|---|
| `kick.mp3` | Kick / bass drum | `Membranophones/Struck Membranophones/Bass Drum 1/BDrumNew_hit_v5_rr1_Sum.wav` | https://raw.githubusercontent.com/sgossner/VCSL/master/Membranophones/Struck%20Membranophones/Bass%20Drum%201/BDrumNew_hit_v5_rr1_Sum.wav | 0.8 s |
| `snare.mp3` | Snare (snares on) | `Membranophones/Struck Membranophones/Snare Drum, Modern 1/Snare2_HitSN_v5_rr1_Mid.wav` | https://raw.githubusercontent.com/sgossner/VCSL/master/Membranophones/Struck%20Membranophones/Snare%20Drum%2C%20Modern%201/Snare2_HitSN_v5_rr1_Mid.wav | 0.8 s |
| `hihat-closed.mp3` | Closed hi-hat | `Idiophones/Struck Idiophones/Hi-Hat Cymbal/HiHat_Close_rr1_Mid.wav` | https://raw.githubusercontent.com/sgossner/VCSL/master/Idiophones/Struck%20Idiophones/Hi-Hat%20Cymbal/HiHat_Close_rr1_Mid.wav | 0.5 s |
| `hihat-open.mp3` | Open hi-hat | `Idiophones/Struck Idiophones/Hi-Hat Cymbal/HiHat_HitO_rr1_Mid.wav` | https://raw.githubusercontent.com/sgossner/VCSL/master/Idiophones/Struck%20Idiophones/Hi-Hat%20Cymbal/HiHat_HitO_rr1_Mid.wav | 1.0 s |
| `crash.mp3` | Crash cymbal | `Idiophones/Struck Idiophones/Clash Cymbals 1/cymbal_crash1_mf1.wav` | https://raw.githubusercontent.com/sgossner/VCSL/master/Idiophones/Struck%20Idiophones/Clash%20Cymbals%201/cymbal_crash1_mf1.wav | 2.0 s |
| `tom-high.mp3` | High tom | `Membranophones/Struck Membranophones/Tom 1/Stick/TomH_HitS_v3_rr1_Mid.wav` | https://raw.githubusercontent.com/sgossner/VCSL/master/Membranophones/Struck%20Membranophones/Tom%201/Stick/TomH_HitS_v3_rr1_Mid.wav | 1.0 s |
| `tom-mid.mp3` | Mid tom (tenor, higher) | `Membranophones/Struck Membranophones/Legacy Toms/tenor_higher/tenorH_mf_rr1.wav` | https://raw.githubusercontent.com/sgossner/VCSL/master/Membranophones/Struck%20Membranophones/Legacy%20Toms/tenor_higher/tenorH_mf_rr1.wav | 1.0 s |
| `tom-floor.mp3` | Floor tom (low) | `Membranophones/Struck Membranophones/Tom 2/Stick/TomL_HitS_v3_rr1_Mid.wav` | https://raw.githubusercontent.com/sgossner/VCSL/master/Membranophones/Struck%20Membranophones/Tom%202/Stick/TomL_HitS_v3_rr1_Mid.wav | 1.0 s |
| `splash.mp3` | Splash cymbal (short bright accent; VCSL has no dedicated splash — this is its short clash-cymbal hit, used in the splash role) | `Idiophones/Struck Idiophones/Clash Cymbals 1/cymbal_crash1_short1.wav` | https://raw.githubusercontent.com/sgossner/VCSL/master/Idiophones/Struck%20Idiophones/Clash%20Cymbals%201/cymbal_crash1_short1.wav | 1.0 s (trimmed from 2.4 s, fade tail) |

## Notes

- Velocity choice: mid-velocity hits (v3–v5) were picked deliberately —
  loud enough to cut through a backing track, not so hot they clip.
- Open hi-hat and crash were trimmed from long originals (5.8 s and 8.5 s)
  to 1.0 s / 2.0 s; the natural decay is preserved with a fade tail.
- SFXMint was **not** used for this kit: its library is AI-generated /
  procedurally synthesized, not real acoustic recordings, so it did not
  meet the "authentic real sound" requirement. The SFXMint acoustic
  drum-kit direct links do exist (kick/snare/crash verified 200), but
  several names in the guessed pattern 404'd and the sounds are synthetic.
- Karoryfer Gogodze Phu Vol II (also CC0) was checked and ruled out —
  it is a single melodic instrument library, not a drum kit.
- Backing track (a song with no drum track) is **not** included here —
  still to be sourced. A real CC0 drum-less backing track needs its own
  search; do not use a copyrighted song.
