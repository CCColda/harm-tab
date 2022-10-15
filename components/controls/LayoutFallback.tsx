import { ReactNode, useContext } from "react";
import { DataContext } from "../index";

const LayoutFallback: React.FC<React.PropsWithChildren<{ fallback: ReactNode }>> = (props) => {
	const dataContext = useContext(DataContext);

	const layoutReady = dataContext.data.ready
		&& dataContext.data.sheet.type != "unset"
		&& dataContext.data.layouts.some(
			v => v.label == (dataContext.data.ready && dataContext.data.sheet.layout)
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