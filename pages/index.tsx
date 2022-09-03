import Head from 'next/head'

import { FC, useContext, useState } from 'react';
import { DataContext, DataContextProvider } from '../components/DataContext';
import { DiatonicHarmonica } from '../components/DiatonicHarmonica';
import MusicSheet from '../components/MusicSheet'
import { FormatBend, FormatHole } from '../data/DiatonicHarmonica';
import { ToneContext, ToneProvider } from '../components/ToneContext';
import { Play } from '../data/MusicPlayer';
import { MusicControl } from '../components/MusicControl';

import styles from './index.module.scss'
import { ThreeDotMenu } from '../components/ThreeDotMenu';
import { renderAbc } from 'abcjs';
import { AbcVisualParams } from 'abcjs';
import { MusicalElements } from '../components/MusicalElements';
import { NoteLengths } from '../components/NoteLengths';

const Editor: FC<{}> = (props) => {
  const dataContext = useContext(DataContext);
  const Tone = useContext(ToneContext);

  const [noteLength, setNoteLength] = useState("8");

  console.log(dataContext.fn.getABC());

  return <div className={styles.editor}>
    <header>
      <MusicControl onPlay={_ => Play(Tone, dataContext.data.sheet.notes, dataContext.data.sheet.durations)} />
      <ThreeDotMenu />
    </header>
    <main>
      <MusicSheet abc={dataContext.fn.getABC(16)} options={{ initialClef: true }} />
    </main>
    <footer>
      <div className={styles.harmonicapanel}>
        <span className={styles.music}>
          <MusicalElements />
          <NoteLengths />
        </span>
        <DiatonicHarmonica
          layout={(dataContext.data.layouts[0] as any)?.layout}
          onSelectSound={x => dataContext.fn.addNote(x.note, FormatBend(x.dir, x.bend) + FormatHole(x.dir, x.position), noteLength)}
        />
      </div>
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
