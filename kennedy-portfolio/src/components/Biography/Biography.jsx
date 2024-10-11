import React from "react";
import { motion } from "framer-motion";
import styles from "./Biography.module.css";
import { getImageUrl } from "../../utils";

export const Biography = () => {
  return (
    <section>
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { delay: 0.2, duration: 0.3 } }}
        viewport={{ once: false, amount: 0.5 }}
        className={styles.title}
      >
        Biography
      </motion.h2>
      <div className={styles.content}>
        <motion.p
          initial={{ opacity: 0, x: -75 }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: { delay: 0.4, duration: 0.5 },
          }}
          viewport={{ once: false, amount: 0.5 }}
          className={styles.description}
        >
          I hope you enjoyed the art featured on this website. Full credit goes
          to Diego Rivera and the great José Clemente Orozco, both of whom are
          my countrymen. Being born on the coast of Jalisco, I wanted to
          incorporate elements of my culture into this creation, as it's a big
          part of my identity. Growing up in the Bay Area during the tech boom,
          I witnessed how many underrepresented communities were left behind.
          This fueled my desire to pursue a career in tech to show that more of
          us belong in these spaces. As underrepresented people, we deserve to
          be seen as engineers, not just unskilled laborers. I hope you enjoyed
          exploring my profile, and please feel free to reach out for a
          conversation I am always happy to chat!
        </motion.p>
        <img
          viewport={{ once: false, amount: 0.1 }}
          src={getImageUrl("bio/biopic.png")}
          alt="Imageofme"
          className={styles.bioImg}
        />
      </div>
    </section>
  );
};
