import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { DynamicSheetCard } from '../components/DynamicSheetCard';
import { LayoutSuspense } from '../components/LayoutSuspense';
import { MusicSheet } from '../components/MusicSheet';
import { SheetCard } from '../components/SheetCard';
import { SavedSheetSuspense } from '../components/SavedSheetSuspense';
import { DiatonicSheet } from '../data/Sheet';
import useEventListener from '../data/useEventListener';

import { DataSheets } from '../types/Data';
import { DiaHarm } from '../types/Harmonica';
import { SavedSheetSliceType } from '../app/slices/SavedSheetsSlice';

const testABC = `
X: 1
M: 4/4
L: 1/8
K: Gmin
[gd_BG]2 [gG]2 G2 D_E- |
`;


export default function Home() {
	const sheetSelector = useSelector<RootState, SavedSheetSliceType[]>(state => state.savedSheets.value);
	return <>
		<SavedSheetSuspense sheetPath='/sheets.json'>
			{
				sheetSelector
					.filter(v => v.type == "dynamic")
					.map((v, i) =>
						<DynamicSheetCard key={i} sheet={v.sheet} identifier={(v as { identifier: string }).identifier}></DynamicSheetCard>
					)
			}
		</SavedSheetSuspense>
	</>
}
