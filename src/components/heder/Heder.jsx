import clsx from "clsx";
import styles from "./Heder.module.css";
import logoUrl from "../../assets/RentalCar.svg";

export default function Heder() {
  return (
    <div className={styles.heder}>
      <a href="" className={styles.logo}>
        <img src={logoUrl} alt="Logo" />
      </a>
      <ul className={styles.menu}>
        <li className={styles.menu_item}>
          <a href="" className={styles.menu_link}>
            Home
          </a>
        </li>
        <li className={styles.menu_item}>
          <a href="" className={styles.menu_link}>
            Catalog
          </a>
        </li>
      </ul>
    </div>
  );
}
