import React from 'react'
import pageNumberImage from "../../../../../../asstes/page number.svg"
import usefulForCompanyImage from "../../../../../../asstes/useful for company.svg"
import pdfImage from "../../../../../../asstes/pdf.svg"
import timerImage from "../../../../../../asstes/time.svg"

const AboutContract = ({title}) => {
    return (
        <section>
            <article>
                <h1>{title}</h1>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</p>
            </article>
            <article>
                <div>
                    <img src={pageNumberImage} alt="تعداد صفحات"/>
                   <p>تعداد صفحات قرارداد</p>
                   <p>3 تا 8 (بسته به طراحی شما)</p>
                </div>
                <div>
                <img src={usefulForCompanyImage} alt="مناسب برای"/>
                   <p>مناسب برای</p>
                   <p>استارتاپ و شرکت ها</p>
                </div>
                <div>
                <img src={pdfImage} alt="داکیومنت"/>
                   <p>نوع خروجی</p>
                   <p>Docx And Pdf</p>
                </div>
                <div>
                <img src={timerImage} alt="مدت زمان تنظیم قرارداد"/>
                   <p>حداکثر زمان تنظیم قرارداد</p>
                   <p>10 دقیقه</p>
                </div>
                <div>
                    <button>تنظیم هوشمند</button>
                </div>

            </article>
            
        </section>
    )
}

export default AboutContract
