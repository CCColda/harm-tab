import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { loadFromURL } from "../app/thunks/URLLoaderThunk";
import { RootState } from "../app/store";
import { useRouter } from "../node_modules/next/router";

import { Loading } from "./Loading";
import { TStatus } from "../app/slices/StatusSlice";

const URLSuspense: React.FC<React.PropsWithChildren<{}>> = (props) => {
	const router = useRouter();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadFromURL(router.asPath) as any);
	}, [dispatch, router.asPath]);

	const loading = useSelector<RootState, TStatus>(state => state.status.value.loadFromURLStatus);

	return <>
		{
			loading != "done"
				? <Loading text={{ "initial": "Preparing to load...", "pending": "Loading..." }[loading]} />
				: props.children
		}
	</>
}

export { URLSuspense };