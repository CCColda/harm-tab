import { useSelector } from "react-redux";
import { fetchLayout } from "../app/thunks/FetchLayoutThunk";
import { RootState } from "../app/store";

import { TStatus } from "../app/slices/StatusSlice";
import { FetchSuspense } from "./FetchSuspense";

const LayoutSuspense: React.FC<React.PropsWithChildren<{ layoutPath: string }>> = props =>
	<FetchSuspense
		fetchfn={fetchLayout(props.layoutPath)}
		fetchPrerequisites={[props.layoutPath]}
		blockingSelector={useSelector<RootState, boolean>(state => state.layouts.value.length == 0)}
		statusSelector={useSelector<RootState, TStatus>(state => state.status.value.fetchLayoutsStatus)}>
		{props.children}
	</FetchSuspense>

export { LayoutSuspense };