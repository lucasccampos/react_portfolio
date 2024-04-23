import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hey, I'm Lucas</h1>
        <p className={styles.description}>
          The developer ready to tackle your 'thing'—be it a website, backend, automation, web3, or any challenge. Just hand it over, and I'll
          work my magic. Let's join forces and bring your ideas to life!
        </p>
        <a className={styles.contactBtn} href="#contact">
          Contact Me
        </a>
      </div>
      <img className={styles.heroImg} src={getImageUrl("hero/eu.jpeg")} alt="Hero Image of me" />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
