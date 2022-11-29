import { createSlice } from "@reduxjs/toolkit";
import { DefaultData } from "../../data/DefaultData";
import { HarmLayout } from "../../types/Harmonica";
import { loadDynamicSheets } from "../thunks/DynamicSheetsLoaderThunk";
import { fetchLayout } from "../thunks/FetchLayoutThunk";
import { fetchStaticSheets } from "../thunks/FetchStaticSheetsThunk";
import { loadFromURL } from "../thunks/URLLoaderThunk";

const extend = (old: HarmLayout[], newLayouts: HarmLayout[]) =>
	[...old, ...newLayouts.filter(v => !old.some(w => v.label == w.label && v.type == w.type))];

export const LayoutsSlice = createSlice({
	name: 'layouts',
	initialState: {
		value: DefaultData.layouts
	},
	reducers: {
		set: (state, action) => {
			state.value = action.payload;
		},
		add: (state, action) => {
			state.value = extend(state.value, action.payload);
		},
	},

	extraReducers: builder => {
		builder.addCase(fetchLayout.fulfilled, (state, action) => {
			state.value = extend(state.value, action.payload);
		});
		builder.addCase(loadFromURL.fulfilled, (state, action) => {
			state.value = extend(state.value, action.payload.layouts);
		});
		builder.addCase(fetchStaticSheets.fulfilled, (state, action) => {
			state.value = extend(state.value, action.payload.map(v => v.layouts).flat());
		});
		builder.addCase(loadDynamicSheets.fulfilled, (state, action) => {
			state.value = extend(state.value, action.payload.map(([_, v]) => v.layouts).flat());
		});
	}
});
