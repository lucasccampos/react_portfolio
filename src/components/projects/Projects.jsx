import React from "react";
import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";
import { ProjectCard } from "./ProjectCard";

import projects from "../../data/projects.json";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, i) => {
          return (
            <ProjectCard project={project} key={i}/>
          );
        })}
      </div>
    </section>
  );
};