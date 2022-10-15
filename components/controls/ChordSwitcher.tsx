import { FC, useContext } from "react";

import styles from "../../styles/ChordSwitcher.module.scss";
import { DataContext } from "../contexts/DataContext";

const ChordSwitcher: FC<{}> = (_props) => {
	const dataContext = useContext(DataContext);

	return <div
		className={styles.musicControl}
		onChange={e => {
			console.log((e as any).target.value);
			dataContext.fn.setMode((e.target as HTMLInputElement).value as "chord" | "note");
		}}>
		<label className={styles.notes}>
			<input type="radio" name="musiccontrol" value="note" defaultChecked></input>
			<span></span>
		</label>
		<label className={styles.chords}>
			<input type="radio" name="musiccontrol" value="chord"></input>
			<span></span>
		</label>
	</div>;
}

export { ChordSwitcher };