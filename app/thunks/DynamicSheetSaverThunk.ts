import { createAsyncThunk } from "@reduxjs/toolkit";
import Logger from "../../data/Logger";
import { parseSheet } from "../../data/Serializer";

const SHEET_NAME_REGEX = /local_sheet_[0-9]+/i;

export const saveDynamicSheet = createAsyncThunk("savedSheets/saveDynamic", async (toSave: any, _thunkAPI) => {
	Logger.log("T:STD2", "Loading saving sheet to localStorage");

	try {
		
		localStorage.setItem
	}
	catch (exc) {

	}
});
