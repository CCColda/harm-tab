import { useContext, useState } from "react";
import { serializeDataContextData } from "../../data/Serializer";

import styles from "../../styles/Share.module.scss";
import { DataContext } from "../contexts/DataContext";

const Share: React.FC<{}> = _props => {
	const dataContext = useContext(DataContext);

	return <button
		className={styles.shareButton}
		onClick={_ => window.open("?" + serializeDataContextData(dataContext.data))}>
	</button>
};

export { Share };