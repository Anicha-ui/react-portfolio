import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { Link } from "react-router-dom";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      { <h2 className={styles.title}>Perfect solution for digital experience</h2> }
      <div className={styles.projects}>
      {projects.map((project, id) => {
          // Check if it's the first project and wrap it with a Link to Portfolio
          if (id === 0) {
            return (
              <Link to="/portfolio" key={id} className={styles.link}>
                <ProjectCard project={project} />
              </Link>
            );
          }
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};