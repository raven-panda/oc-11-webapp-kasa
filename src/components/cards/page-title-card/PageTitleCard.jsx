import styles from "./PageTitleCard.module.scss";

/**
 * @param title {string} The text to render inside the card
 * @param variant {"home"|"about"|"housing"} The variant category
 * @returns {JSX.Element}
 */
export default function PageTitleCard({ title, variant = "home" }) {
  return (
    <section
      className={
        styles.page_title_card + " " + (styles[variant] ?? styles.home)
      }
    >
      {title && <h1>{title}</h1>}
    </section>
  );
}
