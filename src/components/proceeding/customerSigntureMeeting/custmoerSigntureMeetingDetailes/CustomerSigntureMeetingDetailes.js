import React,{useState} from 'react'
import CustomerSignture from '../../../contract/SigntureContract/CustomerSignture/CustomerSignture';
import ContractHeader from '../../../userInfo/commonFiles/contractHeader/ContractHeader';
import ProceedingHeader from '../../commonfiles/proceedingHeader/ProceedingHeader'
import styles from "./customerSigntureMeetingDetailes.module.css"

const CustomerSigntureMeetingDetailes = () => {
    const [proceedingStatus, setProceedingStatus] = useState("createProceeding");
    const createProceedingHandler = () => {
      setProceedingStatus("createProceeding");
    };
    const previousProceedingHandler = () => {
      setProceedingStatus("previousProceeding");
    };
    return (
        <div>
            <ProceedingHeader/>
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
      <ContractHeader
        adjust="nonadjustent"
        mainContent="noneContent"
        opacityTow="0.5"
        opacityThree="0.5"
        stepOne="انتخاب تیم"
        stepTow="تاریخ و موضوع"
        noneBox="noneBox"
        width="100%"
      />
      <CustomerSignture  checkboxTitle="صورت جلسه امضا شود ؟" downloadTitle="دانلود صورت جلسه"/>

        </div>
    )
}

export default CustomerSigntureMeetingDetailes
