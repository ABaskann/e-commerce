import React from 'react'
import { Link } from 'react-router-dom'

import styles from "../css/navbar.module.css"

function Navbar() {
  return (
    <nav className={styles.nav}>
        <Link className={styles.logo} to="/"><img src="" alt="E-commerce Logo" /></Link>
        <ul className={styles.links}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/electronics">Electronics</Link>
            </li>
            <li>
                <Link to="/jewelry">Jewelry</Link>
            </li>
            <li>
                <Link to="/men-clothing">Men's clothing</Link>
            </li>
            <li>
                <Link to="/women-clothing">Women's clothing</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar