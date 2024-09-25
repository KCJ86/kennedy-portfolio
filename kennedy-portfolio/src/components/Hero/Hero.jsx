import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kennedy!</h1>
        <p className={styles.description}>
          I'm a driven full-stack developer fueled by a passion for coding and
          innovation. With 2 years of hands-on experience and a recent degree in
          Computer Science, I'm eager to connect, collaborate, and create
          impactful solutions together!
        </p>

        <a
          href="mailto:kcastillonjimenez@sandiego.edu"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/aboutme2.png")}
        alt="Imageofme"
        className={styles.heroImg}
      />
    </section>
  );
};
