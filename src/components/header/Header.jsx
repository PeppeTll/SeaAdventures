import Image from "next/image";
import styles from "./index.module.scss";

//Image
import logo from "@/assets/images/logo.svg";

const Header = () => {
	return (
		<div className={styles.Header}>
			<Image src={logo} alt={"logo"} width={50} height={50} />
		</div>
	);
};

export default Header;
