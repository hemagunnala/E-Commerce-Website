import React from 'react'
import { Link } from 'react-router-dom'
import styles from './pageHero.module.scss'
const PageHero = ({ title, product }) => {
  return (
    <div className={styles.pageHero}>
      <div className='section-center'>
        <h3>
          <Link to='/'>Home </Link>
          {product && <Link to='/products'>/ Products</Link>}/ {title}
        </h3>
      </div>
    </div>
  )
}

export default PageHero
