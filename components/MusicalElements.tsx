import { FC } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { DiatonicSheet } from '../data/Sheet';

import styles from '../styles/MusicalElements.module.scss';
import { Data } from '../types/Data';

export type MusicalElementsProps = {
	// TODO
	onAdd?: (type: "bar" | "silence") => void,
	onRemove?: () => void,
}

const MusicalElements: FC<MusicalElementsProps> = (props) => {
	const sheet = useSelector<RootState, Data["sheet"]>(state => state.sheet.value);
	const indices = useSelector<RootState, Data["indices"]>(state => state.indices.value);
	const insert = useSelector<RootState, Data["insert"]>(state => state.insert.value);
	const dispatch = useDispatch();

	const onErase = _ => {
		if (sheet.type == "diatonic") {
			const deleteIdx = indices.selectedIndex ?? sheet.chords.length - 1;

			const modified = sheet.type == "diatonic"
				? {
					...sheet,
					chords: [
						...sheet.chords.slice(0, deleteIdx),
						...sheet.chords.slice(deleteIdx + 1)
					]
				}
				: sheet;

			dispatch({ type: "sheet/set", payload: modified });

			props.onRemove && props.onRemove();
		}
	};

	const onAddSilence = _ => {
		if (sheet.type == "diatonic") {
			const modified = sheet.type == "diatonic"
				? DiatonicSheet.addSilence(sheet, insert.duration, indices.selectedIndex)
				: sheet;

			dispatch({ type: "sheet/set", payload: modified });

			props.onAdd && props.onAdd("silence");
		}
	}

	const onAddBar = _ => {
		if (sheet.type == "diatonic") {
			const modified = sheet.type == "diatonic"
				? DiatonicSheet.addBar(sheet, indices.selectedIndex)
				: sheet;

			dispatch({ type: "sheet/set", payload: modified });

			props.onAdd && props.onAdd("bar");
		}
	}

	return <div className={styles.musicalElements}>
		<button onClick={onErase}>⇤</button>
		<button onClick={onAddSilence}>𝄽</button>
		<button onClick={onAddBar}>|</button>
	</div>
};

export { MusicalElements };
