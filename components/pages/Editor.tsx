
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
import { DiatonicSheet } from '../../data/Sheet';
import { DataContext as DCT } from '../../types/DataContext';
import { ChordSwitcher } from '../controls/ChordSwitcher';
import { FC, useContext, useEffect, useRef, useState } from 'react';

import styles from '../../styles/index.module.scss'
import { FullscreenToggle } from '../controls/FullscreenToggle';
import { AbcVisualParams } from 'abcjs';
import { Note } from '../controls/Note';


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

	if (dataContext.data.ready && dataContext.data.sheet.type == "diatonic")
		useEffect(() => {
			dataContext.fn.setSelectedChord(null);
		}, [dataContext.data.sheet.chords]);

	const SHEET_OPTIONS: AbcVisualParams = {
		initialClef: true,
		staffwidth: sheetWidth,
		wrap: {
			minSpacing: 1.5,
			maxSpacing: 2,
			preferredMeasuresPerLine: 4
		},
		clickListener: (_abcelem, _tuneNumber, _classes, _analysis, drag, _mouseEvent) => {
			if (dataContext.data.ready && dataContext.data.sheet.type == "diatonic") {
				const chordIdx = dataContext.data.sheet.chords
					.map((v, i) => ({ v, i }))
					.filter(({ v }) => ["chord", "silence"].includes(v.type))
					?.[drag.index]?.i;

				dataContext.fn.setSelectedChord(chordIdx);
			}
		},
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
						&& DiatonicSheet.toABC(dataContext.data.sheet, 8, [dataContext.data.highlightedChord, dataContext.data.selectedChord].filter(v => !!v)))
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
							DiatonicSheet.addNote(dataContext.data.sheet as DCT.BaseSheet & DCT.DiatonicSheet, [x], dataContext.data.noteLength, dataContext.data.selectedChord)
							:
							DiatonicSheet.extendChord(dataContext.data.sheet as DCT.BaseSheet & DCT.DiatonicSheet, [x], dataContext.data.noteLength, dataContext.data.selectedChord)
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