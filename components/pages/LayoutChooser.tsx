import { useContext, useState } from "react";
import styles from '../../styles/LayoutChooser.module.scss';
import { DataContext } from "../contexts/DataContext";

const LayoutChooser: React.FC<{}> = (props) => {
	const dataContext = useContext(DataContext);
	const [layout, setLayout] = useState<number>(0);

	return <div className={styles.layoutChooser}>
		<h1>Choose a layout</h1>
		<select className={styles.layouts} onChange={e => setLayout(Number(e.target.value))}>
			{
				dataContext.data.ready && dataContext.data.layouts.map((v, i) =>
					<option key={i} value={i} defaultChecked={i == 0}>{v.label}</option>
				)
			}
		</select>
		<button onClick={_ => dataContext.data.ready
			&& dataContext.fn.setSheet({
				...dataContext.data.sheet,
				type: dataContext.data.layouts[layout].type,
				key: dataContext.data.layouts[layout].key,
				layout: dataContext.data.layouts[layout].label,
				meter: "4/4",
				chords: [],
				title: "",
			})}>Next</button>
	</div >
}

export { LayoutChooser };