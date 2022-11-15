import { ReactNode, useContext } from "react";
import { DataContext } from "../contexts/DataContext";

const LayoutFallback: React.FC<React.PropsWithChildren<{ fallback: ReactNode }>> = (props) => {
	const dataContext = useContext(DataContext);

	const layoutReady =
		dataContext.data.saved.sheet.type != "unset"
		&& dataContext.data.memory.layouts.some(
			v => v.label == (dataContext.data.saved.sheet.layout)
		);

	return <>
		{
			layoutReady
				? props.children
				: props.fallback
		}
	</>
}

export { LayoutFallback };