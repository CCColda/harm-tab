import { useState } from "react";
import { IconButton } from "./IconButton";

import useEventListener from "../data/useEventListener";

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

	return <IconButton icon="./img/fullscreen.svg" onClick={toggleFullscreen} />;
};

export { FullscreenToggle };