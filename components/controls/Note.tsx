import { DottedNoteDuration, NoteDuration } from "../../data/MusicNote";
import styles from "../../styles/Note.module.scss";

export type NoteDisplayDuration = NoteDuration | DottedNoteDuration;

const AVAILABLE_NOTES = Object.freeze<NoteDisplayDuration[]>([
	1, 2, 4, 8, 16, 32, 64
]);

export const Note: React.FC<{ duration: NoteDisplayDuration }> = props => {
	let displayNote: NoteDisplayDuration | null = null;
	let displayDot = false;

	if (AVAILABLE_NOTES.includes(props.duration)) {
		displayNote = props.duration;
	}
	else {
		const props_dehalved = (props.duration * 3.0) / 2.0;

		if ((AVAILABLE_NOTES as number[]).includes(props_dehalved)) {
			displayNote = props_dehalved as NoteDisplayDuration;
			displayDot = true;
		}
	}

	return <span className={styles.noteComponent}>{
		displayNote
			? <>
				<span className={styles.note} style={{ backgroundImage: `url(img/${displayNote}n.svg)` }}></span>
				{displayDot && <span className={styles.dot}></span>}
			</>
			: <>
				<span className={styles.notePlaceholder}>{props.duration}</span>
			</>
	}</span>
}