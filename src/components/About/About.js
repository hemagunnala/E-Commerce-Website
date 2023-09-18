import React from 'react';
import aboutImg from '../../assets/hero-bcg.jpeg'
import styles from './about.module.scss';
import PageHero from '../PageHero/PageHero';

const About = () => {
    return (
        <>
            <main>
                <PageHero title='about' />
                <div className={`${styles.page} section section-center`}>
                    <img src={aboutImg} alt={styles.nice_desk} />
                    <article>
                        <div className={styles.title}>
                            <h2>our story</h2>
                            <div className={styles.underline}></div>
                        </div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
                            accusantium sapiente tempora sed dolore esse deserunt eaque
                            excepturi, delectus error accusamus vel eligendi, omnis beatae.
                            Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque
                            dolore, obcaecati incidunt sequi blanditiis est exercitationem
                            molestiae delectus saepe odio eligendi modi porro eaque in libero
                            minus unde sapiente consectetur architecto. Ullam rerum, nemo iste
                            ex, eaque perspiciatis nisi, eum totam velit saepe sed quos
                            similique amet. Ex, voluptate accusamus nesciunt totam vitae esse
                            iste.
                        </p>
                    </article>
                </div>
            </main>
        </>
    )
}

export default About;