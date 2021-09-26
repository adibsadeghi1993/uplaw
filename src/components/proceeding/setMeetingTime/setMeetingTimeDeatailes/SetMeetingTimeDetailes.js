import React, { useState } from "react";
import ContractHeader from "../../../userInfo/commonFiles/contractHeader/ContractHeader";
import ProceedingHeader from "../../commonfiles/proceedingHeader/ProceedingHeader";
import MeetingDatePicker from "./meetingDatePicker/MeetingDatePicker";
import styles from "./setMeetingTimeDetailes.module.css";
import TimePickerComponent from "./timePicker/TimePicker";
import blueArrowImage from "../../../../asstes/blue arrow.svg"


const SetMeetingTimeDetailes = () => {
  const [proceedingStatus, setProceedingStatus] = useState("createProceeding");
  const createProceedingHandler = () => {
    setProceedingStatus("createProceeding");
  };
  const previousProceedingHandler = () => {
    setProceedingStatus("previousProceeding");
  };
  const adjustProceedingHandler=(e)=>{
console.log(e.target.value)
  }
  return (
    <div>
      <ProceedingHeader />
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
        width="50%"
      />
      <div>
        <div className={styles.select_option}>
          <select onChange={adjustProceedingHandler} className={styles.select_proceeding}>
            <option value="" selected>
              برای چه منظوری قصد تنظیم صورت جلسه دارید؟ تایپ کنید یا از موارد
              پیشفرض انتخاب کنید
            </option>
            <option value="forMystartup">برای استارتاپ خودم</option>
            <option value="formycompany">برای شرکت</option>
          </select>
        </div>
      </div>
   <section className={styles.date_and_time_picker}>
     <div className={styles.proceeding_date_picker}>
       <MeetingDatePicker/>
     </div>
     <div className={styles.proceeding_time_picker}><TimePickerComponent/></div>
   </section>
   <div className={styles.nextStep}>
     <button>
       <span>مرحله بعد</span>
       <img src={blueArrowImage} alt="مرحله بعد"/>
     </button>
   </div>
     
    </div>
  );
};

export default SetMeetingTimeDetailes;
