import { createAsyncThunk } from "@reduxjs/toolkit";
import { parseDataContextData } from "../../data/Serializer";

export const loadFromURL = createAsyncThunk("loadFromURL", async (url: string, _thunkAPI) => {
	const data = parseDataContextData(url.slice(url.indexOf('?') + 1));

	return data;
});