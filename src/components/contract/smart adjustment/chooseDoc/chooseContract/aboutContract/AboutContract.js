import React from 'react'
import styles from "./aboutContract.module.css"
import pageNumberImage from "../../../../../../asstes/page number.svg"
import usefulForCompanyImage from "../../../../../../asstes/useful for company.svg"
import pdfImage from "../../../../../../asstes/pdf.svg"
import timerImage from "../../../../../../asstes/time.svg"
import blueArrowImage from "../../../../../../asstes/blue arrow.svg"
import { useHistory } from 'react-router'

const AboutContract = ({title}) => {

   const history= useHistory()

    const adjustHandler=()=>{
        history.push(`/contract/${title}`)

    }
    return (
        <section className={styles.about_contract} >
           <div className={styles.contract_flex}>
           <article className={styles.contract_description}>
                <h1>{title}</h1>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
            </article>
            <article className={styles.contract_info}>
                <div className={styles.contract_pageNumber}>
                    <img src={pageNumberImage} alt="تعداد صفحات"/>
                   <p className={styles.first_paragraf}>تعداد صفحات قرارداد</p>
                   <p className={styles.second_paragraf}>3 تا 8 (بسته به طراحی شما)</p>
                </div>
                <div className={styles.contract_usefulfor}>
                <img src={usefulForCompanyImage} alt="مناسب برای"/>
                   <p className={styles.first_paragraf}>مناسب برای</p>
                   <p className={styles.second_paragraf}>استارتاپ و شرکت ها</p>
                </div>
                <div className={styles.contract_pdf}>
                <img src={pdfImage} alt="داکیومنت"/>
                   <p className={styles.first_paragraf}>نوع خروجی</p>
                   <p className={styles.second_paragraf}>Docx And Pdf</p>
                </div>
                <div className={styles.contract_timer}>
                <img src={timerImage} alt="مدت زمان تنظیم قرارداد"/>
                   <p className={styles.timer}>حداکثر زمان<br></br> تنظیم قرارداد</p>
                   <p className={styles.second_paragraf}>10 دقیقه</p>
                </div>
                

            </article>
           </div>
            <div className={styles.contract_btns}>
                    <button onClick={adjustHandler} className={styles.adjust_btn}>تنظیم هوشمند <img src={blueArrowImage} alt="ثبت و مرحله بعد"/></button>
                    <button className={styles.download_btn}>دانلود نمونه قرارداد<img src={blueArrowImage} alt="ثبت و مرحله بعد"/></button>

                </div>
            
        </section>
    )
}

export default AboutContract
