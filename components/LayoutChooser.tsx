import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SheetSlice } from "../app/slices/SheetSlice";
import { RootState } from "../app/store";
import { useRouter } from "next/router";
import styles from '../styles/LayoutChooser.module.scss';
import { HarmLayout } from "../types/Harmonica";

const LayoutChooser: React.FC<{}> = (props) => {
	const dispatch = useDispatch();
	const layouts = useSelector<RootState, HarmLayout[]>(state => state.layouts.value);

	const [layout, setLayout] = useState<number>(0);
	const router = useRouter();

	const onSelectSheet = _ => {
		/* dataContext.fn.saved.modifySheet(sheet => ({
			...sheet,
			key: dataContext.data.memory.layouts[layout].key,
			type: dataContext.data.memory.layouts[layout].type,
			layout: dataContext.data.memory.layouts[layout].label,
			chords: [],
		}));
*/

		dispatch({ type: "sheet/setLayout", payload: layouts[layout] });
		router.push("/edit");
	}



	return <div className={styles.layoutChooser}>
		<h1>Choose a layout</h1>
		<select className={styles.layouts} onChange={e => setLayout(Number(e.target.value))}>
			{
				layouts.map((v, i) =>
					<option key={i} value={i} defaultChecked={i == 0}>{v.label}</option>
				)
			}
		</select>
		<button onClick={onSelectSheet}>Next</button>
	</div >
}

export { LayoutChooser };