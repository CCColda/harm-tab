import { useContext } from "react";

import styles from "../../styles/MetreField.module.scss";

import { DataContext } from "../contexts/DataContext";

const AVAILABLE_METRES = Object.freeze([
	"4/4", "2/4", "3/4", "6/8", "9/8", "12/8",
]);

export type MetreFieldProps = {
	brief: string
}

const MetreField: React.FC<MetreFieldProps> = (props) => {
	const dataContext = useContext(DataContext);

	return <span className={styles.metreField}>
		<span className={styles.brief}>{props.brief}</span>
		<select onChange={e => dataContext.fn.saved.modifySheet(sheet => ({ ...sheet, metre: e.target.value }))} defaultValue={dataContext.data.saved.sheet.metre}>
			{AVAILABLE_METRES.map((v, i) =>
				<option key={i} value={v}>{v}</option>
			)}
		</select>
	</span>
};

export { MetreField };