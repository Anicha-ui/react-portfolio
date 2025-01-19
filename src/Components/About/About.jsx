import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      {/* <h2 className={styles.title}>About</h2> */}
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            {/* <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" /> */}
            <div className={styles.aboutItemText}>
              {/* <h3>ChargeAnywhere LLC</h3> */}
              <p>
              A skilled web developer and designer with a strong passion for art and design, I thrive on creating visually stunning, user-centric digital experiences. Combining technical expertise with a creative eye, I specialize in building intuitive, responsive websites that not only function seamlessly but also captivate users with thoughtful, artistic design elements. 
              Whether it’s through clean code or bold, innovative visuals, I believe in the power of design to transform and elevate digital spaces.
              </p>
              <p>
                With over 12 years of hands-on expertise in designing, developing, 
                and optimizing web applications. Skilled in both front-end and back-end technologies with a strong focus on creating responsive, 
                user friendly, and performance optimized websites. I am passionate about crafting innovative solutions to solve complex problems.
                </p>
                <p>
                    I also bring a strong foundation in UI/UX design, with hands-on experience in tools like Adobe Photoshop, Adobe XD, and Adobe Illustrator. 
                    My design capabilities include creating visually compelling content, including logos and graphics.<br></br>
                    I thrive in dynamic, agile environments and contribute to all phases of software development, from initial design to final deployment. 
                    I enjoy collaborating with diverse teams, participating in pair programming, conducting code reviews, and ensuring the delivery of robust and reliable solutions.<br></br>
                    Reach out if you'd like to know more
                </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>NJYP</h3>
              <p>
                Collaborated on a team of 8+ members including designers, developers,
                consultants as a project managers to build dynamic web applications.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have designed multiple landing pages and have created design
                systems as well
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};