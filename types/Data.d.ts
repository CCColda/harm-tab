import { DiaHarm, HarmLayout } from "./Harmonica"
import { NoteDuration } from "./MusicNote";

export namespace DataSheets {
	export type BaseSheet = {
		layout: string,
		metre: string,
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
}

export interface Data {
	insert: {
		duration: NoteDuration,
		mode: "chord" | "note"
	},
	indices: {
		highlightedIndex: number | null,
		selectedIndex: number | null,
	},
	layouts: HarmLayout[],
	sheet: DataSheets.Sheet,
}
