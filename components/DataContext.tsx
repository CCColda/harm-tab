import { prependOnceListener } from "process";
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
		lengths: string[],
		text: string[],
	},
};

export type DataContextValue = {
	data: DataContextData,

	fn: {
		getABC: () => string,
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
		lengths: [],
		text: []
	},
};

export const DataContext = createContext<DataContextValue>({
	data: DEFAULT_DATA,
	fn: {
		addNote: () => false,
		getABC: () => ""
	},
});

export const DataContextProvider: FC<PropsWithChildren<{ layoutPath: string }>> = (props) => {
	const [data, setData] = useState<DataContextData>(DEFAULT_DATA);

	useEffect(() => {
		fetch(props.layoutPath, { method: "GET", headers: { "Accept": "application/json" } })
			.then(d => d.status == 200 ? d.text() : "")
			.then(t => {
				if (t)
					setData({
						...data,
						ready: true,
						layouts: LoadHarmonicaLayouts(t),
					});
			});
	}, [props.layoutPath]);

	const providedValue: DataContextValue = {
		data,
		fn: {
			addNote: (ABCnote, description, length) => {
				setData({
					...data,
					sheet: {
						...data.sheet,
						notes: [...data.sheet.notes, ABCnote],
						lengths: [...data.sheet.lengths, length],
						text: [...data.sheet.text, description]
					}
				});

				return true;
			},
			getABC: () => [
				`X:1`,
				`T:${data.sheet.title}`,
				`M:${data.sheet.meter}`,
				`K:${data.sheet.key}`,
				`${data.sheet.notes.map((v, i) => v + data.sheet.lengths[i]).join(" ")}`,
				`w:${data.sheet.text.join(" ")}`
			].join("\n"),
			popNote: () => {
				if (data.sheet.notes.length == 0)
					return false;

				setData({
					...data,
					sheet: {
						...data.sheet,
						notes: data.sheet.notes.slice(0, -1),
						text: data.sheet.text.slice(0, -1),
						lengths: data.sheet.lengths.slice(0, -1),
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
