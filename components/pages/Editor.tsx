
import useEventListener from '../../data/useEventListener';

import {
	DataContext,
	MusicSheet,
	ThreeDotMenu,
	MusicalElements,
	NoteLengths,
	DiatonicHarmonica,
	MusicControl
} from '../index';

import { serializeDataContextData } from '../../data/Serializer';
import { abcFromDiatonicSheet, addDiatonicNote, extendDiatonicChord } from '../../data/Sheet';
import { DataContext as DCT } from '../../types/DataContext';
import { ChordSwitcher } from '../controls/ChordSwitcher';
import { FC, useContext, useRef, useState } from 'react';

import styles from '../../styles/index.module.scss'
import { FullscreenToggle } from '../controls/FullscreenToggle';
import { AbcVisualParams } from 'abcjs';


const Editor: FC<{}> = (props) => {
	const dataContext = useContext(DataContext);

	const [sheetWidth, setSheetWidth] = useState(0);
	const mainRef = useRef<HTMLDivElement | null>(null);
	const editorRef = useRef<HTMLDivElement | null>(null);

	useEventListener(
		window,
		'resize',
		_ev => mainRef && setSheetWidth(mainRef.current.getBoundingClientRect().width),
		[mainRef]
	);

	const SHEET_OPTIONS: AbcVisualParams = {
		initialClef: true,
		staffwidth: sheetWidth,
		wrap: {
			minSpacing: 1.5,
			maxSpacing: 2,
			preferredMeasuresPerLine: 4
		},
		/* clickListener: (abcelem, tuneNumber, classes, analysis, drag, mouseEvent) => console.log(abcelem, tuneNumber, classes, analysis, drag, mouseEvent), */
		selectTypes: ["note"]
	};

	return dataContext.data.ready && <div ref={editorRef} className={styles.editor}>
		<header>
			<button onClick={v => window.open("?" + serializeDataContextData(dataContext.data))}>🔗</button>
			<FullscreenToggle editorRef={editorRef} />
			<MusicControl />
			<ThreeDotMenu />
		</header>
		<main>
			<div className={styles.sheetWrapper} ref={mainRef}>
				<MusicSheet abc={
					(dataContext.data.ready
						&& dataContext.data.sheet.type == "diatonic"
						&& abcFromDiatonicSheet(dataContext.data.sheet, 8, dataContext.data.highlightedChord))
					|| ""
				} options={SHEET_OPTIONS} />
			</div>
		</main>
		<footer>
			<span className={styles.harmonicaWrapper}>
				<DiatonicHarmonica
					layout={dataContext.data.layouts.find(v => v.label == (dataContext.data.ready && dataContext.data.sheet.layout)).layout}
					onSelectSound={x => dataContext.data.ready && dataContext.fn.setSheet(
						dataContext.data.mode == "note"
							?
							addDiatonicNote(dataContext.data.sheet as DCT.BaseSheet & DCT.DiatonicSheet, [x], dataContext.data.noteLength)
							:
							extendDiatonicChord(dataContext.data.sheet as DCT.BaseSheet & DCT.DiatonicSheet, [x], dataContext.data.noteLength)
					)}
				/>
			</span>

			<span className={styles.music}>
				<NoteLengths />
				<MusicalElements />
				<ChordSwitcher />
			</span>
		</footer>
	</div >
};

export { Editor };