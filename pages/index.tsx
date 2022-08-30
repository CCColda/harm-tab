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

const Editor: FC<{}> = (props) => {
  const dataContext = useContext(DataContext);
  const Tone = useContext(ToneContext);

  const [noteLength, setNoteLength] = useState("8");

  console.log(dataContext.fn.getABC());

  return <div className={styles.editor}>
  <header>
    <MusicControl onPlay={_ => Play(Tone, dataContext.data.sheet.notes, dataContext.data.sheet.durations)}/>
    <ThreeDotMenu />
  </header>
  <main>
    <MusicSheet abc={dataContext.fn.getABC(16)} options={{initialClef: true}}/>
  </main>
  <footer>
    <div className={styles.harmonicapanel}>
      <div
        className={`${styles.panel}`}
      >
        <button onClick={_ => dataContext.fn.popNote()}>⇤ delete</button>
        <button onClick={_ => dataContext.fn.addNote("z", "", noteLength)}>𝄽 silence</button>
        <button onClick={_ => dataContext.fn.addNote("|", "|", "")}>| bar</button>
      </div>
      <div
        className={`${styles.panel}`}
        onChange={ev => setNoteLength((ev.target as HTMLInputElement).value)}
      >
        <label>
          <input type="radio" name="notelength" value="1" />
          <span>𝅘𝅥𝅱 1/64</span>
        </label>
        <label>
          <input type="radio" name="notelength" value="2" />
          <span>𝅘𝅥𝅰 1/32</span>
        </label>
        <label>
          <input type="radio" name="notelength" value="4" />
          <span>𝅘𝅥𝅯 1/16</span>
        </label>
        <label>
          <input type="radio" name="notelength" value="8" defaultChecked />
          <span>𝅘𝅥𝅮 1/8</span>
        </label>
        <label>
          <input type="radio" name="notelength" value="16" />
          <span>𝅘𝅥 1/4</span>
        </label>
        <label>
          <input type="radio" name="notelength" value="24" />
          <span>𝅘𝅥. 3/8</span>
        </label>
        <label>
          <input type="radio" name="notelength" value="32" />
          <span>𝅗𝅥 1/2</span>
        </label>
        <label>
          <input type="radio" name="notelength" value="48" />
          <span>𝅗𝅥. 3/4</span>
        </label>
        <label>
          <input type="radio" name="notelength" value="64" />
          <span>𝅝 1/1</span>
        </label>
        <label>
          <input type="radio" name="notelength" value="96" />
          <span>𝅝. 3/2</span>
        </label>
      </div>
      <span className={styles.diatonicHarmonica}>
        <DiatonicHarmonica
          layout={(dataContext.data.layouts[0] as any)?.layout}
          onSelectSound={x => dataContext.fn.addNote(x.note, FormatBend(x.dir, x.bend) + FormatHole(x.dir, x.position), noteLength)}
        />
      </span>
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
