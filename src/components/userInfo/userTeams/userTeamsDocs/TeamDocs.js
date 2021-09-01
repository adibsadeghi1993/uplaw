import React from 'react'
import styles from "./teamDocs.module.css"
import creditImage from "../../../../asstes/credit.svg"
import starBlueImage from "../../../../asstes/starBlueIcon.svg"
import { buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";

const TeamDocs = () => {
    return (
        <section className={styles.dockes}>
            <div className={styles.credit}><p>اعتبار شما</p><img src={creditImage}/></div>
            <div className={styles.adjust_docs}><p>آخرین اسناد تنظیم شده</p><img src={starBlueImage}/></div>
            <div></div>

           
        </section>
    )
}

export default TeamDocs
