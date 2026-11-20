// Drum chart data + generation for Dream in Music (AI Jam #7 entry).
// Built in-window Nov 13, 2026 from the One-Thumb drum engine + songs (prep).
// Same charts and audio — each song is now one dream.
// Shared by index.html (browser) and node test harness (module.exports).
const TRACKS = [
  { id: 1, title: 'Dream II · Iron Pulse', file: 'songs/track1.mp3', bpm: 120, duration: 136.0,
    difficulty: 'Medium', tag: 'Driving rock · Em–C–G–D', musicGain: 1.0,
    sections: [[16,'intro'],[32,'verse'],[48,'pre'],[80,'chorus'],[96,'interlude'],[128,'chorus'],[136,'ending']] },
  { id: 2, title: 'Dream I · Cathedral Rain', file: 'songs/track2.mp3', bpm: 100, duration: 134.4,
    difficulty: 'Easy', tag: 'Dark / goth · Am–F–C–G', musicGain: 1.0,
    sections: [[19,'intro'],[38,'verse'],[58,'pre'],[86,'chorus'],[106,'interlude'],[125,'chorus'],[134.4,'ending']] },
  { id: 3, title: 'Dream III · Night Shift', file: 'songs/track3.mp3', bpm: 140, duration: 123.4,
    difficulty: 'Hard', tag: 'Fast Phrygian metal · F#m–G–A–E', musicGain: 1.0,
    sections: [[14,'intro'],[27,'verse'],[41,'pre'],[69,'chorus'],[82,'interlude'],[110,'chorus'],[123.4,'ending']] },
  { id: 4, title: 'Dream IV · Ironclad', file: 'songs/track4-mid.mp3', bpm: 156, duration: 123.1,
    difficulty: 'Expert', tag: 'Heavy metal · B harmonic minor · clean intro, heavy after 0:18',
    // FILE-LEVEL mix (Nov 11, round 4): Cori said the -12 dB cut in
    // track4-quiet.mp3 was too much, so the heavy section (18s+) in
    // track4-mid.mp3 is only -3 dB below the original (mean ~-11.7 dB),
    // i.e. 3/4 of the way back up. Intro 0-18s untouched. musicGain 0.5
    // keeps the intro in line with the other tracks.
    musicGain: 0.5,
    sections: [[12,'intro'],[31,'verse'],[43,'pre'],[68,'chorus'],[86,'interlude'],[111,'chorus'],[123.1,'ending']] },
];

function sectionKindAt(track, t) {
  for (const [end, kind] of track.sections) if (t < end) return kind;
  return 'ending';
}

// One note per eighth-note slot at most, so a single thumb can always
// reach the next note. Pattern per bar (8 eighth slots):
//   0 kick, 1 hat, 2 snare, 3 hat, 4 kick, 5 hat, 6 snare, 7 hat
// Fast tracks (>=140 BPM) drop to quarter-note core + sparse hats,
// because eighths at 156 BPM are ~192 ms apart.
// SPLASH is OPTIONAL (Nov 11, Cori changed her mind): no splash notes
// are generated in any chart — the SPLASH pad stays as a free-play pad
// (tap anytime, plays the cymbal, no penalty/score). Charts are kick /
// snare / hat only. Slot 6 in fill bars is a snare, as elsewhere.
function buildChart(track) {
  const beat = 60 / track.bpm, eighth = beat / 2, barDur = beat * 4;
  const fast = track.bpm >= 140;
  const notes = [];
  const bars = Math.floor(track.duration / barDur);
  for (let bar = 0; bar < bars; bar++) {
    const barStart = bar * barDur;
    const kind = sectionKindAt(track, barStart + 0.01);
    const isChorus = kind === 'chorus';
    const hatSlots = fast
      ? (isChorus ? [1, 5] : kind === 'verse' || kind === 'pre' ? [3] : [])
      : (isChorus ? [1, 3, 5, 7] : kind === 'verse' ? [1, 5] : kind === 'pre' ? [1, 3, 5] : kind === 'interlude' ? [3] : []);
    const push = (slot, pad, sample) => notes.push({ t: +(barStart + slot * eighth).toFixed(3), pad, sample, hit: false, judged: false });
    push(0, 'kick', 'kick');
    if (kind !== 'intro' || bar >= 4) push(2, 'snare', 'snare');
    if (kind === 'chorus' || kind === 'pre' || kind === 'verse') push(4, 'kick', 'kick');
    if (kind !== 'intro') push(6, 'snare', 'snare');
    for (const s of hatSlots) {
      // don't stack a hat on a slot that already has a note
      if (notes.some(n => Math.abs(n.t - (barStart + s * eighth)) < 0.01)) continue;
      push(s, 'hat', s === 7 && isChorus ? 'hihat-open' : 'hihat-closed');
    }
  }
  notes.sort((a, b) => a.t - b.t);
  return notes;
}

if (typeof module !== 'undefined') module.exports = { TRACKS, buildChart, sectionKindAt };
