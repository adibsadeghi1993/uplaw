import React from 'react'
import DatePicker from "react-datepicker2";
import styles from "./meetingDatePicker.module.css"

const MeetingDatePicker = ({setDate,date}) => {
    const handleChange = (value) => {
        console.log(value)
    
        const now =value
        console.log(now)
        const formattedDate = now.format('jYYYY/jMM/jDD')
        console.log(formattedDate) 
        setDate(formattedDate)
       
      };
    return (
        <div>
         <DatePicker
        calssName={styles.input_datepicker}
        placeholder="تاریخ تشکیل جلسه را انتخاب کنید"
        timePicker={false}
        id="datePicker"
        showTodayButton={false}
        isGregorian={false}
        // value={date}
        onChange={(value) => handleChange(value)}
      />
        </div>
    )
}

export default MeetingDatePicker