import Head from 'next/head'
import React from 'react';

import { LayoutChooser } from '../components/pages/LayoutChooser';
import { DataContextProvider, LayoutFallback, Loading, ToneProvider } from '../components/index';
import { Editor } from '../components/pages/Editor';
import { useRouter } from '../node_modules/next/router';
import { parseDataContextData } from '../data/Serializer';

export default function Home() {
  const router = useRouter();

  const parsedLayout = parseDataContextData(router.asPath.slice(2));

  return <>
    <Head>
      <title>Harm-tab</title>
    </Head>

    <ToneProvider fallback={<Loading />}>
      <DataContextProvider layoutPath='layouts.json' preparsedData={parsedLayout}>
        <div style={{ color: "white", background: "black", fontFamily: "monospace", opacity: "75%", position: "fixed", top: 0, left: 0, right: "50%", zIndex: "5" }}>
          <p >
            {router.asPath.slice(2)}
            {/* {Object.entries(router.query).map(v => v.join(" ")).join(";")} */}
          </p>
          <p>
            {JSON.stringify()}
          </p>
        </div>

        <LayoutFallback fallback={<LayoutChooser />}>
          <Editor />
        </LayoutFallback>

      </DataContextProvider>
    </ToneProvider>
  </>
}
