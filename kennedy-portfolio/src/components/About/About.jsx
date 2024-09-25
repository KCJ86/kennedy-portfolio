import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About me</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/frontendtag.png")}
              alt="frontend icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Front-End Development</h3>
              <p>
                Crafting dynamic, responsive designs with Angular and React for
                seamless user experiences.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/backendtag.png")} alt="backend icon" />
            <div className={styles.aboutItemText}>
              <h3>Back-End Development</h3>
              <p>
                Expertise in API integration and building scalable, efficient
                server-side solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/mobileapptag.png")}
              alt="mobileapp icon"
            />
            <div className={styles.aboutItemText}>
              <h3>Mobile-app Development</h3>
              <p>
                Building intuitive, high-performance iOS applications from
                concept to launch.
              </p>
            </div>
          </li>
        </ul>
        <img
          src={getImageUrl("about/aboutimage2.png")}
          alt="aboutmeimage"
          className={styles.aboutImage}
        />
      </div>
    </section>
  );
};
