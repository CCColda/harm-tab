import { useState } from "react";
import useEventListener from "../../data/useEventListener";

import styles from "../../styles/FullscreenToggle.module.scss";

type FullscreenToggleProps = {
	editorRef: React.MutableRefObject<HTMLDivElement>,
}

const FullscreenToggle: React.FC<FullscreenToggleProps> = ({ editorRef }) => {
	const [isFullscreen, setIsFullscreen] = useState(false);

	useEventListener(
		editorRef.current,
		'onfullscreenchange',
		_ev => editorRef && setIsFullscreen(!!document.fullscreenElement),
		[editorRef]
	);

	const toggleFullscreen = async () => {
		if (isFullscreen && document.fullscreenElement) {
			await document.exitFullscreen();

			setIsFullscreen(false);
		}
		else {
			await editorRef.current?.requestFullscreen({ navigationUI: 'auto' });
			setIsFullscreen(true);
		}
	};

	return <button onClick={toggleFullscreen} className={styles.fullscreenToggle}></button>;
};

export { FullscreenToggle };