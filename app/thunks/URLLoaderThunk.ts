import { createAsyncThunk } from "@reduxjs/toolkit";
import { parseSheet } from "../../data/Serializer";

export const loadFromURL = createAsyncThunk("loadFromURL", async (url: string, _thunkAPI) => {
	const data = parseSheet(url.slice(url.indexOf('?') + 1));

	return data;
});