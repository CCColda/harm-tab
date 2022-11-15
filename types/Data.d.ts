import { DiaHarm, HarmLayout } from "./Harmonica"
import { NoteDuration } from "./MusicNote";

export namespace DataSheets {
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
}

export interface Data {
	memory: {
		insert: {
			duration: NoteDuration,
			mode: "chord" | "note"
		},
		highlightedIndex: number | null,
		selectedIndex: number | null,
		layouts: HarmLayout[],
	},
	saved: {
		sheet: DataSheets.Sheet
	}
}
