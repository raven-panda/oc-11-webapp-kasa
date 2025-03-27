import styles from "./PageTitleCard.module.scss";

/**
 * @param title {string} The text to render inside the card
 * @returns {JSX.Element}
 */
export default function PageTitleCard({ title }) {
  return (
    <section className={styles.page_title_card}>
      {title && <h1>{title}</h1>}
    </section>
  );
}
