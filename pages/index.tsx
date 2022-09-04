import Head from 'next/head'
import { FC, useContext, useEffect, useRef, useState } from 'react';
import { renderAbc } from 'abcjs';

import { DataContext, DataContextProvider } from '../components/DataContext';
import { DiatonicHarmonica } from '../components/DiatonicHarmonica';
import MusicSheet from '../components/MusicSheet'
import { FormatBend, FormatHole } from '../data/DiatonicHarmonica';
import { ToneContext, ToneProvider } from '../components/ToneContext';
import { Play } from '../data/MusicPlayer';
import { MusicControl } from '../components/MusicControl';

import { ThreeDotMenu } from '../components/ThreeDotMenu';
import { MusicalElements } from '../components/MusicalElements';
import { NoteLengths } from '../components/NoteLengths';

import styles from './index.module.scss'

const Editor: FC<{}> = (props) => {
  const dataContext = useContext(DataContext);
  const Tone = useContext(ToneContext);

  const [sheetWidth, setSheetWidth] = useState(0);
  const mainRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (mainRef) {
      const resizeHandler = _ev =>
        setSheetWidth(mainRef.current.getBoundingClientRect().width);

      window.addEventListener('resize', resizeHandler);

      return () => window.removeEventListener('resize', resizeHandler);
    }
  }, [mainRef]);

  console.log(dataContext.fn.getABC());

  return <div className={styles.editor}>
    <header>
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
  </div>
};

renderAbc

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
