/* eslint-disable react/prop-types */
import React from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({ project }) => {
  return (
    <div className={styles.project}>
      <img className={styles.image} src={getImageUrl(project.imageSrc)} alt={`Image of ${project.title}`} />
      <div className={styles.details}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>
      </div>
      <ul className={styles.skills}>
        {project.skills.map((skill, j) => {
          return (
            <li className={styles.skill} key={j}>
              {skill}
            </li>
          );
        })}
      </ul>
      <div className={styles.links}>
        <a href={project.demo} className={styles.link}>
          Demo
        </a>
        <a href={project.source} className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
};
