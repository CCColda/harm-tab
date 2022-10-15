import { FC, useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

import styles from '../../styles/MusicalElements.module.scss';
import { addBar, addDiatonicNote, addSilence } from '../../data/Sheet';

const MusicalElements: FC<{}> = (_props) => {
	const dataContext = useContext(DataContext);

	return <div className={`${styles.musicalElements}`}>
		<button onClick={_ => dataContext.data.ready
			&& dataContext.data.sheet.type == "diatonic"
			&& dataContext.fn.setSheet({
				...dataContext.data.sheet,
				chords: dataContext.data.sheet.chords.slice(0, -1)
			})}>⇤</button>

		{/* dataContext.data.ready
		&& dataContext.data.sheet.type == "diatonic"
		&& dataContext.data.sheet.notes.push({
			dir: "in", duration: dataContext.data.noteLength,
		note: "z", position: 0
			}) */}

		<button onClick={_ => dataContext.data.ready
			&& dataContext.data.sheet.type == "diatonic"
			&& dataContext.fn.setSheet(
				addSilence(dataContext.data.sheet, dataContext.data.noteLength)
			)}>𝄽</button>
		<button onClick={_ => dataContext.data.ready
			&& dataContext.data.sheet.type == "diatonic"
			&& dataContext.fn.setSheet(
				addBar(dataContext.data.sheet)
			)}>|</button>
	</div>
};

export { MusicalElements };