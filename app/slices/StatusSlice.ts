import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Logger from "../../data/Logger";
import { fetchLayout } from "../thunks/FetchLayoutThunk";
import { fetchStaticSheets } from "../thunks/FetchStaticSheetsThunk";
import { loadFromURL } from "../thunks/URLLoaderThunk";

export type TStatus = "initial" | "pending" | "done" | "error";

type TStatusValue = {
	loadFromURLStatus: TStatus,
	fetchLayoutsStatus: TStatus,
	fetchStaticSheetsStatus: TStatus,
}

export const StatusSlice = createSlice({
	name: 'layouts',
	initialState: {
		value: {
			loadFromURLStatus: "initial",
			fetchLayoutsStatus: "initial",
			fetchStaticSheetsStatus: "initial",
		} as TStatusValue
	},
	reducers: {},

	extraReducers: builder => {
		const addCasesFor = (thunk: ReturnType<typeof createAsyncThunk>, key: keyof TStatusValue) => {
			builder.addCase(thunk.fulfilled, state => {
				Logger.log("SL:ST", `Changing the status for "${key}" to "done"`)
				state.value[key] = "done";
			});
			builder.addCase(thunk.pending, state => {
				Logger.log("SL:ST", `Changing the status for "${key}" to "pending"`)
				state.value[key] = "pending";
			});
			builder.addCase(thunk.rejected, state => {
				Logger.log("SL:ST", `Changing the status for "${key}" to "rejected"`)
				state.value[key] = "error";
			});
		}

		addCasesFor(fetchLayout, "fetchLayoutsStatus");
		addCasesFor(fetchStaticSheets, "fetchStaticSheetsStatus");
		addCasesFor(loadFromURL, "loadFromURLStatus");
	}
});
