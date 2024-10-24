import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Garishika Yadav</h1>
        <p className={styles.description}>
        I have pursued a diverse range of activities, including internships and a transformative summer course in law, alongside maintaining high grades. 
        My volunteer work with HelpAge India has deepened my understanding of empathy and community service. 
        These experiences have solidified my passion for studying pre-law and my desire to make a meaningful impact in society.
        </p>
        <a href="mailto:garishikayadav@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};