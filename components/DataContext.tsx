import React, { createContext, FC, PropsWithChildren, useEffect, useState } from "react";
import { DataContext as DCT } from "../types/DataContext";
import { LoadHarmonicaLayouts } from "../data/Harmonica";

export type DataContextValue = {
	data: DCT.Data,

	fn: {
		setNoteLength: (newLength: string) => void,
		setSheet: (newSheet: DCT.Sheet) => void,
		setLayout: (newLayout: string) => void,
	}
};

export const DataContext = createContext<DataContextValue>({
	data: { ready: false },
	fn: {
		setNoteLength: () => { },
		setSheet: () => { },
		setLayout: () => { }
	},
});

export const DataContextProvider: FC<PropsWithChildren<{ layoutPath: string }>> = (props) => {
	const [data, setData] = useState<DCT.Data>({ ready: false });

	useEffect(() => {
		fetch(props.layoutPath, { method: "GET", headers: { "Accept": "application/json" } })
			.then(d => d.status == 200 ? d.text() : "")
			.then(t => {
				if (t)
					setData(oldData => ({
						...oldData,
						ready: true,
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
	}, [props.layoutPath]);

	const providedValue: DataContextValue = {
		data,
		fn: {
			setNoteLength: newNoteLength => data.ready && setData({ ...data, noteLength: newNoteLength }),
			setSheet: newSheet => data.ready && setData({ ...data, sheet: newSheet }),
			setLayout: newLayout => data.ready && setData({ ...data, sheet: { ...data.sheet, layout: newLayout } }),
		}
	}

	return <DataContext.Provider value={providedValue}>
		{props.children}
	</DataContext.Provider>
};
