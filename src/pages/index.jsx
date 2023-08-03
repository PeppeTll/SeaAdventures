import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.scss";

//Image
import hero from "@/assets/images/hero.jpeg";
import banner from "@/assets/images/banner.jpeg";

//components
import Header from "@/components/header";

export default function Home() {
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
			</main>
		</>
	);
}
