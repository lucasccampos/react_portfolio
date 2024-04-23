import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
import React from "react";

import about_data from "../../data/about.json";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img className={styles.aboutImage} src={getImageUrl("about/ai_image.jpg")} />
        <ul className={styles.aboutItems}>
          {about_data.map((about, i) => {
            return (
              <li className={styles.aboutItem} key={i}>
                <img className={styles.itemIcon} src={getImageUrl(about.imgSrc)} alt={`${about.title} Icon`}/>
                <div className={styles.aboutItemText}>
                  <h3>{about.title}</h3>
                  <p>{about.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
