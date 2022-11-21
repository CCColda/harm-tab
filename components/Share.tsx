import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { serializeDataContextData } from "../data/Serializer";
import { Data } from "../types/Data";
import { IconButton } from "./IconButton";

const Share: React.FC<{}> = _props => {
	const data = useSelector<RootState, Data>(state => ({
		indices: state.indices.value,
		insert: state.insert.value,
		layouts: state.layouts.value,
		sheet: state.sheet.value,
	}));

	return <IconButton
		icon="./img/share.svg"
		onClick={_ => window.open("?" + serializeDataContextData(data))}
	/>
};

export { Share };