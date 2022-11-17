import { FC, FormEventHandler, useContext } from 'react';

import { Note, NoteDisplayDuration } from './Note';

import styles from '../../styles/NoteLengths.module.scss';
import { DataContext } from '../contexts/DataContext';
import { NoteDuration } from '../../data/MusicNote';

export type NoteLengthsProps = {

};

const NOTES = Object.freeze([
	{ symbol: "𝅘𝅥𝅱", value: 1, display: "1/64" },
	{ symbol: "𝅘𝅥𝅰", value: 2, display: "1/32" },
	{ symbol: "𝅘𝅥𝅯", value: 4, display: "1/16" },
	{ symbol: "𝅘𝅥𝅮", value: 8, display: "1/8", default: true },
	{ symbol: "𝅘𝅥", value: 16, display: "1/4" },
	{ symbol: "𝅘𝅥.", value: 24, display: "3/8" },
	{ symbol: "𝅗𝅥", value: 32, display: "1/2" },
	{ symbol: "𝅗𝅥.", value: 48, display: "3/4" },
	{ symbol: "𝅝", value: 64, display: "1/1" },
	{ symbol: "𝅝.", value: 96, display: "3/2" },
]);

const NoteLengths: FC<NoteLengthsProps> = (props) => {
	const dataContext = useContext(DataContext);


	const onChange: FormEventHandler<HTMLDivElement> = ev =>
		dataContext.fn.memory.insert.setDuration(
			Number((ev.target as HTMLInputElement).value) as NoteDuration
		);


	return <label className={styles.notelengths}>
		<input type="checkbox" />
		<span className={styles.togglePanel}>
			<span className={styles.icon}><Note duration={8} /></span>
			<span className={styles.toggle}></span>
			<div
				className={styles.list}
				onChange={onChange}
			>
				{
					NOTES.map((v, i) =>
						<label key={i}>
							<input type="radio" name="notelength" value={`${v.value}`} defaultChecked={v.default ?? false} />
							<div>
								<Note duration={64 / v.value as NoteDisplayDuration} />
							</div>
						</label>
					)
				}
			</div>
		</span>
	</label>
};

export { NoteLengths };