import { FC, useContext } from 'react';
import { DataContext } from '../contexts/DataContext';

import styles from '../../styles/NoteLengths.module.scss';

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

	return <label className={styles.notelengths}>
		<input type="checkbox" />
		<span className={styles.togglePanel}>
			<span className={styles.icon}>𝅘𝅥</span>
			<span className={styles.toggle}></span>
			<div
				className={styles.list}
				onChange={ev => dataContext.fn.setNoteLength((ev.target as HTMLInputElement).value)}
			>
				{
					NOTES.map((v, i) =>
						<label key={i}>
							<input type="radio" name="notelength" value={`${v.value}`} defaultChecked={v.default ?? false} />
							<div>
								<span>{v.symbol}</span>
								<span>{v.display}</span>
							</div>
						</label>
					)
				}
			</div>
		</span>
	</label>
};

export { NoteLengths };