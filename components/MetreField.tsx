import { useContext } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

import styles from "../styles/MetreField.module.scss";

const AVAILABLE_METRES = Object.freeze([
	"4/4", "2/4", "3/4", "6/8", "9/8", "12/8",
]);

export type MetreFieldProps = {
	brief: string,
	readonly?: boolean,
}

const MetreField: React.FC<MetreFieldProps> = (props) => {
	const metre = useSelector<RootState, string>(state => state.sheet.value.metre);
	const dispatch = useDispatch();

	const displayedMetres = props.readonly ? [metre] : AVAILABLE_METRES;

	return <span className={styles.metreField}>
		<span className={styles.brief}>{props.brief}</span>
		<select
			onChange={props.readonly
				? () => { }
				: e => dispatch({ type: "sheet/setMetre", payload: e.target.value })
			}
			defaultValue={metre}>{
				displayedMetres.map((v, i) =>
					<option key={i} value={v}>{v}</option>
				)
			}</select>
	</span >
};

export { MetreField };