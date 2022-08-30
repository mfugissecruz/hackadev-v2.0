import styles from "./Navbar.module.css";
import { useState } from "react";
import { FaShoppingCart, FaSearch, FaBars, FaUser } from "react-icons/fa";

export const Navbar = () => {
  const [active, setActive] = useState(styles.nav_list);
  const navToggle = () => {
    active === "styles.nav_list"
      ? setActive(styles.nav_list.active)
      : setActive(styles.nav_list);
  };

  return (
    <>
      <header>
        <nav>
          <a href="/home" className={styles.logo}>
            <b>COZA</b> STORE
          </a>
          <ul className={active}>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <ul className={styles.nav_list2}>
            <li>
              <a href="#">
                <FaUser />
              </a>
            </li>
            <li>
              <a href="#">
                <FaSearch />
              </a>
            </li>
            <li className={styles.li2}>
              <a href="/cart">
                <FaShoppingCart />
              </a>
            </li>
          </ul>
          <div className={styles.mobile_menu}>
            <FaBars onClick={navToggle} />
          </div>
        </nav>
      </header>
    </>
  );
}
