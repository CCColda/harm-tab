import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchLayout } from "../app/thunks/FetchLayoutThunk";
import { RootState } from "../app/store";
import Logger from "../data/Logger";

import { Loading } from "./Loading";
import { TStatus } from "../app/slices/StatusSlice";

const LayoutSuspense: React.FC<React.PropsWithChildren<{ layoutPath: string }>> = (props) => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchLayout(props.layoutPath) as any);
	}, [dispatch, props.layoutPath]);

	const numLayouts = useSelector<RootState, number>(state => state.layouts.value.length);
	const status = useSelector<RootState, TStatus>(state => state.status.value.fetchLayoutsStatus);

	return <>
		{
			numLayouts == 0
				? <Loading text={
					{ "initial": "Preparing to fetch...", "pending": "Loading...", "done": "Loaded", "error": "Error" }[status]
				} />
				: props.children
		}
	</>
}

export { LayoutSuspense };