import { useState } from "react";
import styles from "./index.module.scss";

//Mock
import data from "@/mock/data.json";

//Component
import Card from "../card";

const PortList = () => {
	const ports = [
		"Favignana",
		"Lipari",
		"Palermo",
		"San Vito lo Capo",
		"Marsala",
		"Lampedusa",
		"Pantelleria",
		"Salina",
		"Ustica",
	];

	return (
		<div className={styles.PortList}>
			{ports.map((port, i) => (
				<div className={styles.PortList__list} key={i}>
					<h2 className={styles.PortList__list__title}>{port}</h2>
					{data
						.filter((obj) => obj.departure.Port === port)
						.map((obj) => (
							<Card data={obj} key={obj.id} />
						))}
				</div>
			))}
		</div>
	);
};

export default PortList;
