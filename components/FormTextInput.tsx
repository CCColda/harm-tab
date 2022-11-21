import { ChangeEventHandler, useId } from "react";
import styles from "../styles/FormTextInput.module.scss";

export type FormTextInputProps = {
	brief: string,
	onChange: ChangeEventHandler<HTMLInputElement>,
	placeholder?: string,
	default?: string,
}

export const FormTextInput: React.FC<FormTextInputProps> = props => {
	const id = useId();

	return <label htmlFor={id} className={styles.formTextInput}>
		<span>{props.brief}</span>
		<input
			id={id}
			placeholder={props.placeholder ?? ""}
			defaultValue={props.default ?? ""}
			onChange={props.onChange}></input>
	</label>
}