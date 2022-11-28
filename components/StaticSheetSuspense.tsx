import { useSelector } from "react-redux";
import { RootState } from "../app/store";

import { TStatus } from "../app/slices/StatusSlice";
import { FetchSuspense } from "./FetchSuspense";
import { fetchStaticSheets } from "../app/thunks/FetchStaticSheetsThunk";

const StaticSheetSuspense: React.FC<React.PropsWithChildren<{ sheetPath: string }>> = props =>
	<FetchSuspense
		fetchfn={fetchStaticSheets(props.sheetPath)}
		fetchPrerequisites={[props.sheetPath]}
		blockingSelector={false}
		statusSelector={useSelector<RootState, TStatus>(state => state.status.value.fetchStaticSheetsStatus)}
	>
		{props.children}
	</FetchSuspense>

export { StaticSheetSuspense };