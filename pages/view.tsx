import React from 'react';

import { ToneProvider } from '../components/ToneContext';
import { URLSuspense } from '../components/URLSuspense';
import { Editor } from '../components/Editor';

export default function ViewPage() {
	return <ToneProvider>
		<URLSuspense>
			<Editor readonly />
		</URLSuspense>
	</ToneProvider>
}
