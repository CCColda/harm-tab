import { AbcNoteDuration, ABCNoteDurationToToneDuration, ABCNoteToToneNote } from "./MusicNote";

const Play = (Tone: typeof import("tone"), notes: string[], durations: string[]) => {
	const synth = new Tone.Synth().toDestination();

	let time = Tone.now();

	for (let i = 0; i < notes.length; ++i) {
		if (!durations[i]) continue;

		const note = ABCNoteToToneNote(notes[i]);
		const dur = ABCNoteDurationToToneDuration(durations[i] as AbcNoteDuration); /* TODO */

		if (note)
			synth.triggerAttackRelease(note, dur, time);

		time = time + Tone.Time(dur).toSeconds();
	}
}

export { Play };
