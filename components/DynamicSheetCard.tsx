import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { serializeSheet } from "../data/Serializer";
import { DiatonicSheet } from "../data/Sheet";
import { DataSheets } from "../types/Data"
import { HarmLayout } from "../types/Harmonica";
import { DiatonicHarmonica } from "./DiatonicHarmonica";
import { IconButton } from "./IconButton";
import { SheetCard } from "./SheetCard"

export type DynamicSheetCardProps = {
	sheet: DataSheets.Sheet,
}

export const DynamicSheetCard: React.FC<DynamicSheetCardProps> = ({ sheet }) => {
	const router = useRouter();
	const layouts = useSelector<RootState, HarmLayout[]>(state => state.layouts.value);

	const onShare = async () => {
		await navigator.clipboard.writeText("https://cccolda.github.io/harm-tab" + "/edit?" + serializeSheet(layouts, sheet));
		alert("Copied");
	};

	const onOpen = () => {
		router.push("/edit?" + serializeSheet(layouts, sheet));
	};

	const onDuplicate = () => { console.log("duplicate"); };
	const onDelete = () => { console.log("delete"); };

	const actions = [
		<IconButton key="share" icon="/img/copy.svg" onClick={onShare}></IconButton>,
		<IconButton key="duplicate" icon="/img/duplicate.svg" onClick={onDuplicate}></IconButton>,
		<IconButton key="delete" icon="/img/bin.svg" onClick={onDelete}></IconButton>
	];

	return <SheetCard sheet={sheet} actions={actions} onOpen={onOpen}></SheetCard>
}