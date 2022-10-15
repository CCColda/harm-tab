import { DataContext } from "../types/DataContext";
import { DiaHarm } from "../types/Harmonica";
import { groupArray } from "./Array";
import { FormatBend, FormatHole } from "./DiatonicHarmonica";
import { ABCNoteToNumber } from "./MusicNote";

export function abcFromDiatonicSheet(diatonicSheet: DataContext.BaseSheet & DataContext.DiatonicSheet, n: number) {
	const compiledSheet = groupArray(diatonicSheet.chords, n)
		.map(group =>
			group.map(chord => "[" + chord.notes.map(w => w.note).join("") + "]" + chord.duration).join(" ") +
			"\nw: " + group.map(({ notes }) => [...notes].sort((a, b) => ABCNoteToNumber(a.note) - ABCNoteToNumber(b.note)).map(v => FormatBend(v.dir, v.bend) + FormatHole(v.dir, v.position)).join("")).join(" ")
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

export function addDiatonicNote(sheet: DataContext.BaseSheet & DataContext.DiatonicSheet, notes: DiaHarm.SoundPosition[], duration: string) {
	return {
		...sheet,
		chords: [...sheet.chords, { notes, duration }]
	}
}

export function extendDiatonicChord(sheet: DataContext.BaseSheet & DataContext.DiatonicSheet, notes: DiaHarm.SoundPosition[]) {
	return {
		...sheet,
		chords: [...sheet.chords.slice(0, -1), {
			notes: [...sheet.chords[sheet.chords.length - 1].notes, ...notes],
			duration: sheet.chords[sheet.chords.length - 1].duration
		}]
	}
}
