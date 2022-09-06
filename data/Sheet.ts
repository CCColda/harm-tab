import { DataContext } from "../types/DataContext";
import { DiaHarm } from "../types/Harmonica";
import { groupArray } from "./Array";
import { FormatBend, FormatHole } from "./DiatonicHarmonica";

export function abcFromDiatonicSheet(diatonicSheet: DataContext.BaseSheet & DataContext.DiatonicSheet, n: number) {
	/* const compiledNotes = data.sheet.notes.map((v, i) => v + data.sheet.durations[i]);
	const groupedNotes = groupArray(compiledNotes, n);
	const groupedText = groupArray(data.sheet.text, n);

	const compiledSheet = groupedNotes.map((v, i) => {
		return v.join(" ") + "\nw: " + groupedText[i].join(" ")
	}).join("\n");
 */
	const compiledSheet = groupArray(diatonicSheet.notes, n).map(
		group =>
			group.map(v => v.note + v.duration).join(" ") +
			"\nw: " + group.map(v => FormatBend(v.dir, v.bend) + FormatHole(v.dir, v.position)).join(" ")
	).join("\n");

	return [
		`X:1`,
		`T:${diatonicSheet.title}`,
		`M:${diatonicSheet.meter}`,
		`L:1/64`,
		`K:${diatonicSheet.key}`,
		`${compiledSheet}`
	].join("\n");
}

export function addDiatonicNote(sheet: DataContext.BaseSheet & DataContext.DiatonicSheet, note: DiaHarm.SoundPosition, duration: string) {
	return {
		...sheet,
		notes: [...sheet.notes, { ...note, duration }]
	}
}

export function toneFromDiatonicSheet(diatonicSheet: DataContext.BaseSheet & DataContext.DiatonicSheet) {
	
}