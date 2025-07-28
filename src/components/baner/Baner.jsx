import clsx from "clsx";
import styles from "./Baner.module.css";

export default function Baner() {
  return (
    <div className={styles.baner_container}>
      <div className={styles.baner}>
        <h1 className={styles.baner_title}>Find your perfect rental car</h1>
        <h2 className={styles.baner_text}>
          Reliable and budget-friendly rentals for any journey
        </h2>
        <button className={styles.baner_btn}>View Catalog</button>
      </div>
    </div>
  );
}
