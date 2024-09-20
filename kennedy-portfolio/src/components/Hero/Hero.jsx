import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Kennedy!</h1>
        <p className={styles.description}>
          I am a Full stack dev with a passion for coding and innovation! With
          about 2 years of experience and recently graduated I am excited to be
          able to connect and get to know eachother!
        </p>
        <a
          href="mailto:kcastillonjimenez@sandiego.edu"
          className={styles.contactBtn}
        >
          {" "}
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Imageofme"
        className={styles.heroImg}
      />
    </section>
  );
};
