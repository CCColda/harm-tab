import { createAsyncThunk } from "@reduxjs/toolkit";
import Logger from "../../data/Logger";
import { parseSheet } from "../../data/Serializer";

const SHEET_NAME_REGEX = /local_sheet_[0-9]+/i;

export const loadDynamicSheets = createAsyncThunk("savedSheets/loadDynamic", async () => {
	Logger.log("T:STD", "Loading dynamic sheets from localStorage");

	try {
		const entries: [string, ReturnType<typeof parseSheet>][] = Array(localStorage.length)
			.fill(null)
			.map((_, i) => localStorage.key(i))
			.filter(k => SHEET_NAME_REGEX.test(k))
			.map(k => ([k, localStorage.getItem(k) ?? ""]) as [string, string])
			.map(([k, v]) => ([k, parseSheet(v)]));

		Logger.log("T:STD", `Loaded ${entries.length} local sheets.`);
		return entries;
	}
	catch (exc) {
		Logger.log("T:STD", "Error while loading dynamic sheets: ", exc);
		return [];
	}
});
