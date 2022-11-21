import { ChordSwitcher } from './ChordSwitcher';
import { FC, useContext, useRef } from 'react';

import { FullscreenToggle } from './FullscreenToggle';
import { MusicalElements } from './MusicalElements';
import { MusicControl } from './MusicControl';
import { NoteLengths } from './NoteLengths';

import { EditorSheet } from './EditorSheet';
import { EditorDiatonicHarmonica } from './EditorDiatonicHarmonica';
import { Share } from './Share';

import { TitleField } from './TitleField';
import { MetreField } from './MetreField';
import { useDispatch } from 'react-redux';

import styles from '../styles/Editor.module.scss'

export type EditorProps = {
	readonly?: boolean
}

const Editor: FC<EditorProps> = ({ readonly }) => {
	const dispatch = useDispatch();
	const editorRef = useRef<HTMLDivElement | null>(null);

	return <div ref={editorRef} className={styles.editor}>
		<header>
			<span>
				<TitleField readonly={readonly} brief="Cím" />
				<MetreField readonly={readonly} brief="Ritmus" />
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
		<footer>{
			!readonly &&
			<>
				<EditorDiatonicHarmonica />

				<span className={styles.music}>
					<NoteLengths />
					<MusicalElements onAdd={type => {
						dispatch({ type: "indices/resetSelected" });
					}} onRemove={() => {
						dispatch({ type: "indices/resetSelected" });
					}} />
					<ChordSwitcher />
				</span>
			</>
		}
		</footer>
	</div >
};

export { Editor };
