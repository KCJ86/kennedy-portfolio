import React from "react";
import styles from "./Contact.module.css";

import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h1 className={styles.title}>Contact Me</h1>
        <p>Reach out to me in the following...</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:kcastillonjimenez@gmail.com">
            kcastillonjimenez@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedInIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/kennedyjimenez">
            linkedin.com/kennedyjimenez
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/KCJ86">github.com/KCJ86</a>
        </li>
      </ul>
    </footer>
  );
};
