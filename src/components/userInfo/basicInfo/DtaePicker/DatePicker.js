import React from "react";
import DatePicker from "react-datepicker2";
import momentJalaali from "moment-jalaali";
import classes from "./datePicker.module.css";
import { useState } from "react";
const BirthDay = ({ setBirthday }) => {
  const [value, setValue] = useState(momentJalaali());
  

  const handleChange = (value) => {
    setValue(value);
    const now =value
    const formattedDate = now.format("M / D / YYYY")
    console.log(formattedDate) 
    setBirthday(formattedDate);
  };
  return (
    <div className={classes.formControl}>
      <DatePicker
        calssName={classes.input}
        placeholder="تاریخ تولد خود را وارد کنید"
        timePicker={false}
        id="datePicker"
        showTodayButton={false}
        isGregorian={false}
        value={value}
        onChange={(value) => handleChange(value)}
      />
    </div>
  );
};
export default BirthDay;
