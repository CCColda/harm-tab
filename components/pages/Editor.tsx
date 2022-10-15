
import useEventListener from '../../data/useEventListener';

import {
	DataContext,
	MusicSheet,
	ToneContext,
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


const Editor: FC<{}> = (props) => {
	const dataContext = useContext(DataContext);

	const [isFullscreen, setIsFullscreen] = useState(false);
	const [sheetWidth, setSheetWidth] = useState(0);
	const mainRef = useRef<HTMLDivElement | null>(null);
	const editorRef = useRef<HTMLDivElement | null>(null);

	useEventListener(
		window,
		'resize',
		_ev => mainRef && setSheetWidth(mainRef.current.getBoundingClientRect().width),
		[mainRef]
	);

	useEventListener(
		editorRef.current,
		'onfullscreenchange',
		_ev => editorRef && setIsFullscreen(!!document.fullscreenElement),
		[editorRef]
	);

	const toggleFullscreen = () => {
		if (isFullscreen)
			document.exitFullscreen().then(() => setIsFullscreen(false));
		else
			editorRef.current?.requestFullscreen({ navigationUI: 'auto' }).then(() => setIsFullscreen(true));
	};

	return dataContext.data.ready && <div ref={editorRef} className={styles.editor}>
		<header>
			<button onClick={v => window.open("?" + serializeDataContextData(dataContext.data))}>🔗</button>
			<button onClick={toggleFullscreen}>⛶</button>
			<MusicControl />
			<ThreeDotMenu />
		</header>
		<main>
			<div className={styles.sheetWrapper} ref={mainRef}>
				<MusicSheet abc={
					(dataContext.data.ready
						&& dataContext.data.sheet.type == "diatonic"
						&& abcFromDiatonicSheet(dataContext.data.sheet, 8))
					|| ""
				} options={{
					initialClef: true,
					staffwidth: sheetWidth,
					wrap: {
						minSpacing: 1.5,
						maxSpacing: 2,
						preferredMeasuresPerLine: 4
					}
				}} />
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
							extendDiatonicChord(dataContext.data.sheet as DCT.BaseSheet & DCT.DiatonicSheet, [x])
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