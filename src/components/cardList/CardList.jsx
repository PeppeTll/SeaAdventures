import Card from "../card/Card";
import styles from "./index.module.scss";

import data from "@/mock/data.json";

const CardList = () => {
	return (
		<div className={styles.CardList}>
			{data.map((data) => (
				<Card data={data} key={data.id} />
			))}
		</div>
	);
};

export default CardList;
