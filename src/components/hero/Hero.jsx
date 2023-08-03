import Image from "next/image";
import styles from "./index.module.scss";

const Hero = ({ src, text }) => {
	return (
		<div className={styles.Hero}>
			<Image src={src} alt={"hero"} className={styles.Hero__image} />
			<h1 className={styles.Hero__title}>{text}</h1>
		</div>
	);
};

export default Hero;
