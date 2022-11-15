import React, { useContext, useEffect, useState } from "react";
import { LoadHarmonicaLayouts } from "../../data/Harmonica";
import styles from '../../styles/LayoutChooser.module.scss';
import { HarmLayout } from "../../types/Harmonica";
import { DataContext } from "../contexts/DataContext";
import { Loading } from "../controls/Loading";

const LayoutChooser: React.FC<{}> = (props) => {
	const dataContext = useContext(DataContext);
	const [layout, setLayout] = useState<number>(0);

	const onSelectSheet = _ =>
		dataContext.fn.saved.modifySheet(sheet => ({
			...sheet,
			key: dataContext.data.memory.layouts[layout].key,
			type: dataContext.data.memory.layouts[layout].type,
			layout: dataContext.data.memory.layouts[layout].label,
			chords: [],
		}));

	return <div className={styles.layoutChooser}>
		<h1>Choose a layout</h1>
		<select className={styles.layouts} onChange={e => setLayout(Number(e.target.value))}>
			{
				dataContext.data.memory.layouts.map((v, i) =>
					<option key={i} value={i} defaultChecked={i == 0}>{v.label}</option>
				)
			}
		</select>
		<button onClick={onSelectSheet}>Next</button>
	</div >
}

export { LayoutChooser };