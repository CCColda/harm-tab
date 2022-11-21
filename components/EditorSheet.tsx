import { AbcVisualParams, ClickListener } from "abcjs";
import { useState, useRef, useEffect } from "react";
import { MusicSheet } from "./MusicSheet";

import { DiatonicSheet } from "../data/Sheet";
import useEventListener from "../data/useEventListener";

import styles from "../styles/EditorSheet.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Data } from "../types/Data";
import { useDispatch } from "react-redux";

export const EditorSheet: React.FC<{}> = _props => {
	const sheet = useSelector<RootState, Data["sheet"]>(state => state.sheet.value);
	const indices = useSelector<RootState, number[]>(state => Object.values(state.indices.value));
	const dispatch = useDispatch();

	const [sheetWidth, setSheetWidth] = useState(0);
	const mainRef = useRef<HTMLDivElement | null>(null);

	const updateWidth = () => mainRef && setSheetWidth(mainRef.current.getBoundingClientRect().width)

	useEventListener(
		window,
		'resize',
		_ev => updateWidth(),
		[mainRef]
	);

	useEffect(() => {
		updateWidth();
	}, [mainRef]);

	const sheetOptions: AbcVisualParams = {
		initialClef: true,
		staffwidth: sheetWidth,
		wrap: {
			minSpacing: 1.5,
			maxSpacing: 2,
			preferredMeasuresPerLine: 4
		},
		clickListener: ((_abcelem, _tuneNumber, _classes, _analysis, drag, _mouseEvent) => {
			if (sheet.type == "diatonic") {
				const chordIdx = sheet.chords
					.map((v, i) => ({ v, i }))
					.filter(({ v }) => ["chord", "silence"].includes(v.type))?.[drag.index]?.i;

				dispatch({ type: "indices/setSelected", payload: chordIdx });
			}
		}) as ClickListener,
		selectTypes: ["note"]
	};

	const sheetAbc = sheet.type == "diatonic"
		? DiatonicSheet.toABC(
			sheet,
			8,
			indices.filter(v => !!v)
		)
		: "";

	return <div className={styles.sheetWrapper} ref={mainRef}>
		<MusicSheet abc={sheetAbc} options={sheetOptions} />
	</div>
}


