const ABC_NOTE_SCORES = Object.freeze({
	[0]: ["C"],
	[0.5]: ["=C", "_D"],
	[1]: ["D"],
	[1.5]: ["=D", "_E"],
	[2]: ["E"],
	[2.5]: ["=E", "_F"],
	[3]: ["F"],
	[3.5]: ["=F", "_G"],
	[4]: ["G"],
	[4.5]: ["=G", "_A"],
	[5]: ["A"],
	[5.5]: ["=A", "_B"],
	[6]: ["B"],
	[6.5]: ["=B", "_C"],
})

const MAX_NOTE_SCORE = 7;

const NOTE_SCALE_MEDIAN = 2;
const SUPERSCRIPT_NUMBERS = Object.freeze("⁰¹²³⁴⁵⁶⁷⁸⁹");

const l_numberToSuperscript = (n: number | string): string => `${n}`.split("").map(v => SUPERSCRIPT_NUMBERS[Number(v)] ?? v).join("");

const l_countCharacters = (s: string, c: string) => s.split("").filter(v => v == c).length;

const l_calculateNodeModifier = (note: string) =>
	(note.match(/[=_]?[cdefgab][,']*/g) ? 1 : 0) + l_countCharacters(note, "'") - l_countCharacters(note, ",");


const ABCNoteToNumber = (note: string) => {
	const modifier = l_calculateNodeModifier(note);

	const match = note.toUpperCase().match(/[=_]?[CDEFGAB]/);
	if (!match)
		return [];

	const value = Number(Object.entries(ABC_NOTE_SCORES).find(v => v[1].includes(match[0]))[0]);
	return (modifier + NOTE_SCALE_MEDIAN) * MAX_NOTE_SCORE + value;
};

const FormatABCNote = (note: string): string => {
	const isFlat = !!note.match(/_[cdefgab].*/i);
	const isSharp = !!note.match(/=[cdefgab].*/i);

	const modifier = l_calculateNodeModifier(note);
	const letterMatch = note.match(/[_=]?([cdefgab]).*/i);

	if (!letterMatch || !letterMatch[1])
		return note;

	return letterMatch[1].toUpperCase() + (isFlat ? "♭" : "") + (isSharp ? "♯" : "") + l_numberToSuperscript(`${modifier + NOTE_SCALE_MEDIAN}`);
}

export {ABCNoteToNumber, FormatABCNote}