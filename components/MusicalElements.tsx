import { FC, useContext } from 'react';
import { DataContext } from './DataContext';
import styles from './MusicalElements.module.scss';

const MusicalElements: FC<{}> = (_props) => {
	const dataContext = useContext(DataContext);

	return <div className={`${styles.musicalElements}`}>
		<button onClick={_ => dataContext.fn.popNote()}>⇤</button>
		<button onClick={_ => dataContext.fn.addNote("z", "", dataContext.data.noteLength)}>𝄽</button>
		<button onClick={_ => dataContext.fn.addNote("|", "|", "")}>|</button>
	</div>
};

export { MusicalElements };