import { Data } from "../../types/Data";
import { DataFN, DefaultData } from "../../data/Data";
import { createContext, PropsWithChildren, useState } from "react";

type DataContextValue = {
	data: Data,
	fn: ReturnType<typeof DataFN>,
}

export const DataContext = createContext<DataContextValue>({
	data: DefaultData,
	fn: DataFN({ setMemory: x => x, setSaved: x => x }),
});

export const DataContextProvider: React.FC<PropsWithChildren<{}>> = props => {
	const [memory, setMemory] = useState(DefaultData.memory);
	const [saved, setSaved] = useState(DefaultData.saved);

	const fn = DataFN({ setMemory, setSaved });

	return <DataContext.Provider value={{ data: { memory, saved }, fn }}>
		{props.children}
	</DataContext.Provider>
}
