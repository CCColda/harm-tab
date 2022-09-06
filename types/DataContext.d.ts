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
		notes: Duration<DiaHarm.SoundPosition>[];
	};

	export type Duration<T> = T & { duration: string };

	export type Sheet = BaseSheet & (DiatonicSheet | {
		type: "chromatic"
	} | {
		type: "unset"
	});

	export type Data = {
		ready: true,
		noteLength: string,

		layouts: HarmLayout[],
		sheet: Sheet;
	} | {
		ready: false
	};
}
