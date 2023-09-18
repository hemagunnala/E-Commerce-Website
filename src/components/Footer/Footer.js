import React from 'react'
import styles from './footer.module.scss'
const Footer = () => {
  return (
    <div className={styles.footer}>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> ComfySloth </span>
      </h5>
      <h5>All rights reserved</h5>
    </div>
  )
}

export default Footer
