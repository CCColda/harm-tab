import { FC, useContext } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

import styles from "../styles/ChordSwitcher.module.scss";

const ChordSwitcher: FC<{}> = (_props) => {
	const insertMode = useSelector<RootState>(state => state.insert.value.mode);
	const dispatch = useDispatch();

	return <div
		className={styles.chordSwitcher}>
		<button
			className={
				styles.note + (insertMode == "note" ? " " + styles.active : "")
			}
			onClick={_ => dispatch({ type: "insert/setMode", payload: "note" })}>
			+
		</button>
		<button
			className={
				styles.chord + (insertMode == "chord" ? " " + styles.active : "")
			}
			onClick={_ => dispatch({ type: "insert/setMode", payload: "chord" })}>
			𝅘𝅥+
		</button>
	</div>;
}

export { ChordSwitcher };