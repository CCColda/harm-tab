import React, { createContext, FC, PropsWithChildren, useEffect, useState } from "react";
import { DataContext as DCT } from "../../types/DataContext";
import { LoadHarmonicaLayouts } from "../../data/Harmonica";
import { HarmLayout } from "../../types/Harmonica";

export type DataContextValue = {
	data: DCT.Data,

	fn: {
		setNoteLength: (newLength: string) => void,
		setSheet: (newSheet: DCT.Sheet) => void,
		setLayout: (newLayout: string) => void,
		setMode: (newMode: "chord" | "note") => void,
	}
};

export const DataContext = createContext<DataContextValue>({
	data: { ready: false },
	fn: {
		setNoteLength: () => { },
		setSheet: () => { },
		setLayout: () => { },
		setMode: () => { },
	},
});

export const DataContextProvider: FC<PropsWithChildren<{ layoutPath: string, preparsedData: DCT.Data }>> = (props) => {
	const [data, setData] = useState<DCT.Data>(
		props.preparsedData.ready ? props.preparsedData : { ready: false }
	);

	useEffect(() => {
		if (!data.ready)
			fetch(props.layoutPath, { method: "GET", headers: { "Accept": "application/json" } })
				.then(d => d.status == 200 ? d.text() : "")
				.then(t => {
					if (t)
						setData(oldData => ({
							...oldData,
							ready: true,
							mode: "note",
							layouts: LoadHarmonicaLayouts(t),
							noteLength: "8",
							sheet: {
								type: "unset",
								title: "",
								key: "",
								layout: "",
								meter: "",
							}
						}));
				});
	}, [props.layoutPath, props.preparsedData, data.ready]);

	const providedValue: DataContextValue = {
		data,
		fn: {
			setNoteLength: newNoteLength => data.ready && setData({ ...data, noteLength: newNoteLength }),
			setSheet: newSheet => data.ready && setData({ ...data, sheet: newSheet }),
			setLayout: newLayout => data.ready && setData({ ...data, sheet: { ...data.sheet, layout: newLayout } }),
			setMode: newMode => data.ready && setData({ ...data, mode: newMode }),
		}
	}

	return <DataContext.Provider value={providedValue}>
		{props.children}
	</DataContext.Provider>
};
