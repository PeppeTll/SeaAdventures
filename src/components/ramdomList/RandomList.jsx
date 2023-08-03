import { useEffect, useState } from "react";
import styles from "./index.module.scss";

//Mock
import data from "@/mock/data.json";
import Card from "../card";

const RandomList = () => {
	const [randomList, setRandomList] = useState([]);

	const getRandomList = (data) => {
		const selectedObjects = [];
		const tempList = data.slice();

		while (selectedObjects.length <= 8) {
			const randomIndex = Math.floor(Math.random() * tempList.length);
			const selectedObject = tempList[randomIndex];

			if (!selectedObjects.some((obj) => obj.title === selectedObject.nome)) {
				selectedObjects.push(selectedObject);
			}

			tempList.splice(randomIndex, 1);
		}

		return selectedObjects;
	};

	useEffect(() => {
		const selectedObjects = getRandomList(data);
		setRandomList(selectedObjects);
	}, []);

	return (
		<div className={styles.RandomList}>
			<h3 className={styles.RandomList__title}>AVVENTURE DA SCOPRIRE</h3>
			<div className={styles.RandomList__list}>
				{randomList.map((data) => (
					<Card data={data} key={data.id} />
				))}
			</div>
		</div>
	);
};

export default RandomList;
