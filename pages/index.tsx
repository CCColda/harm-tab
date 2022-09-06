import Head from 'next/head'
import React, { FC, ReactNode, useContext, useRef, useState } from 'react';
import { Play } from '../data/MusicPlayer';

import useEventListener from '../data/useEventListener';

import {
  DataContext,
  DataContextProvider,
  MusicSheet,
  ToneContext, ToneProvider,
  ThreeDotMenu,
  MusicalElements,
  NoteLengths,
  DiatonicHarmonica,
  MusicControl
} from '../components/index';

import styles from '../styles/index.module.scss'
import { serializeDataContextData } from '../data/Serializer';
import { abcFromDiatonicSheet, addDiatonicNote } from '../data/Sheet';
import { Loading } from '../components/Loading';
import { LayoutChooser } from '../components/LayoutChooser';
import { DataContext as DCT } from '../types/DataContext';

const Editor: FC<{}> = (props) => {
  const dataContext = useContext(DataContext);
  const Tone = useContext(ToneContext);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [sheetWidth, setSheetWidth] = useState(0);
  const mainRef = useRef<HTMLDivElement | null>(null);
  const editorRef = useRef<HTMLDivElement | null>(null);

  useEventListener(
    window,
    'resize',
    _ev => mainRef && setSheetWidth(mainRef.current.getBoundingClientRect().width),
    [mainRef]
  );

  useEventListener(
    editorRef.current,
    'onfullscreenchange',
    _ev => editorRef && setIsFullscreen(!!document.fullscreenElement),
    [editorRef]
  );

  const toggleFullscreen = () => {
    if (isFullscreen)
      document.exitFullscreen().then(() => setIsFullscreen(false));
    else
      editorRef.current?.requestFullscreen({ navigationUI: 'auto' }).then(() => setIsFullscreen(true));
  };

  return dataContext.data.ready && <div ref={editorRef} className={styles.editor}>
    <header>
      {/* <button onClick={_ => Save("output", JSON.stringify(dataContext.data.sheet))}>save</button>
      <button onClick={_ => dataContext.fn.setSheet(Load("output") as DataContextData["sheet"])}>load</button> */}
      <button onClick={v => window.open("?" + serializeDataContextData(dataContext.data))}>print</button>
      <button onClick={toggleFullscreen}>fullscreen</button>
      <MusicControl onPlay={_ => dataContext.data.ready
        && dataContext.data.sheet.type == "diatonic"
        && Play(Tone, dataContext.data.sheet.notes.map(v => v.note), dataContext.data.sheet.notes.map(v => v.duration))} />
      <ThreeDotMenu />
    </header>
    <main>
      <div className={styles.sheetWrapper} ref={mainRef}>
        <MusicSheet abc={
          (dataContext.data.ready
            && dataContext.data.sheet.type == "diatonic"
            && abcFromDiatonicSheet(dataContext.data.sheet, 8))
          || ""
        } options={{
          initialClef: true,
          staffwidth: sheetWidth,
          wrap: {
            minSpacing: 1.5,
            maxSpacing: 2,
            preferredMeasuresPerLine: 4
          }
        }} />
      </div>
    </main>
    <footer>
      <span className={styles.harmonicaWrapper}>
        <DiatonicHarmonica
          layout={dataContext.data.layouts.find(v => v.label == (dataContext.data.ready && dataContext.data.sheet.layout)).layout}
          onSelectSound={x => dataContext.data.ready && dataContext.fn.setSheet(addDiatonicNote(dataContext.data.sheet as DCT.BaseSheet & DCT.DiatonicSheet, x, dataContext.data.noteLength))}
        />
      </span>

      <span className={styles.music}>
        <NoteLengths />
        <MusicalElements />
      </span>
    </footer>
  </div >
};

const LayoutFallback: React.FC<React.PropsWithChildren<{ fallback: ReactNode }>> = (props) => {
  const dataContext = useContext(DataContext);

  return <>
    {
      (
        dataContext.data.ready
        && dataContext.data.sheet.type != "unset"
        && dataContext.data.layouts.some(
          v => v.label == (dataContext.data.ready && dataContext.data.sheet.layout)
        )
      )

        ? props.children
        : props.fallback
    }
  </>
}


export default function Home() {
  return (
    <ToneProvider fallback={<Loading />}>
      <DataContextProvider layoutPath='layouts.json'>
        <Head>
          <title>Harm-tab</title>
        </Head>

        <LayoutFallback fallback={<LayoutChooser />}>
          <Editor />
        </LayoutFallback>

      </DataContextProvider>
    </ToneProvider>
  )
}
