import { useState } from "react";
import useEventListener from "../../data/useEventListener";

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

	const toggleFullscreen = () => {
		if (isFullscreen)
			document.exitFullscreen().then(() => setIsFullscreen(false));
		else
			editorRef.current?.requestFullscreen({ navigationUI: 'auto' }).then(() => setIsFullscreen(true));
	};

	return <button onClick={toggleFullscreen}>⛶</button>;
};

export { FullscreenToggle };