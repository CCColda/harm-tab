import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { useRouter } from "next/router";
import styles from '../styles/LayoutChooser.module.scss';
import { HarmLayout } from "../types/Harmonica";
import { FormTextInput } from "./FormTextInput";

export const NewTabCreator: React.FC<{}> = (props) => {
	const dispatch = useDispatch();
	const layouts = useSelector<RootState, HarmLayout[]>(state => state.layouts.value);

	const [layout, setLayout] = useState<number>(0);
	const [title, setTitle] = useState("");
	const router = useRouter();

	const onSelectSheet = _ => {
		dispatch({ type: "sheet/setLayout", payload: layouts[layout] });
		dispatch({ type: "sheet/setTitle", payload: title });
		router.push("/edit");
	}

	return <div className={styles.layoutChooser}>
		<h1>New tab</h1>
		<FormTextInput brief="Cím" placeholder="Cím" onChange={ev => setTitle(ev.target.value)} />
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
