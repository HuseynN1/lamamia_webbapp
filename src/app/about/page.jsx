import React from 'react'
import Image from 'next/image'
import Button from "../../components/Button/Button"
import styles from "./page.module.css"

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          fill={true}
          alt=""
          className={styles.img} />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum dolorum qui similique modi beatae
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis, veritatis.harum amet, nostrum nesciunt nemo tempore.</p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.Title}>What we do?</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et blanditiis sequi illum reiciendis facere reprehenderit incidunt ratione, repellendus eum inventore earum nisi nam, ullam, eius quia accusamus cupiditate eligendi vel? Pariatur quasi temporibus molestias consequatur praesentium repellendus ab eveniet voluptates,
            <br />
            <br />
            perspiciatis reprehenderit ullam sunt molestiae ea ad repellat qui veritatis.</p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  )
}

export default About

