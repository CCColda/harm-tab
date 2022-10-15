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
		chords: DiaHarm.Chord[],
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

		layouts: HarmLayout[],
		sheet: Sheet;
	} | {
		ready: false
	};
}
