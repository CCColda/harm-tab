import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoadHarmonicaLayouts } from "../../data/Harmonica";
import Logger from "../../data/Logger";
import { parseSheet } from "../../data/Serializer";
import { SavedSheetSliceType } from "../slices/SavedSheetsSlice";

type StaticSheetFile = {
	sheets: string[]
}

export const fetchStaticSheets = createAsyncThunk("savedSheets/fetchStatic", async (path: string, _thunkAPI) => {
	Logger.log("T:STS", "Dispatching fetch");

	const data = await fetch(path, { method: "GET", headers: { "Accept": "application/json" } });
	const sheetsObject: StaticSheetFile = data.status == 200
		? await data.json()
		: { sheets: [] };

	if (sheetsObject.sheets.length) {
		const parsedSheets = sheetsObject.sheets.map(parseSheet);

		Logger.log("T:STS", "Loaded " + parsedSheets.length + " static sheet(s).");
		return parsedSheets;
	}

	return [];
});
