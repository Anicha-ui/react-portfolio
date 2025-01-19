import React, { useState } from "react";

import styles from "./Navbar.module.css";
import {getImageUrl} from "../../utils.js";

export const Navbar = () => {
    const [menuOpen, setmenuOpen] = useState(false);
    return (
    <nav className={styles.navbar}>
        <a className={styles.title} href="/"><img src={getImageUrl("nav/logo.png")} className={styles.logo} />Swati Taiwade</a>
        <div className={styles.menu}>
            <img className={styles.menuBtn} src={
                menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")}
                alt="menu-button" 
                onClick={() => setmenuOpen(!menuOpen)}
                />
            <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                onClick={() => setmenuOpen(false)} >
                <li>
                    <a href="#about">About</a>
                </li>
                {/* <li>
                    <a href="#experience">Experience</a>
                </li> */}
                <li>
                    <a href={getImageUrl("nav/SwatiTaiwade-Resume.pdf")} target="_blank">Resume</a>
                </li>
                <li>
                    <a href="#projects">Projects</a>
                </li>
                <li>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
    );
};

