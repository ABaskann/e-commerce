import React from "react";
import { Link } from "react-router-dom";

import styles from "../css/navbar.module.css";
import logo from "./assets/logo.png";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link className={styles.logo} to="/">
        <img src={logo} alt="E-commerce Logo" />
        
      </Link>
      <ul className={styles.links}>
        <li>
          <Link className={styles.link} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/electronics">
            Electronics
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/jewelry">
            Jewelry
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/men-clothing">
            Men's clothing
          </Link>
        </li>
        <li>
          <Link className={styles.link} to="/women-clothing">
            Women's clothing
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
