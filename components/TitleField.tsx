import { useContext } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

import styles from "../styles/TitleField.module.scss";

export type TitleFieldProps = {
	brief: string,
	placeholder?: string,
	readonly?: boolean,
}

const TitleField: React.FC<TitleFieldProps> = (props) => {
	const title = useSelector<RootState, string>(state => state.sheet.value.title);
	const dispatch = useDispatch();

	return <span className={styles.titleField}>
		<span className={styles.brief}>{props.brief}</span>
		<input
			placeholder={props.placeholder ?? props.brief + "..."}
			type="text"
			onChange={props.readonly
				? () => { }
				: ev =>
					dispatch({ type: "sheet/setTitle", payload: ev.target.value })
			}
			readOnly={!!props.readonly}
			defaultValue={title}>

		</input>
	</span >
};

export { TitleField };