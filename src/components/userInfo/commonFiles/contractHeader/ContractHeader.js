import React from 'react'
import styles from "./contractHeader.module.css"
import basicContractInfoImage from "../../../../asstes/contracfirstinfo.svg"
import spacialContractInfoImage from "../../../../asstes/specialinfocontract.svg"
import confirmContractImage from "../../../../asstes/confirmcontract.svg"


const ContractHeader = ({opacity=0.5,width="33.333%"}) => {
    return (
        <section>
            <h1>/تنظیم هوشمند/تنظیم هوشمند قرارداد استخدام کارشناس تولید محتوا</h1>
            <section className={styles.contractHeader}>
                <div className={styles.minute}>
                    <h3> فقط 3 دقیقه </h3>
                    <p>تا تنظیم قرارداد</p>
                </div>
                <article className={styles.progress_contract}>
                    <div className={styles.contract_images}>
                        <img src={basicContractInfoImage} alt="اطلاعات پایه قرارداد" />
                        <img style={{opacity:opacity}} src={spacialContractInfoImage} alt="مفاد تخصصی قرارداد" />
                        <img style={{opacity:opacity}} src={confirmContractImage} alt="تایید نهایی" />       
                    </div>
                    <div className={styles.progress_container}>
                        <div style={{width:`${width}`}} className={styles.progress}></div>
                    </div>
                    <div className={styles.contract_info}>
                        <p>اطلاعات اولیه قرارداد</p>
                        <p style={{opacity:opacity}} >مفاد تخصصی قرارداد</p>
                        <p style={{opacity:opacity}} >تایید نهایی</p>
                    </div>
                </article>
            </section>
            
        </section>
    )
}

export default ContractHeader
