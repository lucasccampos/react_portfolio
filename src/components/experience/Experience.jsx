import React from "react";
import styles from "./Experience.module.css";

import skills from "../../data/skills.json";
import experiences from "../../data/experiences.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.xpTitle}>Experience</h2>
      <div className={styles.xpContent}>
        <div className={styles.skillsContent}>
          {skills.map((skill, i) => {
            return (
              <div className={styles.skill} key={i}>
                <div className={styles.skillImgContainer}>
                  <img src={getImageUrl(skill.imgSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={styles.experiencesContent}>
          {experiences.map((xp, i) => {
            return (
              <li key={i} className={styles.experience}>
                <img src={getImageUrl(xp.imgSrc)} alt={`${xp.organization} Logo`} />
                <div className={styles.experienceDetails}>
                  <h3>
                    {xp.role}, {xp.organization}
                  </h3>
                  <p>
                    {xp.startDate} - {xp.endDate}
                  </p>
                  <ul>
                    {xp.actions.map((action, j) => {
                      return <li key={j}>{action}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
