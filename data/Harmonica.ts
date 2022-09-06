import { HarmLayout } from "../types/Harmonica";

type HarmLayoutFile = {
	layouts: {
		[key: string]: HarmLayout
	}
};

const LoadHarmonicaLayouts = (data: string): HarmLayout[] => {
	const layoutData = JSON.parse(data) as HarmLayoutFile;

	return Object.values(layoutData.layouts);
};

export { LoadHarmonicaLayouts };