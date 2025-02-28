import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { Link } from "react-router-dom";

export const Projects = () => {
  return (
      <section className={styles.container} id="projects">
        <h2 className={styles.title}>Crafting Digital Experiences: Responsive, Scalable and Modern </h2>
        <div className={styles.projects}>
          {projects.map((project, id) => {
            return (
              <Link to={project.source} key={id} className={styles.link}>
                <ProjectCard project={project} />
              </Link>
            );
          })}
        </div>
      </section>
  );
};