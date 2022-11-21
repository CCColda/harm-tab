import { createSlice } from "@reduxjs/toolkit";
import { fetchLayout } from "../thunks/FetchLayoutThunk";
import { loadFromURL } from "../thunks/URLLoaderThunk";

export type TStatus = "initial" | "pending" | "done";

export const StatusSlice = createSlice({
	name: 'layouts',
	initialState: {
		value: {
			loadFromURLStatus: "initial" as TStatus,
			fetchLayoutsStatus: "initial" as TStatus
		}
	},
	reducers: {},

	extraReducers: builder => {
		builder.addCase(loadFromURL.fulfilled, (state) => {
			state.value.loadFromURLStatus = "done";
		});
		builder.addCase(loadFromURL.pending, (state) => {
			state.value.loadFromURLStatus = "pending";
		});

		builder.addCase(fetchLayout.fulfilled, (state) => {
			state.value.fetchLayoutsStatus = "done";
		});
		builder.addCase(fetchLayout.pending, (state) => {
			state.value.fetchLayoutsStatus = "pending";
		});
	}
});
