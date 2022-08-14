import Head from 'next/head'
import { FC, useContext, useState } from 'react';
import { DataContext, DataContextProvider } from '../components/DataContext';
import { DiatonicHarmonica } from '../components/DiatonicHarmonica';
import MusicSheet from '../components/MusicSheet'
import { FormatBend, FormatHole } from '../data/DiatonicHarmonica';
import { FormatABCNote } from '../data/MusicNote';
import styles from './index.module.scss'

const Editor: FC<{}> = (props) => {
  const dataContext = useContext(DataContext);
  const [noteLength, setNoteLength] = useState("1");

  return <>
    <p>{dataContext.fn.getABC()}</p>
    <MusicSheet abc={dataContext.fn.getABC()} />
    <div className={styles.harmonicapanel}>
      <DiatonicHarmonica
        layout={(dataContext.data.layouts[0] as any)?.layout}
        onClick={(x) => dataContext.fn.addNote(x.note, FormatBend(x.dir, x.bend) + FormatHole(x.dir, x.position), noteLength)}
      />
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
          <input type="radio" name="notelength" value="1/16" />
          <span>𝅘𝅥𝅲 1/128</span>
        </label>
        <label>
          <input type="radio" name="notelength" value="1/8" />
          <span>𝅘𝅥𝅱 1/64</span>
        </label>
        <label>
          <input type="radio" name="notelength" value="1/4" />
          <span>𝅘𝅥𝅰 1/32</span>
        </label>
        <label>
          <input type="radio" name="notelength" value="1/2" />
          <span>𝅘𝅥𝅯 1/16</span>
        </label>
        <label>
          <input type="radio" name="notelength" value="1" defaultChecked />
          <span>𝅘𝅥𝅮 1/8</span>
        </label>
        <label>
          <input type="radio" name="notelength" value="2" />
          <span>𝅘𝅥 1/4</span>
        </label>
        <label>
          <input type="radio" name="notelength" value="4" />
          <span>𝅗𝅥 1/2</span>
        </label>
        <label>
          <input type="radio" name="notelength" value="8" />
          <span>𝅝 1/1</span>
        </label>
      </div>
    </div>
  </>
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Harm-tab</title>
      </Head>

      <main>
        <DataContextProvider layoutPath='layouts.json'>
          <Editor />
        </DataContextProvider>
      </main>
    </div>
  )
}
