import { DiaHarm } from "./Harmonica";

export namespace DataContext {
	export type BaseSheet = {
		layout: string,
		meter: string,
		key: string,
		title: string,
	};

	export type DiatonicSheet = {
		type: "diatonic",
		chords: (DiaHarm.Chord | DiaHarm.Silence | DiaHarm.Bar)[],
	};

	export type Sheet = BaseSheet & (DiatonicSheet | {
		type: "chromatic"
	} | {
		type: "unset"
	});

	export type Data = {
		ready: true,
		noteLength: string,
		mode: "chord" | "note",
		highlightedChord: number | null,

		layouts: HarmLayout[],
		sheet: Sheet;
	} | {
		ready: false
	};
}
