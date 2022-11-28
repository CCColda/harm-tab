import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { TStatus } from "../app/slices/StatusSlice";
import Logger from "../data/Logger";
import { Loading } from "./Loading";

export type FetchSuspenseProps = {
	fetchfn: any,
	fetchPrerequisites: any[],
	statusSelector: TStatus,
	blockingSelector: boolean,
}

export const FetchSuspense: React.FC<React.PropsWithChildren<FetchSuspenseProps>> = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		Logger.log("FileSuspense", "Dispatching fetch");
		dispatch(props.fetchfn);
	}, [dispatch, props.fetchPrerequisites]);

	return <>
		{
			props.blockingSelector
				? <Loading text={{
					"initial": "Preparing to fetch...",
					"pending": "Loading...",
					"done": "Loaded",
					"error": "Error while loading"
				}[props.statusSelector]} />
				: props.children
		}
	</>
}
