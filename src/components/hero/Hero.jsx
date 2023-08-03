import Image from "next/image";
import styles from "./index.module.scss";

const Hero = ({ img, text }) => {
	return (
		<div className={styles.Hero}>
			<Image src={img} alt={"hero"} className={styles.Hero_image} />
			<h2 className={styles.Hero_title}>{text}</h2>
		</div>
	);
};

export default Hero;
