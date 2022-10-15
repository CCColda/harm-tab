import { Transport } from "../node_modules/tone/build/esm/index";
import { AbcNoteDuration, ABCNoteDurationToToneDuration, ABCNoteToToneNote } from "./MusicNote";

const Play = (Tone: typeof import("tone"), chords: string[][], durations: string[], timeMargin: number = 1) => {
	const synth = new Tone.PolySynth().toDestination();
	synth.sync();

	let time = 0;

	for (let i = 0; i < chords.length; ++i) {
		if (!durations[i]) continue;

		const dur = ABCNoteDurationToToneDuration(durations[i] as AbcNoteDuration); /* TODO */
		const notes = chords[i].map(v => ABCNoteToToneNote(v)).filter(v => !!v);

		synth.triggerAttackRelease(
			notes,
			Array(notes.length).fill(dur),
			time
		);

		time = time + Tone.Time(dur).toSeconds();
	}

	time = time + timeMargin;

	let timeout: NodeJS.Timeout;
	let resolve: (success: boolean) => void = null;

	return {
		promise: new Promise<boolean>((res, rej) => {
			resolve = res;
			timeout = Tone.getContext().setTimeout(() => {
				synth.disconnect();
				synth.dispose();
				Tone.Transport.clear();
				Tone.Transport.stop();
				console.log("disposed");
				resolve(true);
			}, time);
			Tone.Transport.start();
		}),
		stop: () => {
			if (timeout)
				Tone.getContext().clearTimeout(timeout);

			synth.disconnect();
			synth.dispose();
			Tone.Transport.clear();
			Tone.Transport.stop();
			resolve(false);
		}
	}
}

export { Play };
