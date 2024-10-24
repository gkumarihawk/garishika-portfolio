import React from 'react'
import { getImageUrl } from '../../utils'

import styles from './About.module.css'

export const About = () => {
  return (
    <section className={styles.container}> 
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/aboutImage.png")} 
                 alt="Me sitting with a laptop" 
                 className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/legalIcon.png")} alt="Cursor icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Aspiring Legal Scholar</h3>
                        <p>My journey into law started with an internship that sparked my interest in legal systems and argumentation. 
                            I aim to deepen my understanding of legal principles and the complexities of justice.
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/curiousIcon.png")} alt="Server icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Curious Explorer</h3>
                        <p>From a young age, my curiosity led me to explore diverse interests, including karate, art, and dance, shaping my desire to learn and grow. 
                            I believe that such exploration is vital for personal development and uncovering true passions.
                        </p>
                    </div>
                </li>

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/mindIcon.png")} alt="UI icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Community-Minded Learner</h3>
                        <p>Volunteering at old age homes with HelpAge India has enhanced my understanding of empathy and the importance of service, inspiring me to contribute positively to society. 
                            I strive to integrate my academic pursuits with community engagement, believing that knowledge should lead to meaningful action.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    </section>
  )
}
