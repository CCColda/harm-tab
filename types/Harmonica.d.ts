import { AbcNote } from "../data/MusicNote";

export namespace DiaHarm {
	export type PositionNum = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
	export type BendNum = 0 | 1 | 2 | 3;
	export type Direction = "in" | "out";

	export type Position = {
		dir: Direction,
		bend?: BendNum,
		position: PositionNum
	};

	export type Sound = {
		dir: Direction,
		bend?: BendNum,
		note: AbcNote
	};

	export type SoundPosition = Sound & {
		position: PositionNum
	};

	export type Layout = Record<
		`${PositionNum}`,
		Sound[]
	>;

	export type Chord = {
		notes: SoundPosition[],
		duration: string,
	};
}

export type HarmLayout = ({
	type: "diatonic",
	sign: string,
	layout: DiaHarmLayout
} | {
	type: "chromatic"
}) & {
	label: string
};