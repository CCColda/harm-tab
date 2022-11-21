import { Data } from "../types/Data";

export const DefaultData = Object.freeze<Data>({
	insert: {
		duration: 8,
		mode: "note"
	},
	indices: {
		highlightedIndex: null,
		selectedIndex: null,
	},
	layouts: [],
	sheet: {
		type: "unset",
		layout: null,
		key: "C",
		metre: "4/4",
		title: "",
	},
});
