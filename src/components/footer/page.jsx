"use client"
import React from 'react'
import styles from '@/components/footer/footer.module.css';
styles
const Footer = () => {
 
  return (
    <div className={styles.container}>
      <div>@2023 Lamammia. All rights reserved</div>
      <div>
        <div className={styles.social}>
          <img src="/1.png" alt="Lama Dev" width={15} height={15} className={styles.icon} />
          <img src="/2.png" alt="Lama Dev" width={15} height={15} className={styles.icon} />
          <img src="/3.png" alt="Lama Dev" width={15} height={15} className={styles.icon} />
          <img src="/4.png" alt="Lama Dev" width={15} height={15} className={styles.icon} />
        </div>
      </div>
    </div>
  )
}

export default Footer