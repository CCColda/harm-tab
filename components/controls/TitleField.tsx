import { useContext } from "react";

import styles from "../../styles/TitleField.module.scss";

import { DataContext } from "../contexts/DataContext";

export type TitleFieldProps = {
	brief: string,
	placeholder?: string,
}

const TitleField: React.FC<TitleFieldProps> = (props) => {
	const dataContext = useContext(DataContext);

	return <span className={styles.titleField}>
		<span className={styles.brief}>{props.brief}</span>
		<input
			placeholder={props.placeholder ?? props.brief + "..."}
			type="text"
			onChange={ev => {
				dataContext.fn.saved.modifySheet(sheet => ({ ...sheet, title: ev.target.value }))
			}}
			defaultValue={dataContext.data.saved.sheet.title}>

		</input>
	</span>
};

export { TitleField };