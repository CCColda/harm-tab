import { DataContext } from "../types/DataContext";
import { DiaHarm } from "../types/Harmonica";
import { groupArray } from "./Array";
import { FormatBend, FormatHole } from "./DiatonicHarmonica";
import { ABCNoteToNumber } from "./MusicNote";

export function abcFromDiatonicSheet(diatonicSheet: DataContext.BaseSheet & DataContext.DiatonicSheet, n: number, highlight?: number) {
	const compiledSheet = groupArray(diatonicSheet.chords, n)
		.map((group, group_id) => {
			const notes = group.map(
				chord => {
					switch (chord.type) {
						case "bar":
							return "|";
						case "silence":
							return "z" + chord.duration;
						case "chord":
							return "[" + chord.notes.map(w => w.note).join("") + "]" + chord.duration;
					}
				}
			);

			if (highlight !== null && Math.floor(highlight / n) == group_id)
				notes[highlight % n] = "!mark!" + notes[highlight % n];

			const words = group.map(
				chord => {
					switch (chord.type) {
						case "bar":
							return "|";
						case "silence":
							return "";
						case "chord":
							return [...chord.notes]
								.sort((a, b) => ABCNoteToNumber(a.note) - ABCNoteToNumber(b.note))
								.map(v => FormatBend(v.dir, v.bend) + FormatHole(v.dir, v.position))
								.join("")
					}
				}
			);

			return notes.join(" ") + "\nw: " + words.join(" ");
		}).join("\n");

	return [
		`X:1`,
		`T:${diatonicSheet.title}`,
		`M:${diatonicSheet.meter}`,
		`L:1/64`,
		`K:${diatonicSheet.key}`,
		compiledSheet
	].join("\n");
}

export function addDiatonicNote(sheet: DataContext.BaseSheet & DataContext.DiatonicSheet, notes: DiaHarm.SoundPosition[], duration: string): typeof sheet {
	return {
		...sheet,
		chords: [...sheet.chords, { type: "chord", notes, duration }]
	}
}

export function addSilence(sheet: DataContext.BaseSheet & DataContext.DiatonicSheet, duration: string): typeof sheet {
	return {
		...sheet,
		chords: [...sheet.chords, { type: "silence", duration }]
	}
}

export function addBar(sheet: DataContext.BaseSheet & DataContext.DiatonicSheet): typeof sheet {
	return {
		...sheet,
		chords: [...sheet.chords, { type: "bar" }]
	}
}

export function extendDiatonicChord(sheet: DataContext.BaseSheet & DataContext.DiatonicSheet, notes: DiaHarm.SoundPosition[], fallbackDuration: string): typeof sheet {
	const last = sheet.chords[sheet.chords.length - 1];

	if (last.type == "chord")
		return {
			...sheet,
			chords: [...sheet.chords.slice(0, -1), {
				type: "chord",
				notes: [...last.notes, ...notes],
				duration: last.duration
			}]
		}
	else
		return addDiatonicNote(sheet, notes, fallbackDuration);
}
