import styles from "./MusicControl.module.scss";
import { FC } from "react";

export type MusicControlProps = {
    onPlay?: CallableFunction,
    onStop?: CallableFunction,
}

const MusicControl: FC<MusicControlProps> = (props) => {
    return <div
        className={styles.musicControl}
        onChange={e => {switch ((e.currentTarget as HTMLInputElement).value) {
            case "play":
                if (props.onPlay) props.onPlay();
                break;
            case "stop":
                if (props.onStop) props.onStop();
                break;
        }}}>
        <label className={styles.play}>
            <input type="radio" name="musiccontrol" value="play"></input>
            <span></span>
        </label>
        <label className={styles.stop}>
            <input type="radio" name="musiccontrol" value="stop" defaultChecked></input>
            <span></span>
        </label>
     </div>;
}

export { MusicControl };