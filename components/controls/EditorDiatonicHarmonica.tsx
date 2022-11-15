import { useContext } from "react";
import { DiatonicSheet } from "../../data/Sheet";
import { DataContext } from "../contexts/DataContext";
import { DiatonicHarmonica, DiatonicHarmonicaProps } from "./DiatonicHarmonica";

import styles from "../../styles/EditorDiatonicHarmonica.module.scss";

export const EditorDiatonicHarmonica: React.FC<{}> = _props => {
	const dataContext = useContext(DataContext);

	const onSelectSound: DiatonicHarmonicaProps["onSelectSound"] = sound => {
		const modifyFunction = dataContext.data.memory.insert.mode == "note"
			? DiatonicSheet.addNote
			: DiatonicSheet.extendChord;

		dataContext.fn.saved.modifySheet(
			sheet => sheet.type == "diatonic"
				? modifyFunction(sheet, [sound], dataContext.data.memory.insert.duration, dataContext.data.memory.selectedIndex)
				: sheet
		);

		// TODO
		dataContext.fn.memory.setSelected(null);
	};

	const sheetLayout = dataContext.data.memory.layouts.find(v => v.label == dataContext.data.saved.sheet.layout);
	const harmonicaLayout = sheetLayout.type == "diatonic" && sheetLayout.layout;

	// todo: invalid harmonicaLayout handling

	return <span className={styles.harmonicaWrapper}>
		<DiatonicHarmonica
			layout={harmonicaLayout}
			onSelectSound={onSelectSound}
		/>
	</span>
}

