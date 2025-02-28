import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      {/* <div className={styles.text}>
        <h2>Contact Info</h2>
        <p>Feel free to reach out!</p>
      </div> */}
      <ul className={styles.links}>
        <li className={styles.link}>
          <img className={styles.iconImg} src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:swati.taiwade@gmail.com">swati.taiwade@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img className={styles.iconImg} 
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="www.linkedin.com/in/swati-taiwade-3a94bb1a">linkedin.com/SwatiTaiwade</a>
        </li>
      </ul>
    </footer>
  );
};