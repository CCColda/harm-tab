import Head from 'next/head'
import React, { } from 'react';

import { ToneProvider } from '../components/contexts/ToneContext';
import { DataContextProvider } from '../components/contexts/DataContext';

import { LayoutChooser } from '../components/pages/LayoutChooser';
import { Editor } from '../components/pages/Editor';
import { LayoutFallback } from '../components/controls/LayoutFallback';
import { URLSuspense } from '../components/controls/URLSuspense';
import { LayoutSuspense } from '../components/controls/LayoutSuspense';

export default function Home() {
  return <>
    <Head>
      <title>Harm-tab</title>
    </Head>
    <ToneProvider>
      <DataContextProvider>
        <URLSuspense>
          <LayoutSuspense layoutPath='layouts.json'>
            <LayoutFallback fallback={<LayoutChooser />}>
              <Editor />
            </LayoutFallback>

          </LayoutSuspense>
        </URLSuspense>
      </DataContextProvider>
    </ToneProvider>
  </>
}
