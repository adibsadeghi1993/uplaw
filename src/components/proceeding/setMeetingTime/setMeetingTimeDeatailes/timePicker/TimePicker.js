import React from "react";
import TimePicker from "rc-time-picker";
import moment from "moment";
import "rc-time-picker/assets/index.css";
import styles from "./timePicke.module.css";

const TimePickerComponent = ({ setValue, value, setTime }) => {
  const handleValueChange = (currentTime) => {
  const now= moment(currentTime).format("hh:mm")
   console.log(now)

    setValue(now);
    setTime(now);
    // console.log(value)
  };
  return (
    <>
      <TimePicker
        className={styles.timePicker}
        // defaultValue={value}
        minuteStep={15}
        placeholder="زمان تشکیل جلسه را تعیین کنید"
        showSecond={false}
        onChange={handleValueChange}
      />
    </>
  );
};

export default TimePickerComponent;
