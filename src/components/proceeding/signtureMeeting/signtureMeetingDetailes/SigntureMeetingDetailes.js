import React, { useState } from "react";
import ProceedingHeader from "../../../common/proceedingHeader/ProceedingHeader";
import ShowContract from "../../../contract/contractDoucument/showContract/ShowContract";
import ContractHeader from "../../../common/contractHeader/ContractHeader";
import styles from "./signtureMeetingDetailes.module.css";

const SigntureMeetingDetailes = () => {
  const [proceedingStatus, setProceedingStatus] = useState("createProceeding");
  
  const createProceedingHandler = () => {
    setProceedingStatus("createProceeding");
  };
  const previousProceedingHandler = () => {
    setProceedingStatus("previousProceeding");
  };
  return (
    <div>
      <ProceedingHeader>
      این صفحه برای ساختن هر نوع صورت جلسه ایه! تو میتونی برای هر صورت
          جلسه اعضای مورد نظرت رو دعوت کنی و صورت جلسه رو درست کنی.
      </ProceedingHeader>
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

      <ShowContract
        download="دریافت صورتجلسه"
        checkboxTitle="صورت جلسه امضا شود ؟"
        suggestedContracts="notExistedContracts"
        choosedContract="صورت جلسه ثبت شرکت"
        path="/meeting/customerSigntureMeeting"
      
      />
    </div>
  );
};

export default SigntureMeetingDetailes;
