import { createSlice } from "@reduxjs/toolkit";
import { DefaultData } from "../../data/DefaultData";

export const InsertSlice = createSlice({
	name: 'insert',
	initialState: {
		value: DefaultData.insert
	},
	reducers: {
		setDuration: (state, action) => {
			state.value.duration = action.payload;
		},
		setMode: (state, action) => {
			state.value.mode = action.payload;
		},
	}
});

