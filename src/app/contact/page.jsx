
import React from 'react'
import styles from "@/app/contact/page.module.css"
import Image  from 'next/image';
import Button from '@/components/Button/Button';
import photo from "../../../public/contact.png"

export const metadata= {
  title: "Contact Information",
  description: "This is Contact page",
};



const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Lets Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src={photo}
            alt="as"
            fill={true}
            className={styles.image} />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder='name' className={styles.input} />
          <input type="text" placeholder='email' className={styles.input} />
          <textarea className={styles.textarea}
            placeholder='message'
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div >
  )
}

export default Contact