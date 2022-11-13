import { DataContext } from "../types/DataContext";
import { DiaHarm } from "../types/Harmonica";
import { groupArray } from "./Array";
import { FormatBend, FormatHole } from "./DiatonicHarmonica";
import { ABCNoteToNumber } from "./MusicNote";

export const DiatonicSheet = (() => {
	type DiatonicSheetType = DataContext.BaseSheet & DataContext.DiatonicSheet;

	const addChord = (sheet: DiatonicSheetType, chord: (typeof sheet)["chords"], idx?: number): typeof sheet => {
		const
			chordsBeforeIdx = sheet.chords.slice(0, (idx ?? sheet.chords.length) + 1),
			chordsAfterIdx = sheet.chords.slice((idx ?? sheet.chords.length) + 1);

		return {
			...sheet,
			chords: [...chordsBeforeIdx, ...chord, ...chordsAfterIdx]
		};
	}

	const toABC = (diatonicSheet: DiatonicSheetType, n: number, highlights: number[] = []) => {
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

				for (const highlight of highlights)
					if (Math.floor(highlight / n) == group_id)
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

	const addNote = (sheet: DiatonicSheetType, notes: DiaHarm.SoundPosition[], duration: string, idx?: number) =>
		addChord(sheet, [{ type: "chord", notes, duration }], idx);

	const addSilence = (sheet: DiatonicSheetType, duration: string, idx?: number) =>
		addChord(sheet, [{ type: "silence", duration }], idx);

	const addBar = (sheet: DiatonicSheetType, idx?: number) =>
		addChord(sheet, [{ type: "bar" }], idx);

	const extendChord = (sheet: DiatonicSheetType, notes: DiaHarm.SoundPosition[], fallbackDuration: string, idx?: number): typeof sheet => {
		const chordAtIdx = sheet.chords[idx ?? (sheet.chords.length - 1)];
		const
			chordsBeforeIdx = sheet.chords.slice(0, (idx ?? sheet.chords.length) - 1),
			chordsAfterIdx = sheet.chords.slice(idx ? idx + 1 : sheet.chords.length);

		if (chordAtIdx?.type == "chord")
			return {
				...sheet,
				chords: [
					...chordsBeforeIdx,
					{
						type: "chord",
						notes: [...chordAtIdx.notes, ...notes],
						duration: chordAtIdx.duration
					},
					...chordsAfterIdx
				]
			}
		else
			return addNote(sheet, notes, fallbackDuration, idx);
	}

	return Object.freeze({
		toABC,
		addNote,
		addSilence,
		addBar,
		extendChord
	});
})();

