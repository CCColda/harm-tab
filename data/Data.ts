import { useState } from "react";
import { Data, DataSheets } from "../types/Data";

export const DefaultData = Object.freeze<Data>({
	memory: {
		insert: {
			duration: 8,
			mode: "note"
		},
		highlightedIndex: null,
		selectedIndex: null,
		layouts: [],
	},
	saved: {
		sheet: {
			type: "unset",
			layout: null,
			key: "C",
			metre: "4/4",
			title: "",
		},
	},
});

type ReactStateCallbackFunction<T> = ReturnType<typeof useState<T>>[1];

type DataSetFunctions = {
	setMemory: ReactStateCallbackFunction<Data["memory"]>,
	setSaved: ReactStateCallbackFunction<Data["saved"]>,
}

export const DataFN = (functions: DataSetFunctions) => {
	const setDuration = (newDuration: Data["memory"]["insert"]["duration"]) =>
		functions.setMemory(oldMemory => ({ ...oldMemory, insert: { ...oldMemory.insert, duration: newDuration } }));

	const setMode = (newMode: Data["memory"]["insert"]["mode"]) =>
		functions.setMemory(oldMemory => ({ ...oldMemory, insert: { ...oldMemory.insert, mode: newMode } }));

	const setHighlighted = (newHighlight: number | null) =>
		functions.setMemory(oldMemory => ({ ...oldMemory, highlightedIndex: newHighlight }));

	const setSelected = (newSelect: number | null) =>
		functions.setMemory(oldMemory => ({ ...oldMemory, selectedIndex: newSelect }));

	const setLayouts = (newLayouts: Data["memory"]["layouts"]) =>
		functions.setMemory(oldMemory => ({ ...oldMemory, layouts: newLayouts }));

	const setSheet = (newSheet: DataSheets.Sheet) =>
		functions.setSaved(oldSaved => ({ ...oldSaved, sheet: newSheet }));

	const modifySheet = (fn: (oldSheet: DataSheets.Sheet) => DataSheets.Sheet) =>
		functions.setSaved(oldSaved => ({ ...oldSaved, sheet: fn(oldSaved.sheet) }));

	return Object.freeze({
		memory: {
			insert: { setDuration, setMode },
			setHighlighted,
			setSelected,
			setLayouts,
		},
		saved: { setSheet, modifySheet },
	})
}
