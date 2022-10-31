import styles from "../../styles/Loading.module.scss";

const Loading: React.FC<{}> = (props) => {
	return <div className={styles.loading}>
		<div className={styles.animationContainer}>
			<div className={styles.dot + " " + styles.red}></div>
			<div className={styles.dot + " " + styles.red}></div>
			<div className={styles.dot + " " + styles.blue}></div>
			<div className={styles.dot + " " + styles.blue}></div>
		</div>
		<span className={styles.text}>Loading...</span>
	</div>;
}

export { Loading };