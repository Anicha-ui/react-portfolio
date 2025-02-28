import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
    project: {title, imageSrc, description, skills, demo, source}
        }) => {
 return(
        <div>
            <img src={getImageUrl(imageSrc)} 
                alt={`image of ${title}`}
                className={styles.image}
             />
            <div className={styles.title}>{title}</div>
        </div>
    
 );
};