import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoadHarmonicaLayouts } from "../../data/Harmonica";
import Logger from "../../data/Logger";

export const fetchLayout = createAsyncThunk("layouts/fetchFromFile", async (path: string, _thunkAPI) => {
	Logger.log("SL:L", "Dispatching fetch");

	const data = await fetch(path, { method: "GET", headers: { "Accept": "application/json" } });
	const text = data.status == 200 ? await data.text() : "";

	if (text) {
		const layouts = LoadHarmonicaLayouts(text);

		Logger.log("SL:L", "Set " + layouts.length + " layouts.");
		return layouts;
	}

	return [];
})
