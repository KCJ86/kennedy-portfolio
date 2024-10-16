import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{
          opacity: 1,
          transition: { delay: 0.2, duration: 0.3 },
        }}
        viewport={{ once: false, amount: 0.5 }}
        className={styles.title}
      >
        About me
      </motion.h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage3.png")}
          alt="aboutmeimage"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.4, duration: 0.5 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            className={styles.aboutItem}
          >
            <div className={styles.aboutItemText}>
              <h3>Front-End Development</h3>
              <p>
                Crafting dynamic, responsive designs with Angular and React for
                seamless user experiences.
              </p>
            </div>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.4, duration: 0.5 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            className={styles.aboutItem}
          >
            <div className={styles.aboutItemText}>
              <h3>Back-End Development</h3>
              <p>
                Expertise in API integration and building scalable, efficient
                server-side solutions.
              </p>
            </div>
          </motion.li>
          <motion.li
            initial={{ opacity: 0 }}
            whileInView={{
              opacity: 1,
              transition: { delay: 0.4, duration: 0.5 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            className={styles.aboutItem}
          >
            <div className={styles.aboutItemText}>
              <h3>Mobile App Development</h3>
              <p>
                Building intuitive, high-performance iOS applications from
                concept to launch.
              </p>
            </div>
          </motion.li>
        </ul>
      </div>
    </section>
  );
};
