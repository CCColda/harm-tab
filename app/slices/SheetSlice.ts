import { createSlice } from "@reduxjs/toolkit";
import { DefaultData } from "../../data/DefaultData";
import { HarmLayout } from "../../types/Harmonica";
import { loadFromURL } from "../thunks/URLLoaderThunk";

export const SheetSlice = createSlice({
	name: 'sheet',
	initialState: {
		value: DefaultData.sheet
	},
	reducers: {
		setLayout: (state, action: { payload: HarmLayout }) => {
			state.value.type = action.payload.type;
			state.value.key = action.payload.key;
			state.value.layout = action.payload.label;

			if (state.value.type == "diatonic")
				state.value.chords = [];
		},
		set: (state, action) => {
			state.value = action.payload;
		},
		setMetre: (state, action) => {
			state.value.metre = action.payload;
		},
		setTitle: (state, action) => {
			state.value.title = action.payload;
		},
	},
	extraReducers: builder => {
		builder.addCase(loadFromURL.fulfilled, (state, action) => {
			if (action.payload.sheet.type != "unset")
				state.value = action.payload.sheet;
		});
	},
});
