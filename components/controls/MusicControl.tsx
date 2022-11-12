import { useRef } from "react";
import { FC, useContext, useState } from "react";
import { MusicPlayerData, Play } from "../../data/MusicPlayer";

import styles from "../../styles/MusicControl.module.scss";
import { DataContext, ToneContext } from "../index";

const DEFAULT_CONTROLS =
    Object.freeze({ promise: null as Promise<boolean>, stop: (() => { }) as () => void });

const MusicControl: FC<{}> = _ => {
    const dataContext = useContext(DataContext);
    const Tone = useContext(ToneContext);

    const [controls, setControls] = useState(DEFAULT_CONTROLS);
    const [isPlaying, setIsPlaying] = useState(false);

    const startPlaying = () => {
        if (dataContext.data.ready
            && dataContext.data.sheet.type == "diatonic"
            && !isPlaying) {

            setIsPlaying(true);

            const musicData: MusicPlayerData = {
                chords: dataContext.data.sheet.chords.map(chord => {
                    switch (chord.type) {
                        case "bar":
                            return [];
                        case "silence":
                            return ["z"];
                        case "chord":
                            return chord.notes.map(v => v.note);
                    }
                }),
                durations: dataContext.data.sheet.chords.map(v => v.type == "bar" ? "" : v.duration),
                chordCallback: idx => dataContext.fn.setHighlightedChord(idx)
            };

            const newControls = Play(Tone, musicData);

            newControls.promise?.then(v => {
                setIsPlaying(false);
                dataContext.fn.setHighlightedChord(null);
            });

            setControls(newControls);
        }
    };

    return <div
        className={styles.musicControl + (isPlaying ? " " + styles.playing : "")}
    >
        <button className={styles.play} onClick={_ => { if (Tone) { setIsPlaying(true); startPlaying(); } }}></button>
        <button className={styles.stop} onClick={_ => { if (Tone) { setIsPlaying(false); controls.stop(); } }}></button>
    </div>;
}

export { MusicControl };