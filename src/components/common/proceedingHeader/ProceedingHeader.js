import React from 'react'
import styles from "./proceedingHeader.module.css"
import fingerImage from "../../../asstes/finger.png"

const ProceedingHeader = ({children}) => {
    return (
        <div className={styles.proceeding_create_team}>
        <p className={styles.invite_title}>
          {children}
        </p>
        <img src={fingerImage} alt="تنظیم صورت جلسه" />
      </div>
    )
}

export default ProceedingHeader
