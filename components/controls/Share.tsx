import { useContext, useState } from "react";
import { serializeDataContextData } from "../../data/Serializer";
import { DataContext } from "../contexts/DataContext";
import { IconButton } from "./IconButton";

const Share: React.FC<{}> = _props => {
	const dataContext = useContext(DataContext);

	return <IconButton
		icon="./img/share.svg"
		onClick={_ => window.open("?" + serializeDataContextData(dataContext.data))}
	/>
};

export { Share };