import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import { Typewriter } from "../Typewriter/Typewriter";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.2, duration: 0.3 },
          }}
          viewport={{ once: false, amount: 0.3 }}
          className={styles.title}
        >
          <Typewriter text="Hello, I'm Kennedy!" delay={150} />
        </motion.h1>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: { delay: 0.2, duration: 0.3 },
          }}
          viewport={{ once: false, amount: 0.1 }}
        >
          <p className={styles.description}>
            I'm a driven full-stack developer fueled by a passion for coding and
            innovation. With 2 years of hands-on experience and a recent degree
            in Computer Science, I'm eager to connect, collaborate, and create
            impactful solutions together! I have a passion in community and
            helping others as I have been helped. Just being alive and existing
            at the same time as all of ya'll is enough to make me happy!
          </p>

          <a
            href="mailto:kcastillonjimenez@sandiego.edu"
            className={styles.contactBtn}
          >
            Contact Me
          </a>
        </motion.div>
      </div>
      <motion.img
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.3 },
        }}
        viewport={{ once: false, amount: 0.1 }}
        src={getImageUrl("hero/aboutme2.png")}
        alt="Imageofme"
        className={styles.heroImg}
      />
    </section>
  );
};
