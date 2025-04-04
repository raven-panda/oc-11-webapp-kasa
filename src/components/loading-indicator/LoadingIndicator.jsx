import LoadingIcon from "../../assets/icon/LoadingIcon.jsx";
import styles from './LoadingIndicator.module.scss';

export default function LoadingIndicator() {
  return <p className={styles.housing_loading_indicator}><LoadingIcon /> Chargement des données...</p>;
}
