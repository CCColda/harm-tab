export type NoteDuration = 1 | 2 | 4 | 8 | 16 | 32 | 64;
export type DottedNoteDuration = 3 | 6 | 12 | 24 | 48 | 96;
export type ToneNoteDuration = `${NoteDuration}n` | `${NoteDuration}n.`;
export type AbcNoteDuration = `${NoteDuration | DottedNoteDuration}`;

export type Note = "C" | "D" | "E" | "F" | "G" | "A" | "B";
export type Octave = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
export type AbcNote = "z" | `${"^" | "_" | ""}${Note | Lowercase<Note>}${"," | "'" | ",," | "''" | ",,," | "'''" | ""}`
export type ToneNote = `${Note}${"#" | "b" | ""}${Octave | ""}`

const ABC_NOTE_SCORES = Object.freeze({
	[0]: ["C"],
	[0.5]: ["^C", "_D"],
	[1]: ["D"],
	[1.5]: ["^D", "_E"],
	[2]: ["E"],
	[2.5]: ["^E", "_F"],
	[3]: ["F"],
	[3.5]: ["^F", "_G"],
	[4]: ["G"],
	[4.5]: ["^G", "_A"],
	[5]: ["A"],
	[5.5]: ["^A", "_B"],
	[6]: ["B"],
	[6.5]: ["^B", "_C"],
});

const TONE_NOTE_SCORES = Object.freeze({
	[0]: "C",
	[0.5]: "Db",
	[1]: "D",
	[1.5]: "Eb",
	[2]: "E",
	[2.5]: "Fb",
	[3]: "F",
	[3.5]: "Gb",
	[4]: "G",
	[4.5]: "Ab",
	[5]: "A",
	[5.5]: "Bb",
	[6]: "B",
	[6.5]: "Cb",
});

const MAX_NOTE_SCORE = 7;

const NOTE_SCALE_MEDIAN = 4;
const SUPERSCRIPT_NUMBERS = Object.freeze("⁰¹²³⁴⁵⁶⁷⁸⁹");

const l_numberToSuperscript = (n: number | string): string => `${n}`.split("").map(v => SUPERSCRIPT_NUMBERS[Number(v)] ?? v).join("");

const l_countCharacters = (s: string, c: string) => s.split("").filter(v => v == c).length;

const l_calculateNodeModifier = (note: string) =>
	(note.match(/[=_]?[cdefgab][,']*/g) ? 1 : 0) + l_countCharacters(note, "'") - l_countCharacters(note, ",");


const ABCNoteToNumber = (note: string) => {
	const modifier = l_calculateNodeModifier(note);

	const match = note.toUpperCase().match(/[\^_]?[CDEFGAB]/);
	if (!match)
		return -1;

	const value = Number(Object.entries(ABC_NOTE_SCORES).find(v => v[1].includes(match[0]))[0]);
	return (modifier + NOTE_SCALE_MEDIAN) * MAX_NOTE_SCORE + value;
};

const FormatABCNote = (note: string): string => {
	const isFlat = !!note.match(/_[cdefgab].*/i);
	const isSharp = !!note.match(/\^[cdefgab].*/i);

	const modifier = l_calculateNodeModifier(note);
	const letterMatch = note.match(/[\^_]?([cdefgab]).*/i);

	if (!letterMatch || !letterMatch[1])
		return note;

	return letterMatch[1].toUpperCase() + (isFlat ? "♭" : "") + (isSharp ? "♯" : "") + l_numberToSuperscript(`${modifier + NOTE_SCALE_MEDIAN}`);
}

const ABCNoteToToneNote = (note: string): string => {
	const modifier = l_calculateNodeModifier(note);

	const match = note.toUpperCase().match(/[\^_]?[CDEFGAB]/);
	if (!match)
		return "";

	const value = Number(Object.entries(ABC_NOTE_SCORES).find(v => v[1].includes(match[0]))[0]);

	return `${TONE_NOTE_SCORES[value]}${modifier + NOTE_SCALE_MEDIAN}`;
}

const ABCNoteDurationToToneDuration = (dur: AbcNoteDuration): ToneNoteDuration => {
	const durNumber = Number(dur);

	if (Number.isInteger(64.0 / durNumber))
		return `${(64.0 / durNumber) as NoteDuration}n`;

	return `${(64.0 / Math.floor((durNumber * 2.0) / 3.0)) as NoteDuration}n.`;
};

export { ABCNoteToNumber, FormatABCNote, ABCNoteToToneNote, ABCNoteDurationToToneDuration }
