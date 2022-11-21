import { createSlice } from "@reduxjs/toolkit";
import { DefaultData } from "../../data/DefaultData";

export const IndicesSlice = createSlice({
	name: 'indices',
	initialState: {
		value: DefaultData.indices
	},
	reducers: {
		setHighlighted: (state, action) => {
			state.value.highlightedIndex = action.payload;
		},
		setSelected: (state, action) => {
			state.value.selectedIndex = action.payload;
		},
		resetHighlighted: (state) => {
			state.value.highlightedIndex = null
		},
		resetSelected: (state) => {
			state.value.selectedIndex = null
		},
		incrementHighlighted: (state) => {
			state.value.highlightedIndex += 1;
		},
	}
});
