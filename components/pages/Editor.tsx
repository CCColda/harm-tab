import { ChordSwitcher } from '../controls/ChordSwitcher';
import { FC, useContext, useRef } from 'react';

import { FullscreenToggle } from '../controls/FullscreenToggle';
import { DataContext } from '../contexts/DataContext';
import { MusicalElements } from '../controls/MusicalElements';
import { MusicControl } from '../controls/MusicControl';
import { NoteLengths } from '../controls/NoteLengths';

import { EditorSheet } from '../controls/EditorSheet';
import { EditorDiatonicHarmonica } from '../controls/EditorDiatonicHarmonica';
import { Share } from '../controls/Share';

import styles from '../../styles/Editor.module.scss'
import { TitleField } from '../controls/TitleField';
import { MetreField } from '../controls/MetreField';

const Editor: FC<{}> = _props => {
	const dataContext = useContext(DataContext);

	const editorRef = useRef<HTMLDivElement | null>(null);

	return <div ref={editorRef} className={styles.editor}>
		<header>
			<span>
				<TitleField brief="Cím" />
				<MetreField brief="Ritmus" />
			</span>
			<span>
				<Share />
				<MusicControl />
				<FullscreenToggle editorRef={editorRef} />
			</span>
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
