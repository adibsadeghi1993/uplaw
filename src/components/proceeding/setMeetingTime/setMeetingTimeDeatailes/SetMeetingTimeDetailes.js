import React, { useState } from "react";

import MeetingDatePicker from "./meetingDatePicker/MeetingDatePicker";
import styles from "./setMeetingTimeDetailes.module.css";
import TimePickerComponent from "./timePicker/TimePicker";
import blueArrowImage from "../../../../asstes/blue arrow.svg"
import SelectComponent from "./selectComponent/SelectComponent";
import { useDispatch } from "react-redux";
import { setMeetingDate, setMeetingSubject, setMeetingTime } from "../../../../redux/Actions/MeetingActions";
import { useHistory } from "react-router";
import ProceedingHeader from "../../../common/proceedingHeader/ProceedingHeader";
import Progress from "../../../common/contractHeader/ContractHeader";


const SetMeetingTimeDetailes = () => {
  const [proceedingStatus, setProceedingStatus] = useState("createProceeding");
  const [selectedOption, setSelectedOption] = useState(null);
  const [value, setValue] = useState(null);
  const [time, setTime] = useState(null);
  const [date, setDate] = useState("");
  const history=useHistory()
  const dispatch=useDispatch()
  const createProceedingHandler = () => {
    setProceedingStatus("createProceeding");
  };
  const previousProceedingHandler = () => {
    setProceedingStatus("previousProceeding");
  };

  const nextStepHandler=()=>{
    dispatch(setMeetingTime(time))
    dispatch(setMeetingDate(date))
    dispatch(setMeetingSubject(selectedOption))
    if(time&&date&&selectedOption){
      history.push("/meeting/signtureMeeting")
    }
   

  }

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
      <Progress
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
         <SelectComponent selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
        </div>
      </div>
   <section className={styles.date_and_time_picker}>
     <div className={styles.proceeding_date_picker}>
       <MeetingDatePicker date={date} setDate={setDate}/>
     </div>
     <div className={styles.proceeding_time_picker}><TimePickerComponent setTime={setTime} value={value} setValue={setValue}/></div>
   </section>
   <div className={styles.nextStep}>
     <button onClick={nextStepHandler}>
       <span>مرحله بعد</span>
       <img src={blueArrowImage} alt="مرحله بعد"/>
     </button>
   </div>
     
    </div>
  );
};

export default SetMeetingTimeDetailes;
