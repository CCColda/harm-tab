import React, { createContext, FC, PropsWithChildren, useEffect, useState } from "react";
import { HarmLayouts, LoadHarmonicaLayouts } from "../data/Harmonica";

export type DataContextData = {
	ready: boolean,
	layouts: HarmLayouts,

	sheet: {
		meter: string,
		key: string,
		title: string,
		notes: string[],
		durations: string[],
		text: string[],
	},
};

export type DataContextValue = {
	data: DataContextData,

	fn: {
		getABC: (n?: number) => string,
		addNote: (ABCnote: string, description: string, length: string) => boolean,
		popNote: () => boolean,
	}
};

const DEFAULT_DATA: DataContextData = {
	ready: false,
	layouts: [],
	sheet: {
		meter: "4/4",
		key: "C",
		title: "",
		notes: [],
		durations: [],
		text: []
	},
};

function groupArray<T = any>(arr: T[], n: number): T[][] {
	let result: T[][] = [];

	for (let i = 0; i < arr.length; i += n)
		result.push(arr.slice(i, Math.min(i + n, arr.length)));

	return result;
}

export const DataContext = createContext<DataContextValue>({
	data: DEFAULT_DATA,
	fn: {
		addNote: () => false,
		getABC: () => "",
		popNote: () => false
	},
});

export const DataContextProvider: FC<PropsWithChildren<{ layoutPath: string }>> = (props) => {
	const [data, setData] = useState<DataContextData>(DEFAULT_DATA);

	useEffect(() => {
		fetch(props.layoutPath, { method: "GET", headers: { "Accept": "application/json" } })
			.then(d => d.status == 200 ? d.text() : "")
			.then(t => {
				if (t)
					setData(oldData => ({
						...oldData,
						ready: true,
						layouts: LoadHarmonicaLayouts(t),
					}));
			});
	}, [props.layoutPath]);

	const providedValue: DataContextValue = {
		data,
		fn: {
			addNote: (ABCnote, description, duration) => {
				setData({
					...data,
					sheet: {
						...data.sheet,
						notes: [...data.sheet.notes, ABCnote],
						durations: [...data.sheet.durations, duration],
						text: [...data.sheet.text, description]
					}
				});

				return true;
			},
			getABC: (n: number = 8) => {
				const compiledNotes = data.sheet.notes.map((v, i) => v + data.sheet.durations[i]);
				const groupedNotes = groupArray(compiledNotes, n);
				const groupedText = groupArray(data.sheet.text, n);

				const compiledSheet = groupedNotes.map((v, i) => {
					return v.join(" ") + "\nw: " + groupedText[i].join(" ")
				}).join("\n");

				return [
					`X:1`,
					`T:${data.sheet.title}`,
					`M:${data.sheet.meter}`,
					`L:1/64`,
					`K:${data.sheet.key}`,
					`${compiledSheet}`
				].join("\n")
			},
			popNote: () => {
				if (data.sheet.notes.length == 0)
					return false;

				setData({
					...data,
					sheet: {
						...data.sheet,
						notes: data.sheet.notes.slice(0, -1),
						text: data.sheet.text.slice(0, -1),
						durations: data.sheet.durations.slice(0, -1),
					}
				});

				return true;
			}
		}
	}

	return <DataContext.Provider value={providedValue}>
		{props.children}
	</DataContext.Provider>
};
