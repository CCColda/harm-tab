import { DiaHarmLayout } from "./DiatonicHarmonica";

export type HarmLayout = ({
	type: "diatonic",
	sign: string,
	layout: DiaHarmLayout
} | {
	type: "chromatic"
}) & {
	label: string
};

type HarmLayoutFile = {
	layouts: {
		[key: string]: HarmLayout
	}
};

export type HarmLayouts = HarmLayout[];

const LoadHarmonicaLayouts = (data: string): HarmLayouts => {
	const layoutData = JSON.parse(data) as HarmLayoutFile;

	return Object.values(layoutData.layouts);
};

export {LoadHarmonicaLayouts};