import { FC, useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

import styles from '../../styles/MusicalElements.module.scss';
import { DiatonicSheet } from '../../data/Sheet';

const MusicalElements: FC<{}> = (_props) => {
	const dataContext = useContext(DataContext);

	const onErase = _ => {
		if (dataContext.data.ready && dataContext.data.sheet.type == "diatonic") {
			const deleteIdx = dataContext.data.selectedChord ?? dataContext.data.sheet.chords.length - 1;

			dataContext.fn.setSheet({
				...dataContext.data.sheet,
				chords: [
					...dataContext.data.sheet.chords.slice(0, deleteIdx),
					...dataContext.data.sheet.chords.slice(deleteIdx + 1)
				]
			})
		}
	};

	return <div className={`${styles.musicalElements}`}>
		<button onClick={onErase}>⇤</button>

		{/* dataContext.data.ready
		&& dataContext.data.sheet.type == "diatonic"
		&& dataContext.data.sheet.notes.push({
			dir: "in", duration: dataContext.data.noteLength,
		note: "z", position: 0
			}) */}

		<button onClick={_ => dataContext.data.ready
			&& dataContext.data.sheet.type == "diatonic"
			&& dataContext.fn.setSheet(
				DiatonicSheet.addSilence(dataContext.data.sheet, dataContext.data.noteLength, dataContext.data.selectedChord)
			)}>𝄽</button>
		<button onClick={_ => dataContext.data.ready
			&& dataContext.data.sheet.type == "diatonic"
			&& dataContext.fn.setSheet(
				DiatonicSheet.addBar(dataContext.data.sheet, dataContext.data.selectedChord)
			)}>|</button>
	</div>
};

export { MusicalElements };