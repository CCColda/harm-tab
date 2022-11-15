import { useContext, useEffect, useState } from "react";
import { LoadHarmonicaLayouts } from "../../data/Harmonica";
import { parseDataContextData } from "../../data/Serializer";
import { useRouter } from "../../node_modules/next/router";
import { DataContext } from "../contexts/DataContext";

import { Loading } from "./Loading";

const LayoutSuspense: React.FC<React.PropsWithChildren<{ layoutPath: string }>> = (props) => {
	const dataContext = useContext(DataContext);

	const [parsed, setParsed] = useState(false);

	useEffect(() => {
		(async () => {
			const data = await fetch(props.layoutPath, { method: "GET", headers: { "Accept": "application/json" } });
			const text = data.status == 200 ? await data.text() : "";

			if (text) {
				dataContext.fn.memory.setLayouts(LoadHarmonicaLayouts(text));
			}

			setParsed(true);
		})();
	}, [props.layoutPath]);

	return <>
		{
			!parsed
				? <Loading />
				: props.children
		}
	</>
}

export { LayoutSuspense };