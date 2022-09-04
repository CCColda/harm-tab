import Head from 'next/head'
import { FC, useContext, useRef, useState } from 'react';
import { renderAbc } from 'abcjs';

import { Play } from '../data/MusicPlayer';
import { FormatBend, FormatHole } from '../data/DiatonicHarmonica';
import useEventListener from '../data/useEventListener';

import {
  DataContext, DataContextProvider,
  DiatonicHarmonica,
  MusicSheet,
  ToneContext, ToneProvider,
  MusicControl,
  ThreeDotMenu,
  MusicalElements,
  NoteLengths
} from '../components/index';

import styles from '../styles/index.module.scss'

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

  return <div ref={editorRef} className={styles.editor}>
    <header>
      {/* <button onClick={_ => Save("output", JSON.stringify(dataContext.data.sheet))}>save</button>
      <button onClick={_ => dataContext.fn.setSheet(Load("output") as DataContextData["sheet"])}>load</button> */}
      <button onClick={toggleFullscreen}>fullscreen</button>
      <MusicControl onPlay={_ => Play(Tone, dataContext.data.sheet.notes, dataContext.data.sheet.durations)} />
      <ThreeDotMenu />
    </header>
    <main>
      <div className={styles.sheetWrapper} ref={mainRef}>
        <MusicSheet abc={dataContext.fn.getABC(16)} options={{
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
          layout={(dataContext.data.layouts[0] as any)?.layout}
          onSelectSound={x => dataContext.fn.addNote(x.note, FormatBend(x.dir, x.bend) + FormatHole(x.dir, x.position), dataContext.data.noteLength)}
        />
      </span>

      <span className={styles.music}>
        <NoteLengths />
        <MusicalElements />
      </span>
    </footer>
  </div >
};

export default function Home() {
  return (
    <ToneProvider fallback={"loading..."}>
      <DataContextProvider layoutPath='layouts.json'>
        <Head>
          <title>Harm-tab</title>
        </Head>

        <Editor />
      </DataContextProvider>
    </ToneProvider>
  )
}
