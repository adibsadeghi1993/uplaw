import React from 'react'
import styles from "./proceedingHeader.module.css"
import fingerImage from "../../../../asstes/finger.png"

const ProceedingHeader = () => {
    return (
        <div className={styles.proceeding_create_team}>
        <p className={styles.invite_title}>
          این صفحه برای ساختن هر نوع صورت جلسه ایه! تو میتونی برای هر صورت
          جلسه اعضای مورد نظرت رو دعوت کنی و صورت جلسه رو درست کنی.
        </p>
        <img src={fingerImage} alt="تنظیم صورت جلسه" />
      </div>
    )
}

export default ProceedingHeader
