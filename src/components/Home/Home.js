import React from 'react';
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts';

import { Link } from 'react-router-dom'
import heroBcg from '../../assets/hero-bcg.jpeg'
import heroBcg2 from '../../assets/hero-bcg-2.jpeg'
import styles from './Home.module.scss';
import Services from '../Services/Services';
const Home = () => {
  return (
    <>
      <div className={`${styles.hero} section-center`}>
        <article className={styles.content}>
          <h1>
            design your <br />
            comfort zone
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
            sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
            aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
            alias?
          </p>
          <Link to='/products' className={`btn ${styles.hero_btn}`}>
            shop now
          </Link>
        </article>
        <article className={styles.img_container}>
          <img src={heroBcg} alt='nice table' className={styles.main_img} />
          <img src={heroBcg2} alt='person working' className={styles.accent_img} />
        </article>
      </div>
      <FeaturedProducts />
      <Services />
    </>
  )
}

export default Home;