import React from 'react';
import { useSelector } from 'react-redux';

import { ToneProvider } from '../components/ToneContext';
import { URLSuspense } from '../components/URLSuspense';
import { Editor } from '../components/Editor';

export default function EditorPage() {
	return <ToneProvider>
		<URLSuspense>
			<Editor />
		</URLSuspense>
	</ToneProvider>
}
