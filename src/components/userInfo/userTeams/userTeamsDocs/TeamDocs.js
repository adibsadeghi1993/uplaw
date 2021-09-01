import React from 'react'
import styles from "./teamDocs.module.css"
import creditImage from "../../../../asstes/credit.svg"
import starBlueImage from "../../../../asstes/starBlueIcon.svg"
import blueArrow from "../../../../asstes/blue arrow.svg"
import ProgressBar from '../../commonFiles/circleProgress/ProgressBar';
import VariousDocs from './variousDocs/VariousDocs';

const TeamDocs = () => {
    return (
        <section className={styles.docs_grid}>
            <article className={styles.credit}><p>اعتبار شما</p><img src={creditImage}/></article>
            <article className={styles.adjust_docs}><p>آخرین اسناد تنظیم شده</p><img src={starBlueImage}/></article>
            <article className={styles.progressbar}><div className={styles.progress_container}><ProgressBar persentage={25}/></div></article>
            <article className={styles.docs}><VariousDocs/></article>
            <article className={styles.plan}><p>مشاهده پلن ها</p><img src={blueArrow}/></article>
            <article className={styles.new_adjust}><p>تنظیم هوشمند جدید</p><img src={blueArrow}/></article>

           
        </section>
    )
}

export default TeamDocs
