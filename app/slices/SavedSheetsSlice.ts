import { createSlice } from "@reduxjs/toolkit";
import { DefaultData } from "../../data/DefaultData";
import { DataSheets } from "../../types/Data";
import { HarmLayout } from "../../types/Harmonica";
import { loadDynamicSheets } from "../thunks/DynamicSheetsLoaderThunk";
import { fetchStaticSheets } from "../thunks/FetchStaticSheetsThunk";
import { loadFromURL } from "../thunks/URLLoaderThunk";

export type SavedSheetSliceType = {
	type: "static",
	sheet: DataSheets.Sheet,
} | {
	type: "dynamic",
	sheet: DataSheets.Sheet,
	identifier: string,
};

export const SavedSheetsSlice = createSlice({
	name: 'savedSheets',
	initialState: {
		value: [] as SavedSheetSliceType[]
	},
	reducers: {
		add: (state, action) => {
			/* if (!state.value.some(v => ))
			state.value */
		}
	},
	extraReducers: builder => {
		builder.addCase(fetchStaticSheets.fulfilled, (state, action) => {
			if (action.payload.length)
				state.value = [
					...state.value,
					...action.payload.filter(v => !state.value.some(w => v.sheet.title == w.sheet.title && v.sheet.key == w.sheet.key && v.sheet.layout == w.sheet.layout))
						.map(v => ({ type: "static", sheet: v.sheet }))
				] as SavedSheetSliceType[];
		});
		builder.addCase(loadDynamicSheets.fulfilled, (state, action) => {
			if (action.payload.length)
				state.value = [
					...state.value,
					...action.payload
						.filter(([k, v]) => !state.value.some(w => v.sheet.title == w.sheet.title && v.sheet.key == w.sheet.key && v.sheet.layout == w.sheet.layout))
						.map(([k, v]) => ({ type: "dynamic", sheet: v.sheet, identifier: k }))
				] as SavedSheetSliceType[];
		});
	},
});
