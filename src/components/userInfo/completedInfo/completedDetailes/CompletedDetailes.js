import React from 'react'
import styles from "./completedDetailes.module.css"
import completedImage from  "../../../../asstes/completedpic.svg"

const CompletedDetailes = () => {
    return (
        <main className={styles.completed_detailes} >
            <section className={styles.completede_desc}>
                <p>پروفایل شما کامل و تایید شد! از بسته رایگانتون امکانات زیر باقیه!</p>
                <img src={completedImage}  />
            </section>
        </main >
    )
}

export default CompletedDetailes
