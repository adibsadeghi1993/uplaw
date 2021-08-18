import React from "react";
import DatePicker from "react-datepicker2";
import momentJalaali from "moment-jalaali";
import classes from "./datePicker.module.scss";
import { useState } from "react";

const BirthDay = ({ setBirthday }) => {
  const [value, setValue] = useState(momentJalaali("1396/7/6", "jYYYY/jM/jD"));

  const handleChange = (value) => {
    setValue(value);
    const formattedDate = `${value.jYear()}/${
      value.jMonth() + 1
    }/${value.jDate()}`;
    setBirthday(formattedDate);
  };
  return (
    <div className={classes.formControl}>
      <DatePicker
        calssName={classes.input}
        placeholder="تاریخ تولد خود را وارد کنید"
        timePicker={false}
        showTodayButton={false}
        isGregorian={false}
        // value={value}
        onChange={(value) => handleChange(value)}
      />
    </div>
  );
};
export default BirthDay;
