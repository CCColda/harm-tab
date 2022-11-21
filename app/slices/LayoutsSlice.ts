import { createSlice } from "@reduxjs/toolkit";
import { DefaultData } from "../../data/DefaultData";
import { fetchLayout } from "../thunks/FetchLayoutThunk";
import { loadFromURL } from "../thunks/URLLoaderThunk";

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
			state.value = [...state.value, ...action.payload];
		},
	},

	extraReducers: builder => {
		builder.addCase(fetchLayout.fulfilled, (state, action) => {
			for (const newLayout of action.payload)
				if (!state.value.some(v => v.label == newLayout.label && v.type == newLayout.type))
					state.value.push(newLayout);
		});
		builder.addCase(loadFromURL.fulfilled, (state, action) => {
			for (const newLayout of action.payload.layouts)
				if (!state.value.some(v => v.label == newLayout.label && v.type == newLayout.type))
					state.value.push(newLayout);
		});
	}
});
