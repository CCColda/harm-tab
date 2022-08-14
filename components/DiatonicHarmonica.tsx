import { FC, useEffect, useState } from "react";
import { DiaHarmBend, DiaHarmLayout, DiaHarmPositions, DiaHarmSound, DiaHarmSoundPos, FormatBendWithNumber } from "../data/DiatonicHarmonica";
import { FormatABCNote } from "../data/MusicNote";
import styles from "./DiatonicHarmonica.module.scss"

export type DiatonicHarmonicaProps = {
	layout?: DiaHarmLayout,
	onClick?: (position: DiaHarmSoundPos) => void
}

type DiatonicHarmonicaHoleProps = {
	holeNumber: DiaHarmPositions,
	holeData: DiaHarmSound[],
	onClick: (position: DiaHarmSoundPos) => void;
};

const DiatonicHarmonicaHole: FC<DiatonicHarmonicaHoleProps> = (props) => {
	const outNote = props.holeData.find(v => v.dir == "out" && !v.bend) ?? { dir: "out", note: "" };
	const inNote = props.holeData.find(v => v.dir == "in" && !v.bend) ?? { dir: "in", note: "" };

	const outNotes = props.holeData.filter(v => v.dir == "out").map(v => ({ ...v, bend: (v.bend || 0) as DiaHarmBend })).sort((a, b) => b.bend - a.bend);
	const inNotes = props.holeData.filter(v => v.dir == "in").map(v => ({ ...v, bend: (v.bend || 0) as DiaHarmBend })).sort((a, b) => a.bend - b.bend);

	const displayOutNotes = outNotes.length > 1;
	const displayInNotes = inNotes.length > 1;

	return <span className={styles.hole}>
		<p className={styles.note}>{props.holeNumber}</p>
		<span className={styles.buttonarea}>
			<button
				name={`ho_${props.holeNumber}`}
				onClick={_ => displayOutNotes || props.onClick({ position: props.holeNumber, ...outNote })}
			>
				{FormatABCNote(outNote.note)}
			</button>
			<label className={`${styles.bendpanel} ${styles.out}`} htmlFor={`ho_${props.holeNumber}`}>
				{displayOutNotes && outNotes.map((v, i) =>
					<button
						key={i}
						onClick={_ => props.onClick({ position: props.holeNumber, ...v })}
					>
						{(v.bend && FormatBendWithNumber(v.dir, v.bend)) || ""} {FormatABCNote(v.note)}
					</button>
				)}
			</label>
		</span>
		<span className={styles.buttonarea}>
			<button
				name={`hi_${props.holeNumber}`}
				onClick={_ => !displayInNotes && props.onClick({ position: props.holeNumber, ...inNote })}
			>
				{FormatABCNote(inNote.note)}
			</button>
			<label className={`${styles.bendpanel} ${styles.in}`} htmlFor={`hi_${props.holeNumber}`}>
				{displayInNotes && inNotes.map((v, i) =>
					<button
						key={i}
						onClick={_ => props.onClick({ position: props.holeNumber, ...v })}
					>
						{(v.bend && FormatBendWithNumber(v.dir, v.bend)) || ""} {FormatABCNote(v.note)}
					</button>
				)}
			</label>
		</span>
	</span>
}

const DiatonicHarmonica: FC<DiatonicHarmonicaProps> = (props) => {
	return <div className={styles.harmonica}>
		<div className={styles.body}>
			{Array(10).fill(0).map((_, i) =>
				<DiatonicHarmonicaHole onClick={props.onClick ?? (_ => { })} holeNumber={(i + 1) as DiaHarmPositions} holeData={(props.layout && props.layout[i + 1]) ?? []} key={i}></DiatonicHarmonicaHole>
			)}
		</div>
	</div>
}

export { DiatonicHarmonica }