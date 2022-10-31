import Head from 'next/head'
import React from 'react';

import { LayoutChooser } from '../components/pages/LayoutChooser';
import { DataContextProvider, LayoutFallback, Loading, ToneProvider } from '../components/index';
import { Editor } from '../components/pages/Editor';
import { useRouter } from '../node_modules/next/router';
import { parseDataContextData } from '../data/Serializer';

export default function Home() {
  const router = useRouter();

  const x = router.asPath.slice(router.asPath.indexOf('?') + 1);

  console.log(x)
  const parsedLayout = parseDataContextData(x);

  return <>
    <Head>
      <title>Harm-tab</title>
    </Head>
    <ToneProvider fallback={<Loading />}>
      <DataContextProvider layoutPath='layouts.json' preparsedData={parsedLayout}>

        <LayoutFallback fallback={<LayoutChooser />}>
          <Editor />
        </LayoutFallback>

      </DataContextProvider>
    </ToneProvider>
  </>
}
