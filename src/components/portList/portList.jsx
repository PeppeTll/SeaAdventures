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

	const [select, setSelect] = useState(ports);

	const onHandleSelect = (e) => {
		switch (e.target.value) {
			case "tutti":
				setSelect(ports);
				break;
			case "Favignana":
				setSelect(["Favignana"]);
				break;
			case "Lipari":
				setSelect(["Lipari"]);
				break;
			case "Palermo":
				setSelect(["Palermo"]);
				break;
			case "San Vito lo Capo":
				setSelect(["San Vito lo Capo"]);
				break;
			case "Marsala":
				setSelect(["Marsala"]);
				break;
			case "Lampedusa":
				setSelect(["Lampedusa"]);
				break;
			case "Pantelleria":
				setSelect(["Pantelleria"]);
				break;
			case "Salina":
				setSelect(["Salina"]);
				break;
			case "Ustica":
				setSelect(["Ustica"]);
				break;
		}
	};

	return (
		<div className={styles.PortList}>
			<select
				className={styles.PortList__select}
				value={select}
				onChange={onHandleSelect}
			>
				<option value="tutti">Tutti</option>
				{ports.map((port, i) => (
					<option value={port} key={i}>
						{port}
					</option>
				))}
			</select>
			{select.map((port, i) => (
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
