import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import { useState } from "react";

//Image
import hero from "@/assets/images/hero.jpeg";
import banner from "@/assets/images/banner.jpeg";

//components
import Header from "@/components/header";
import Hero from "@/components/hero";
import CardList from "@/components/cardList";
import Footer from "@/components/footer";
import RandomList from "@/components/ramdomList";
import PortList from "@/components/portList";

export default function Home() {
	const [value, setValue] = useState("tutti");

	const onHandleSelect = (e) => {
		setValue(e.target.value);
	};
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className={styles.main}>
				<Header />
				<Hero src={hero} text={"Lorem ipsum dolor sit amet"} />
				<div className={styles.main__select}>
					<select
						className={styles.main__select__style}
						onChange={onHandleSelect}
						value={value}
					>
						<option value="tutti">Tutti</option>
						<option value="porto">Mostra per porto di partenza</option>
					</select>
				</div>
				{value === "tutti" ? <CardList /> : <PortList />}
				<Hero
					src={banner}
					text={`+20  Destinazioni +15 Imbarcazioni +40 Itinerari`}
				/>
				<RandomList />
				<Footer />
			</main>
		</>
	);
}
