import React,{useState} from 'react'
import Progress from '../../../common/contractHeader/ContractHeader';
import ProceedingHeader from '../../../common/proceedingHeader/ProceedingHeader';
import CustomerSignture from '../../../contract/SigntureContract/CustomerSignture/CustomerSignture';

import styles from "./customerSigntureDetailes.module.css"


const CustomerSigntureDetailes = () => {
    const [proceedingStatus, setProceedingStatus] = useState("createProceeding");
    const createProceedingHandler = () => {
      setProceedingStatus("createProceeding");
    };
    const previousProceedingHandler = () => {
      setProceedingStatus("previousProceeding");
    };
    return (
        <div>
           <div className={styles.proceedingHeader_container}>
          
           <ProceedingHeader>
      این صفحه برای ساختن هر نوع صورت جلسه ایه! تو میتونی برای هر صورت
          جلسه اعضای مورد نظرت رو دعوت کنی و صورت جلسه رو درست کنی.
      </ProceedingHeader>

           </div>
            <div className={styles.chooseProceeding}>
        <p
          onClick={createProceedingHandler}
          className={
            proceedingStatus === "createProceeding"
              ? styles.activeProceeding
              : null
          }
        >
          ایجاد صورت جلسه
        </p>
        <p
          onClick={previousProceedingHandler}
          className={
            proceedingStatus === "previousProceeding"
              ? styles.activeProceeding
              : null
          }
        >
          صورت جلسه های قبلی
        </p>
      </div>
      <Progress
        adjust="nonadjustent"
        mainContent="noneContent"
        opacityTow="1"
        opacityThree="1"
        stepOne="انتخاب تیم"
        stepTow="تاریخ و موضوع"
        noneBox="noneBox"
        width="100%"
      />
      <CustomerSignture  checkboxTitle="صورت جلسه امضا شود ؟" downloadTitle="دانلود صورت جلسه"/>

        </div>
    )
}

export default CustomerSigntureDetailes
