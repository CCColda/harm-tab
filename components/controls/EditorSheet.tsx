import { AbcVisualParams, ClickListener } from "abcjs";
import { useContext, useState, useRef } from "react";
import { DataContext } from "../contexts/DataContext";
import { MusicSheet } from "./MusicSheet";

import { DiatonicSheet } from "../../data/Sheet";
import useEventListener from "../../data/useEventListener";

import styles from "../../styles/EditorSheet.module.scss";

export const EditorSheet: React.FC<{}> = _props => {
	const dataContext = useContext(DataContext);

	const [sheetWidth, setSheetWidth] = useState(0);
	const mainRef = useRef<HTMLDivElement | null>(null);

	useEventListener(
		window,
		'resize',
		_ev => mainRef && setSheetWidth(mainRef.current.getBoundingClientRect().width),
		[mainRef]
	);

	const sheetOptions: AbcVisualParams = {
		initialClef: true,
		staffwidth: sheetWidth,
		wrap: {
			minSpacing: 1.5,
			maxSpacing: 2,
			preferredMeasuresPerLine: 4
		},
		clickListener: ((_abcelem, _tuneNumber, _classes, _analysis, drag, _mouseEvent) => {
			if (dataContext.data.saved.sheet.type == "diatonic") {
				const chordIdx = dataContext.data.saved.sheet.chords
					.map((v, i) => ({ v, i }))
					.filter(({ v }) => ["chord", "silence"].includes(v.type))?.[drag.index]?.i;

				dataContext.fn.memory.setSelected(chordIdx);
			}
		}) as ClickListener,
		selectTypes: ["note"]
	};

	const sheetAbc = dataContext.data.saved.sheet.type == "diatonic"
		? DiatonicSheet.toABC(
			dataContext.data.saved.sheet,
			8,
			[dataContext.data.memory.highlightedIndex, dataContext.data.memory.selectedIndex].filter(v => !!v)
		)
		: "";

	return <div className={styles.sheetWrapper} ref={mainRef}>
		<MusicSheet abc={sheetAbc} options={sheetOptions} />
	</div>
}


