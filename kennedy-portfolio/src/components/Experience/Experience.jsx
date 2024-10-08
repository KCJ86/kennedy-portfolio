import React from "react";
import { motion } from "framer-motion";
import styles from "./Experience.module.css";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.2, duration: 0.3 } }}
        viewport={{ once: false, amount: 0.5 }}
        className={styles.title}
      >
        Experience
      </motion.h2>
      <div className={styles.content}>
        <ul className={styles.experienceItems}>
          <motion.li
            initial={{ opacity: 0, x: 75 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.4, duration: 0.5 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            className={styles.experienceItem}
          >
            <div className={styles.experienceItemText}>
              <h3>Full Stack Software Developer</h3>
              <ul className={styles.bulletPoints}>
                <li>
                  Full stack implementation with Angular (front-end), ASP.NET/C#
                  (back-end), and MySQL
                </li>
                <li>
                  Developed RESTful APIs for scheduling and system integration
                </li>
                <li>
                  Ensured real-time synchronization through HTTP requests to
                  back-end services
                </li>
                <li>
                  Implemented TDD, reducing errors by 35% and improving code
                  quality
                </li>
              </ul>
            </div>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, x: -50 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.6, duration: 0.5 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            className={styles.experienceItem}
          >
            <div className={styles.experienceItemText}>
              <h3>Software Developer Intern</h3>
              <ul className={styles.bulletPoints}>
                <li>
                  Worked with a senior developer, reducing user-reported issues
                  by 30%
                </li>
                <li>
                  Improved code reliability through testing and review processes
                </li>
                <li>
                  Communicated with clients, presenting technical solutions
                </li>
                <li>
                  Applied Agile methodologies to enhance team collaboration
                </li>
              </ul>
            </div>
          </motion.li>

          <motion.li
            initial={{ opacity: 0, x: 75 }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: { delay: 0.8, duration: 0.5 },
            }}
            viewport={{ once: false, amount: 0.5 }}
            className={styles.experienceItem}
          >
            <div className={styles.experienceItemText}>
              <h3>Outreach Chair</h3>
              <ul className={styles.bulletPoints}>
                <li>
                  Fostered 150+ student-professional connections through ACM
                  networking initiatives
                </li>
                <li>
                  Organized panels with 18+ industry professionals for career
                  insights
                </li>
                <li>
                  Facilitated LeetCode Lunch sessions for students to practice
                  interview prep
                </li>
              </ul>
            </div>
          </motion.li>
        </ul>
      </div>
    </section>
  );
};
