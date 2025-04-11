import styles from "./FiveStarsRate.module.scss";
import StarIcon from "../../assets/icon/StarIcon.jsx";

/**
 * @param rate {number} Max: 5
 * @returns {JSX.Element}
 */
export default function FiveStarsRate({ rate = 0 }) {
  // Flooring the rate in case we pass a float number, and ensuring that the number is between 0 and 5
  const normalizedRate = Math.min(Math.max(Math.floor(rate), 0), 5);

  return (
    <div
      className={`${styles.five_stars_container} ${styles[`rating_${normalizedRate}`]}`}
    >
      {[...Array(5)].map((_, index) => (
        <StarIcon key={index} className={styles.star_icon} />
      ))}
    </div>
  );
}
