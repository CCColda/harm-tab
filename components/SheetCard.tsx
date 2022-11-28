import { MouseEventHandler, TouchEventHandler, useEffect, useRef, useState } from "react";
import { DiatonicSheet } from "../data/Sheet";
import useEventListener from "../data/useEventListener";

import styles from "../styles/SheetCard.module.scss";
import { DataSheets } from "../types/Data";
import { IconButton } from "./IconButton";
import { MusicSheet } from "./MusicSheet";

const X_MARGIN = 10;

export type SheetCardProps = {
	sheet: DataSheets.Sheet,
	actions: React.ReactNode[],
	onOpen?: () => void,
}

export const SheetCard: React.FC<SheetCardProps> = ({ sheet, actions, onOpen }) => {
	const previewRef = useRef<HTMLDivElement>();
	const [previewWidth, setPreviewWidth] = useState(100);

	useEffect(() => {
		const clientRect = previewRef.current?.getBoundingClientRect();
		if (clientRect)
			setPreviewWidth(clientRect.width);
	}, []);

	useEventListener(previewRef.current, "onresize", (ev) => {
		const clientRect = previewRef.current?.getBoundingClientRect();
		if (clientRect)
			setPreviewWidth(clientRect.width);
	});

	return <div className={styles.sheetCard}>
		<div className={styles.card}>
			<div>
				<span className={styles.title}>{sheet.title}</span>
			</div>
			<div className={styles.preview} ref={previewRef}>{
				sheet.type == "diatonic" &&
				<MusicSheet abc={DiatonicSheet.toPreviewABC(sheet, 2)} options={{
					staffwidth: previewWidth - X_MARGIN,
					selectTypes: []
				}} />
			}
			</div>
			<div>
				<span className={styles.harmonica}>{sheet.layout}</span>
			</div>
		</div>
		<div className={styles.open}>
			<IconButton icon="/img/8n.svg" onClick={onOpen}></IconButton>
		</div>
		<div className={styles.activities}>
			{actions}
		</div>
	</div>
}