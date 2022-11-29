import { useDispatch } from "react-redux";
import { fetchStaticSheets } from "../app/thunks/FetchStaticSheetsThunk";
import { useEffect } from "react";
import { loadDynamicSheets } from "../app/thunks/DynamicSheetsLoaderThunk";


export const SavedSheetSuspense: React.FC<React.PropsWithChildren<{ sheetPath: string }>> = props => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchStaticSheets(props.sheetPath) as any);
		dispatch(loadDynamicSheets() as any);
	}, [dispatch, props.sheetPath]);

	return <>{props.children}</>;
}
