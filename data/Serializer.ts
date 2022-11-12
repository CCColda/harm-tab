import { DiaHarm } from "../types/Harmonica";
import { DataContext } from "../types/DataContext";

const SOUND_IDENTIFIERS = Object.freeze(
	Array(10 * 4 * 2).fill(0).map((_, i) => String.fromCharCode("+".charCodeAt(0) + i))
);

const LAYOUT_MINOR_SEPARATOR = Object.freeze("!");
const LAYOUT_MAJOR_SEPARATOR = Object.freeze("#");
const LAYOUT_NOTE_SEPARATOR = Object.freeze("$");

const SILENCE = Object.freeze("~");
const BAR = Object.freeze("|");

function serializeDiaHarmPos(position: DiaHarm.Position): string {
	return SOUND_IDENTIFIERS[
		(position.dir == "out" ? 0 : 40) + (position.position - 1) * 4 + (position.bend ?? 0)
	];
}

function parseDiaHarmPos(posChar: string): DiaHarm.Position {
	const soundIdentifier = SOUND_IDENTIFIERS.findIndex(w => w == posChar);

	return {
		bend: (soundIdentifier % 4) as DiaHarm.BendNum,
		dir: (soundIdentifier >= 40 ? "in" : "out"),
		position: Math.floor((soundIdentifier % 40) / 4) + 1 as DiaHarm.PositionNum
	};
}

function serializeDiaHarmLayout(layout: DiaHarm.Layout): string {
	return Object.entries(layout)
		.map(([k, v]) => v
			.map(s => serializeDiaHarmPos({ ...s, position: Number(k) as DiaHarm.PositionNum }) + s.note)
			.join(LAYOUT_MINOR_SEPARATOR))
		.join(LAYOUT_MINOR_SEPARATOR);
}

function parseDiaHarmLayout(layoutString: string): DiaHarm.Layout {
	const parsedLayout = layoutString
		.split(LAYOUT_MINOR_SEPARATOR)
		.map(v => ({
			...parseDiaHarmPos(v[0]),
			note: v.slice(1)
		}));

	const layoutEntries = Array(10)
		.fill(0)
		.map((_, i) => ([
			i + 1,
			parsedLayout
				.filter(v => v.position == i + 1)
				.sort((a, b) => a.bend - b.bend)
		]));

	return Object.fromEntries(layoutEntries);
}

export function serializeDataContextData(data: DataContext.Data): string | undefined {
	if (!data.ready) return undefined;

	const layout = data.layouts.find(v => v.label == data.sheet.layout);

	if (!layout) return undefined;

	let result: string[];

	switch (layout.type) {
		case "diatonic": {
			if (data.sheet.type != "diatonic")
				throw Error("Sheet type doesn't match layout type");

			result = [
				"D" + layout.sign,
				layout.label,
				serializeDiaHarmLayout(layout.layout),
				[data.sheet.title, data.sheet.meter, data.sheet.key].join(LAYOUT_MINOR_SEPARATOR),
				data.sheet.chords.map(chord => {
					switch (chord.type) {
						case "bar":
							return BAR;
						case "silence":
							return SILENCE + chord.duration;
						case "chord":
							return chord.notes.map(note => serializeDiaHarmPos(note)).join(LAYOUT_NOTE_SEPARATOR) + chord.duration;
					}
				}).join(LAYOUT_MINOR_SEPARATOR)
			];
			break;
		}
		case "chromatic": {
			result = [
				"C"
			]
			break;
		}
	}

	return encodeURI(result.join(LAYOUT_MAJOR_SEPARATOR));
}


export function parseDataContextData(dataString: string): DataContext.Data {
	const decoded = decodeURI(dataString);
	try {
		switch (decoded[0]) {
			case "D": {
				const dataSegments = decoded.split(LAYOUT_MAJOR_SEPARATOR);
				const sheetSegment = dataSegments[3].split(LAYOUT_MINOR_SEPARATOR);
				const positionsSegment = dataSegments[4].split(LAYOUT_MINOR_SEPARATOR);

				const label = dataSegments[1];
				const layout = parseDiaHarmLayout(dataSegments[2]);

				return {
					ready: true,
					mode: "note",
					layouts: [
						{
							type: "diatonic",
							sign: dataSegments[0].slice(1),
							label,
							layout
						}
					],
					noteLength: "8",
					highlightedChord: null,
					sheet: {
						type: "diatonic",
						title: sheetSegment[0],
						meter: sheetSegment[1],
						key: sheetSegment[2],
						chords: positionsSegment.map(chord => {
							if (chord.startsWith(BAR)) {
								return {
									type: "bar"
								};
							}
							else if (chord.startsWith(SILENCE)) {
								return {
									type: "silence",
									duration: chord.slice(SILENCE.length)
								};
							}
							else {
								const notes = chord.slice(0, 1).split(LAYOUT_NOTE_SEPARATOR);

								console.dir(notes);

								return {
									type: "chord",
									notes: notes.map(note => {
										const parsed = parseDiaHarmPos(note);

										console.log("Searching for " + JSON.stringify(parsed) + " (" + note + ")")

										return {
											...parsed,
											note: layout[parsed.position].find(w => w.bend == parsed.bend && w.dir == parsed.dir).note,
										};
									}),
									duration: chord.slice(1)
								};
							}

						}),
						layout: label
					}
				};
			}
			case "C": {
				return {
					ready: false
				};
			}
			default: {
				return { ready: false };
			}
		}
	}
	catch (exc) {
		console.error("Error while loading: ", exc);
		return { ready: false };
	}
}