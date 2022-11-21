import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { DiatonicSheet } from "../data/Sheet";
import { DiatonicHarmonica, DiatonicHarmonicaProps } from "./DiatonicHarmonica";

import { RootState } from "../app/store";
import { Data } from "../types/Data";
import { DiaHarm } from "../types/Harmonica";

import styles from "../styles/EditorDiatonicHarmonica.module.scss";

export const EditorDiatonicHarmonica: React.FC<{}> = _props => {
	const insert = useSelector<RootState, Data["insert"]>(state => state.insert.value);
	const selectedIndex = useSelector<RootState, number | null>(state => state.indices.value.selectedIndex);
	const sheet = useSelector<RootState, Data["sheet"]>(state => state.sheet.value);

	const layout = useSelector<RootState, DiaHarm.Layout | null>(
		state => {
			const foundLayout = state.layouts.value.find(v => v.label == state.sheet.value.layout)
			return foundLayout?.type == "diatonic" ? foundLayout.layout : null;
		}
	);

	const dispatch = useDispatch();

	const onSelectSound: DiatonicHarmonicaProps["onSelectSound"] = sound => {
		const modifyFunction = insert.mode == "note"
			? DiatonicSheet.addNote
			: DiatonicSheet.extendChord;

		const modified = sheet.type == "diatonic"
			? modifyFunction(sheet, [sound], insert.duration, selectedIndex)
			: sheet;

		dispatch({ type: "sheet/set", payload: modified });
		dispatch({ type: "indices/resetSelected" });
	};

	return layout && <span className={styles.harmonicaWrapper}>
		<DiatonicHarmonica
			layout={layout}
			onSelectSound={onSelectSound}
		/>
	</span>
}

