import { FC, useContext, useState } from "react";
import { MusicPlayerData, Play } from "../data/MusicPlayer";

import { ToneContext } from "./ToneContext";

import styles from "../styles/MusicControl.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { Data } from "../types/Data";
import { useDispatch } from "react-redux";

const DEFAULT_CONTROLS =
    Object.freeze({ promise: null as Promise<boolean>, stop: (() => { }) as () => void });

const MusicControl: FC<{}> = _ => {
    const Tone = useContext(ToneContext);
    const sheet = useSelector<RootState, Data["sheet"]>(state => state.sheet.value);
    const dispatch = useDispatch();

    const [controls, setControls] = useState(DEFAULT_CONTROLS);
    const [isPlaying, setIsPlaying] = useState(false);

    const startPlaying = () => {
        if (sheet.type == "diatonic" && !isPlaying) {
            setIsPlaying(true);

            const musicData: MusicPlayerData = {
                chords: sheet.chords.map(chord => {
                    switch (chord.type) {
                        case "bar":
                            return [];
                        case "silence":
                            return ["z"];
                        case "chord":
                            return chord.notes.map(v => v.note);
                    }
                }),
                durations: sheet.chords.map(v => v.type == "bar" ? "" : v.duration),
                chordCallback: idx => dispatch({ type: "indices/setHighlighted", payload: idx })
            };

            const newControls = Play(Tone, musicData);

            newControls.promise?.then(v => {
                setIsPlaying(false);
                dispatch({ type: "indices/resetHighlighted" });
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