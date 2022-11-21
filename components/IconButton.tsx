import { MouseEventHandler } from "react";
import Image from "../node_modules/next/image";

import styles from "../styles/IconButton.module.scss";

type IconButtonProps = {
	onClick: MouseEventHandler<HTMLButtonElement>,
	icon: string
}

const IconButton: React.FC<IconButtonProps> = props => {
	return <button className={styles.iconButton} onClick={props.onClick}>
		<Image src={props.icon} layout={"fill"}></Image>
	</button>
};

export { IconButton };