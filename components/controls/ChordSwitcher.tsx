import { FC, useContext } from "react";

import styles from "../../styles/ChordSwitcher.module.scss";
import { DataContext } from "../contexts/DataContext";

const ChordSwitcher: FC<{}> = (_props) => {
	const dataContext = useContext(DataContext);

	return <div
		className={styles.chordSwitcher}>
		<button
			className={
				styles.note + (dataContext.data.ready && dataContext.data.mode == "note" ? " " + styles.active : "")
			}
			onClick={_ => dataContext.fn.setMode("note")}>
			+
		</button>
		<button
			className={
				styles.chord + (dataContext.data.ready && dataContext.data.mode == "chord" ? " " + styles.active : "")
			}
			onClick={_ => dataContext.fn.setMode("chord")}>
			𝅘𝅥+
		</button>
	</div>;
}

export { ChordSwitcher };