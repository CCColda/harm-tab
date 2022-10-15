import { FC } from "react";

import styles from "../../styles/ThreeDotMenu.module.scss";

export type ThreeDotMenuProps = {

};

const ThreeDotMenu: FC<ThreeDotMenuProps> = (props) => {
    return <div className={styles.threeDotMenu}>
        <button className={styles.button}>
            <div></div>
            <div></div>
            <div></div>
        </button>
        <div className={styles.list}>

        </div>
    </div>
};

export { ThreeDotMenu };