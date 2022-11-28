import React, { useEffect, useRef, useState } from 'react';
import { DynamicSheetCard } from '../components/DynamicSheetCard';
import { LayoutSuspense } from '../components/LayoutSuspense';
import { MusicSheet } from '../components/MusicSheet';
import { SheetCard } from '../components/SheetCard';
import { DiatonicSheet } from '../data/Sheet';
import useEventListener from '../data/useEventListener';

import { DataSheets } from '../types/Data';
import { DiaHarm } from '../types/Harmonica';

const testABC = `
X: 1
M: 4/4
L: 1/8
K: Gmin
[gd_BG]2 [gG]2 G2 D_E- |
`;


export default function Home() {
	const sampleSheet: DataSheets.DiatonicSheet & DataSheets.BaseSheet = {
		type: 'diatonic',
		title: 'blbl',
		metre: '4/4',
		key: '',
		chords: [
			{
				type: 'silence',
				duration: '48'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 1,
						note: 'C'
					}
				],
				duration: '8'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'in',
						position: 1,
						note: 'D'
					}
				],
				duration: '8'
			},
			{
				type: 'bar'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 2,
						note: 'E'
					}
				],
				duration: '16'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 2,
						note: 'E'
					}
				],
				duration: '16'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 2,
						note: 'E'
					}
				],
				duration: '16'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 2,
						dir: 'in',
						position: 2,
						note: 'F'
					}
				],
				duration: '8'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 2,
						note: 'E'
					}
				],
				duration: '8'
			},
			{
				type: 'bar'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'in',
						position: 1,
						note: 'D'
					}
				],
				duration: '16'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'in',
						position: 1,
						note: 'D'
					}
				],
				duration: '16'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'in',
						position: 1,
						note: 'D'
					}
				],
				duration: '16'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 2,
						note: 'E'
					}
				],
				duration: '16'
			},
			{
				type: 'bar'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 2,
						dir: 'in',
						position: 2,
						note: 'F'
					}
				],
				duration: '16'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 2,
						note: 'E'
					}
				],
				duration: '8'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'in',
						position: 1,
						note: 'D'
					}
				],
				duration: '8'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 2,
						note: 'E'
					}
				],
				duration: '16'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'in',
						position: 1,
						note: 'D'
					}
				],
				duration: '8'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 1,
						note: 'C'
					}
				],
				duration: '8'
			},
			{
				type: 'bar'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 1,
						note: 'C'
					}
				],
				duration: '32'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 1,
						note: 'C'
					}
				],
				duration: '8'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'in',
						position: 1,
						note: 'D'
					}
				],
				duration: '8'
			},
			{
				type: 'bar'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 2,
						note: 'E'
					}
				],
				duration: '16'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 2,
						note: 'E'
					}
				],
				duration: '16'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 2,
						note: 'E'
					}
				],
				duration: '16'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 2,
						dir: 'in',
						position: 2,
						note: 'F'
					}
				],
				duration: '8'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 2,
						note: 'E'
					}
				],
				duration: '8'
			},
			{
				type: 'bar'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'in',
						position: 1,
						note: 'D'
					}
				],
				duration: '16'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'in',
						position: 1,
						note: 'D'
					}
				],
				duration: '16'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'in',
						position: 1,
						note: 'D'
					}
				],
				duration: '16'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 2,
						note: 'E'
					}
				],
				duration: '16'
			},
			{
				type: 'bar'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 2,
						dir: 'in',
						position: 2,
						note: 'F'
					}
				],
				duration: '16'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 2,
						note: 'E'
					}
				],
				duration: '8'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'in',
						position: 1,
						note: 'D'
					}
				],
				duration: '8'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 2,
						note: 'E'
					}
				],
				duration: '16'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'in',
						position: 1,
						note: 'D'
					}
				],
				duration: '8'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 1,
						note: 'C'
					}
				],
				duration: '8'
			},
			{
				type: 'bar'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 1,
						note: 'C'
					}
				],
				duration: '48'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 3,
						note: 'G'
					}
				],
				duration: '16'
			},
			{
				type: 'bar'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 4,
						note: 'C\''
					}
				],
				duration: '16'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 3,
						note: 'G'
					}
				],
				duration: '16'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 3,
						note: 'G'
					}
				],
				duration: '16'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 3,
						note: 'G'
					}
				],
				duration: '16'
			},
			{
				type: 'bar'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 2,
						dir: 'in',
						position: 3,
						note: 'A'
					}
				],
				duration: '16'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 3,
						note: 'G'
					}
				],
				duration: '16'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 3,
						note: 'G'
					}
				],
				duration: '16'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 3,
						note: 'G'
					}
				],
				duration: '16'
			},
			{
				type: 'bar'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 3,
						note: 'G'
					}
				],
				duration: '16'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 2,
						dir: 'in',
						position: 2,
						note: 'F'
					}
				],
				duration: '8'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 3,
						note: 'G'
					}
				],
				duration: '8'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 2,
						dir: 'in',
						position: 3,
						note: 'A'
					}
				],
				duration: '8'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 3,
						note: 'G'
					}
				],
				duration: '8'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 2,
						dir: 'in',
						position: 2,
						note: 'F'
					}
				],
				duration: '8'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 2,
						note: 'E'
					}
				],
				duration: '8'
			},
			{
				type: 'bar'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'in',
						position: 1,
						note: 'D'
					}
				],
				duration: '48'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 1,
						note: 'C'
					}
				],
				duration: '8'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'in',
						position: 1,
						note: 'D'
					}
				],
				duration: '8'
			},
			{
				type: 'bar'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 2,
						note: 'E'
					}
				],
				duration: '16'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 2,
						note: 'E'
					}
				],
				duration: '8'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'in',
						position: 1,
						note: 'D'
					}
				],
				duration: '8'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 2,
						note: 'E'
					}
				],
				duration: '8'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'in',
						position: 1,
						note: 'D'
					}
				],
				duration: '8'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 2,
						note: 'E'
					}
				],
				duration: '8'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 1,
						note: 'C'
					}
				],
				duration: '8'
			},
			{
				type: 'bar'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'in',
						position: 1,
						note: 'D'
					}
				],
				duration: '16'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'in',
						position: 1,
						note: 'D'
					}
				],
				duration: '8'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 2,
						note: 'E'
					}
				],
				duration: '8'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'in',
						position: 1,
						note: 'D'
					}
				],
				duration: '16'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 2,
						note: 'E'
					}
				],
				duration: '16'
			},
			{
				type: 'bar'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 2,
						dir: 'in',
						position: 2,
						note: 'F'
					}
				],
				duration: '16'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 2,
						note: 'E'
					}
				],
				duration: '8'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'in',
						position: 1,
						note: 'D'
					}
				],
				duration: '8'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 2,
						note: 'E'
					}
				],
				duration: '16'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'in',
						position: 1,
						note: 'D'
					}
				],
				duration: '8'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 1,
						note: 'C'
					}
				],
				duration: '8'
			},
			{
				type: 'bar'
			},
			{
				type: 'chord',
				notes: [
					{
						bend: 0,
						dir: 'out',
						position: 1,
						note: 'C'
					}
				],
				duration: '48'
			},
			{
				type: 'silence',
				duration: '16'
			},
			{
				type: 'bar'
			}
		],
		layout: 'Diatonic C Harmonica'
	};

	return <>
		<LayoutSuspense layoutPath='/layouts.json'>
			<DynamicSheetCard sheet={sampleSheet}></DynamicSheetCard>
			<DynamicSheetCard sheet={sampleSheet}></DynamicSheetCard>
		</LayoutSuspense>
	</>
}
