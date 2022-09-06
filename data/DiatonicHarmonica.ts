import { DiaHarm } from "../types/Harmonica";

const BEND_SYMBOLS = Object.freeze({
	[0]: { in: "", out: "" },
	[1]: { in: "↙", out: "↖" },
	[2]: { in: "⤦", out: "⤣" },
	[3]: { in: "⇙", out: "⇖" },
});

const HOLE_SYMBOLS = Object.freeze({
	[1]: { in: "①", out: "1" },
	[2]: { in: "②", out: "2" },
	[3]: { in: "③", out: "3" },
	[4]: { in: "④", out: "4" },
	[5]: { in: "⑤", out: "5" },
	[6]: { in: "⑥", out: "6" },
	[7]: { in: "⑦", out: "7" },
	[8]: { in: "⑧", out: "8" },
	[9]: { in: "⑨", out: "9" },
	[10]: { in: "⑩", out: "10" }
});


const FindSound = (layout: DiaHarm.Layout, sound: string): DiaHarm.SoundPosition[] => {
	return Object.entries(layout).map(([k, hole]) =>
		hole.filter(n => n.note == sound)
			.map(n => ({ position: Number(k) as DiaHarm.PositionNum, ...n }))
	).flat(1);
}

const FormatBend = (dir: "in" | "out", bend: DiaHarm.BendNum) => (bend && `${BEND_SYMBOLS[bend]?.[dir] ?? ""}`) || ""

const FormatBendWithNumber = (dir: "in" | "out", bend: DiaHarm.BendNum) => (bend && `${BEND_SYMBOLS[bend]?.[dir] ?? ""}\u00A0${bend}`) ?? ""

const FormatHole = (dir: "in" | "out", hole: DiaHarm.PositionNum) => HOLE_SYMBOLS[hole]?.[dir] ?? `${hole}`;

export { FindSound, FormatBend, FormatBendWithNumber, FormatHole };