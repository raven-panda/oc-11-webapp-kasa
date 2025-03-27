import { useState } from "react";
import styles from "./Collapsible.module.scss";
import ChevronLogo from "../../assets/icon/ChevronLogo.jsx";

/**
 * @param title {ReactNode} Title of the collapsible
 * @param children {ReactNode} Children to show in the collapsible bloc
 */
export default function CollapsibleBloc({ title, children }) {
  const [isExpanded, setExpanded] = useState(false);

  return (
    <div className={styles.collapsible}>
      <button type="button" aria-expanded={isExpanded} onClick={() => setExpanded(prev => !prev)}>
        <span>{title}</span>
        <ChevronLogo rotate={isExpanded ? 180 : 0} />
      </button>
      <section hidden={!isExpanded}>
        {children}
      </section>
    </div>
  );
}
