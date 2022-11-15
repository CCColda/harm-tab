import useEventListener from '../../data/useEventListener';

import { serializeDataContextData } from '../../data/Serializer';
import { DiatonicSheet } from '../../data/Sheet';
import { ChordSwitcher } from '../controls/ChordSwitcher';
import { FC, useContext, useEffect, useRef, useState } from 'react';

import { FullscreenToggle } from '../controls/FullscreenToggle';
import { AbcVisualParams, ClickListener } from 'abcjs';
import { DataContext } from '../contexts/DataContext';
import { DiatonicHarmonica } from '../controls/DiatonicHarmonica';
import { MusicalElements } from '../controls/MusicalElements';
import { MusicControl } from '../controls/MusicControl';
import { MusicSheet } from '../controls/MusicSheet';
import { NoteLengths } from '../controls/NoteLengths';
import { ThreeDotMenu } from '../controls/ThreeDotMenu';

import styles from '../../styles/Editor.module.scss'
import { EditorSheet } from '../controls/EditorSheet';
import { EditorDiatonicHarmonica } from '../controls/EditorDiatonicHarmonica';

const Editor: FC<{}> = (props) => {
	const dataContext = useContext(DataContext);

	const editorRef = useRef<HTMLDivElement | null>(null);

	return <div ref={editorRef} className={styles.editor}>
		<header>
			<button onClick={v => window.open("?" + serializeDataContextData(dataContext.data))}>🔗</button>
			<FullscreenToggle editorRef={editorRef} />
			<MusicControl />
			<ThreeDotMenu />
		</header>
		<main>
			<EditorSheet />
		</main>
		<footer>
			<EditorDiatonicHarmonica />

			<span className={styles.music}>
				<NoteLengths />
				<MusicalElements onAdd={type => {
					// TODO
					dataContext.fn.memory.setSelected(null);
				}} onRemove={() => {
					// TODO
					dataContext.fn.memory.setSelected(null);
				}} />
				<ChordSwitcher />
			</span>
		</footer>
	</div >
};

export { Editor };
