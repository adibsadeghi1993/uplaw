import React from 'react'
import styles from "./aboutContract.module.css"
import pageNumberImage from "../../../../../../asstes/page number.svg"
import usefulForCompanyImage from "../../../../../../asstes/useful for company.svg"
import pdfImage from "../../../../../../asstes/pdf.svg"
import timerImage from "../../../../../../asstes/time.svg"
import blueArrowImage from "../../../../../../asstes/blue arrow.svg"

const AboutContract = ({title}) => {
    return (
        <section className={styles.about_contract} >
            <article className={styles.contract_description}>
                <h1>{title}</h1>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
            </article>
            <article className={styles.contract_info}>
                <div className={styles.contract_pageNumber}>
                    <img src={pageNumberImage} alt="تعداد صفحات"/>
                   <p>تعداد صفحات قرارداد</p>
                   <p>3 تا 8 (بسته به طراحی شما)</p>
                </div>
                <div className={styles.contract_usefulfor}>
                <img src={usefulForCompanyImage} alt="مناسب برای"/>
                   <p>مناسب برای</p>
                   <p>استارتاپ و شرکت ها</p>
                </div>
                <div className={styles.contract_pdf}>
                <img src={pdfImage} alt="داکیومنت"/>
                   <p>نوع خروجی</p>
                   <p>Docx And Pdf</p>
                </div>
                <div className={styles.contract_timer}>
                <img src={timerImage} alt="مدت زمان تنظیم قرارداد"/>
                   <p>حداکثر زمان تنظیم قرارداد</p>
                   <p>10 دقیقه</p>
                </div>
                <div>
                    <button>تنظیم هوشمند <img src={blueArrowImage} alt="ثبت و مرحله بعد"/></button>
                </div>

            </article>
            
        </section>
    )
}

export default AboutContract
