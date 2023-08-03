import { useState } from "react";
import Card from "../card/Card";
import styles from "./index.module.scss";

import data from "@/mock/data.json";

const CardList = () => {
	const [step, setStep] = useState(8);

	const onHandleStep = () => {
		setStep((prev) => prev + 8);
	};
	return (
		<div className={styles.CardList}>
			{data.slice(0, step).map((data) => (
				<Card data={data} key={data.id} />
			))}
			{step <= data.length && (
				<button className={styles.CardList__btn} onClick={onHandleStep}>
					MOSTRA ALTRI
				</button>
			)}
		</div>
	);
};

export default CardList;
