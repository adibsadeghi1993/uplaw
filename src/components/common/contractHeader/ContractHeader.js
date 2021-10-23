import React from 'react'
import styles from "./contractHeader.module.css"
import basicContractInfoImage from "../../../asstes/contracfirstinfo.svg"
import spacialContractInfoImage from "../../../asstes/specialinfocontract.svg"
import confirmContractImage from "../../../asstes/confirmcontract.svg"


const Progress = ({ adjust=true,noneBox,opacityTow="0.5",opacityThree=1,width="33.333%",ContractName,mainContent,stepOne="اطلاعات اولیه قرارداد",stepTow="مفاد تخصصی قرارداد"}) => {
    return (
        <section>
            <h1 className={`${styles.contractName} ${adjust?null:styles.noneAdjust} ${styles[mainContent]}`}>/تنظیم هوشمند/{ContractName}</h1>
            <section className={styles.contractHeader}>
                <div className={`${styles.minute} ${styles[noneBox]}`}>
                    <h3> فقط 3 دقیقه </h3>
                    <p>تا تنظیم قرارداد</p>
                </div>
                <article className={styles.progress_contract}>
                    <div className={styles.contract_images}>
                        <img src={basicContractInfoImage} alt="اطلاعات پایه قرارداد" />
                        <img style={{opacity:`${opacityTow}`}} src={spacialContractInfoImage} alt="مفاد تخصصی قرارداد" />
                        <img style={{opacity:`${opacityThree}`}} src={confirmContractImage} alt="تایید نهایی" />       
                    </div>
                    <div className={styles.progress_container}>
                        <div style={{width:`${width}`}} className={styles.progress}></div>
                    </div>
                    <div className={styles.contract_info}>
                        <p>{stepOne}</p>
                        <p style={{opacity:opacityTow}} >{stepTow} </p>
                        <p style={{opacity:opacityThree}} >تایید نهایی</p>
                    </div>
                </article>
            </section>
            
        </section>
    )
}

export default Progress
