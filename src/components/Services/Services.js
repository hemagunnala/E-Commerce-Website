import React from 'react'
import styles from './services.module.scss';
import { services } from '../../utils/constants';
const Services = () => {
  return (
    <div className={styles.services}>
      <div className='section-center'>
        <article className={styles.header}>
          <h3>
            custom furniture <br /> built only for you
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            dolorum debitis consectetur reprehenderit non aliquam voluptates
            dolore aut vero consequuntur.
          </p>
        </article>
        <div className={styles.services_center}>
          {services.map((service) => {
            const { id, icon, title, text } = service
            return (
              <article className={styles.service} key={id}>
                <span className='icon'>{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </div>
  )
}
export default Services
