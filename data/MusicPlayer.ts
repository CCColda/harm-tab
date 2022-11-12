import { AbcNoteDuration, ABCNoteDurationToToneDuration, ABCNoteToToneNote } from "./MusicNote";

export type MusicPlayerData = {
	chords: string[][],
	durations: string[],
	timeMargin?: number,
	chordCallback?: (idx: number, chord: string[], duration: string) => void,
};

const Play = (Tone: typeof import("tone"), data: MusicPlayerData) => {
	const synth = new Tone.PolySynth().toDestination();
	synth.sync();

	let time = 0;
	let callbacks: any[] = [];

	for (let i = 0; i < data.chords.length; ++i) {
		if (data.chordCallback)
			callbacks.push(
				Tone.getContext().setTimeout(
					() => data.chordCallback(i, data.chords[i], data.durations[i]),
					time
				)
			);

		if (!data.durations[i]) continue;

		const dur = ABCNoteDurationToToneDuration(data.durations[i] as AbcNoteDuration); /* TODO */

		if (!data.chords[i].includes("z")) {
			const notes = data.chords[i].map(v => ABCNoteToToneNote(v)).filter(v => !!v);

			synth.triggerAttackRelease(
				notes,
				Array(notes.length).fill(dur),
				time
			);
		}

		time = time + Tone.Time(dur).toSeconds();
	}

	time = time + (data.timeMargin ?? 1);

	let timeout: number;
	let resolve: (success: boolean) => void = null;

	return {
		promise: new Promise<boolean>((res, rej) => {
			resolve = res;
			timeout = Tone.getContext().setTimeout(() => {
				synth.disconnect();
				synth.dispose();
				Tone.Transport.cancel();
				Tone.Transport.stop();
				console.log("disposed");
				resolve(true);
			}, time);
			Tone.Transport.start();
		}),
		stop: () => {
			if (timeout)
				Tone.getContext().clearTimeout(timeout);

			for (const callback of callbacks)
				Tone.getContext().clearTimeout(callback);

			synth.disconnect();
			synth.dispose();
			Tone.Transport.cancel();
			Tone.Transport.stop();
			resolve(false);
		}
	}
}

export { Play };
