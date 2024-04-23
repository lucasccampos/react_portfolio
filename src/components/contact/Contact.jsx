import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

import contact from "../../data/contact.json";

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={styles.text}>
        <h2>Contact me</h2>
        <p>{contact.message}</p>
      </div>
      <ul className={styles.links}>
        {contact.links.map((link, i) => {
          return (
            <li href={link.href} key={i} className={styles.link}>
              <a href={link.href}>
                <img src={getImageUrl(link.imageSrc)} alt={`${link.title} icon`} />
                {link.title}
              </a>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};
