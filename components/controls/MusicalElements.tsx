import { FC, useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

import styles from '../../styles/MusicalElements.module.scss';

const MusicalElements: FC<{}> = (_props) => {
	const dataContext = useContext(DataContext);

	return <div className={`${styles.musicalElements}`}>
		<button onClick={_ => dataContext.data.ready
			&& dataContext.data.sheet.type == "diatonic"
			&& dataContext.fn.setSheet({
				...dataContext.data.sheet,
				chords: dataContext.data.sheet.chords.slice(0, -1)
			})}>⇤</button>

		{/* TODO SERIALIZE <button onClick={_ => dataContext.data.ready
			&& dataContext.data.sheet.type == "diatonic"
			&& dataContext.data.sheet.notes.push({
				dir: "in", duration: dataContext.data.noteLength,
				note: "z", position: 0
			})}>𝄽</button>
		<button onClick={_ => dataContext.fn.addNote("|", "|", "")}>|</button> */}
	</div>
};

export { MusicalElements };