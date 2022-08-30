import { renderAbc } from "abcjs";
import { AbcVisualParams } from "abcjs";
import { FC, useEffect, useRef, useState } from "react";

export type MusicSheetProps = {
	abc: string,
	options?: AbcVisualParams
}

const MusicSheet: FC<MusicSheetProps> = (props) => {
	const ref = useRef<HTMLDivElement>(null);
	const [_abcCtrl, setAbcCtrl] = useState(null);

	useEffect(() => {
		if (ref.current) {
			setAbcCtrl(renderAbc(ref.current, props.abc, props.options ?? {}));
		}

		return () => { }
	}, [ref, props.abc, props.options]);

	return <div ref={ref}></div>
};

export default MusicSheet;