import { FC, useContext } from 'react';

import { DataContext } from '../contexts/DataContext';

import { DiatonicSheet } from '../../data/Sheet';

import styles from '../../styles/MusicalElements.module.scss';

export type MusicalElementsProps = {
	// TODO
	onAdd?: (type: "bar" | "silence") => void,
	onRemove?: () => void,
}

const MusicalElements: FC<MusicalElementsProps> = (props) => {
	const dataContext = useContext(DataContext);

	const onErase = _ => {
		if (dataContext.data.saved.sheet.type == "diatonic") {
			const deleteIdx = dataContext.data.memory.selectedIndex ?? dataContext.data.saved.sheet.chords.length - 1;

			dataContext.fn.saved.modifySheet(sheet => (
				sheet.type == "diatonic"
					? {
						...sheet,
						chords: [
							...sheet.chords.slice(0, deleteIdx),
							...sheet.chords.slice(deleteIdx + 1)
						]
					}
					: sheet
			));

			props.onRemove && props.onRemove();
		}
	};

	const onAddSilence = _ => {
		if (dataContext.data.saved.sheet.type == "diatonic") {
			dataContext.fn.saved.modifySheet(
				sheet => sheet.type == "diatonic"
					? DiatonicSheet.addSilence(sheet, dataContext.data.memory.insert.duration, dataContext.data.memory.selectedIndex)
					: sheet
			)

			props.onAdd && props.onAdd("silence");
		}
	}

	const onAddBar = _ => {
		if (dataContext.data.saved.sheet.type == "diatonic") {
			dataContext.fn.saved.modifySheet(
				sheet => sheet.type == "diatonic"
					? DiatonicSheet.addBar(sheet, dataContext.data.memory.selectedIndex)
					: sheet
			)

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
