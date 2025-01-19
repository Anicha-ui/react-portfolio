import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils.js";

export const Hero = () => {
 return(
    <section className={styles.container}>
        <div className={styles.content}>
            <p className={styles.description}>
                I also bring a strong foundation in UI/UX design, with hands-on experience in tools like Adobe Photoshop, Adobe XD, and Adobe Illustrator. 
                My design capabilities include creating visually compelling content, including logos and graphics.<br></br>
                I thrive in dynamic, agile environments and contribute to all phases of software development, from initial design to final deployment. 
                I enjoy collaborating with diverse teams, participating in pair programming, conducting code reviews, and ensuring the delivery of robust and reliable solutions.<br></br>
                Reach out if you'd like to know more
            </p>
            <a href="mailto:swati.taiwade@gmail.com" className={styles.contactBtn}>swati.taiwade@gmail.com</a>
            </div>
            {/* <img src={getImageUrl("hero/heroImageNew.png")} alt="hero img of me" className={styles.heroImg} /> */}
    </section>
    
 );
};