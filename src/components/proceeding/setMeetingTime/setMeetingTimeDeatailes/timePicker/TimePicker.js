import React, { useState } from "react";
import "antd/dist/antd.css";
import moment from "moment";
import { TimePicker } from "antd";
import styles from "./timePicker.module.css"

const TimePickerComponent = ({setValue,value,setTime}) => {

  const format = "HH:mm";
  const onChange = (time) => {
   
    const dateTime=moment(time).format("hh:mm")
    setValue(time);
    setTime(dateTime)

  
  };
  return (
    <>
      <TimePicker
        showNow={false}
        minuteStep={15}
        defaultValue={moment("12:08", format)}
        format={format}
        style={{ width: "100%", height: "49px", borderRadius: "6px" }}
        placeholder="ساعت تشکیل جلسه را انتخاب کنید."
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default TimePickerComponent;
