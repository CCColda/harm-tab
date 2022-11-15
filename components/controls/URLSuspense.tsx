import { useContext, useEffect, useState } from "react";
import { parseDataContextData } from "../../data/Serializer";
import { useRouter } from "../../node_modules/next/router";
import { DataContext } from "../contexts/DataContext";

import { Loading } from "./Loading";

const URLSuspense: React.FC<React.PropsWithChildren<{}>> = (props) => {
	const dataContext = useContext(DataContext);

	const router = useRouter();

	const [parsed, setParsed] = useState(false);

	useEffect(() => {
		const data = parseDataContextData(router.asPath.slice(router.asPath.indexOf('?') + 1));

		if (data) {
			dataContext.fn.memory.setLayouts(data.memory.layouts);
			dataContext.fn.saved.setSheet(data.saved.sheet);
		}

		setParsed(true);
	}, [router.asPath]);

	return <>
		{
			!parsed
				? <Loading />
				: props.children
		}
	</>
}

export { URLSuspense };