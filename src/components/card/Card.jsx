import Image from "next/image";
import styles from "./index.module.scss";

//Image
import arrow from "@/assets/icons/right-arrow-alt.svg";

const Card = ({ data }) => {
	const reverse = (string) => {
		return string.split("-").reverse().join("-");
	};
	return (
		<div className={styles.Card}>
			<div className={styles.Card__costType}>
				<h4 className={styles.Card__costType__price}>
					{data.budget.value}
					{data.budget.currencyCode}
				</h4>
				<p className={styles.Card__costType__type}>{data.budget.costType}</p>
			</div>
			<h2 className={styles.Card__title}>{data.title}</h2>
			<div className={styles.Card__departure}>
				<div className={styles.Card__departure__left}>
					<p className={styles.Card__departure__left__title}>PARTENZA DA</p>
					<h3 className={styles.Card__departure__left__port}>
						{data.departure.Port}
					</h3>
				</div>
				<div className={styles.Card__departure__right}>
					<h4 className={styles.Card__departure__right__type}>
						{data.boatType}
					</h4>
					<h4 className={styles.Card__departure__right__days}>
						{data.numberOfDays} giorni
					</h4>
				</div>
			</div>
			<div className={styles.Card__date}>
				<div className={styles.Card__date__left}>
					<p className={styles.Card__date__left__departureDate}>
						{reverse(data.departureDate.slice(0, 10))}
					</p>
					<p className={styles.Card__date__left__houre}>
						{data.departureDate.slice(10, 16)}
					</p>
				</div>
				<Image src={arrow} alt={"Right Arrow"} width={30} height={30} />
				<div className={styles.Card__date__right}>
					<p className={styles.Card__date__right__departureDate}>
						{reverse(data.arrivalDate.slice(0, 10))}
					</p>
					<p className={styles.Card__date__right__houre}>
						{data.arrivalDate.slice(10, 16)}
					</p>
				</div>
			</div>
			<div className={styles.Card__available}>
				<p className={styles.Card__available__reservations}>
					{data.reservations} {data.reservationsType}
				</p>
				<div className={styles.Card__available__info}>
					<p className={styles.Card__available__info__label}>Disponibilità</p>
					<h4 className={styles.Card__avaible__info__reservationAvailable}>
						{data.reservationsAvailable}
					</h4>
				</div>
			</div>
			<button className={styles.Card__button}>PRENOTA</button>
		</div>
	);
};

export default Card;
