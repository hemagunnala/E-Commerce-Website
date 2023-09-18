import React from 'react'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styles from './product.module.scss';
import { formatPrice } from '../../utils/helper';
const Product = ({ image, name, price, id }) => {
  return (
    <div className={styles.product}>
      <div className={styles.container}>
        <img src={image} alt={name} />
        <Link to={`/products/${id}`} className={styles.link}>
          <FaSearch />
        </Link>
      </div>
      <footer>
        <h5>{name}</h5>
        <p>{formatPrice(price)}</p>
      </footer>
    </div>
  )
}
export default Product
