import React,{useEffect} from "react";
import styles from "./date.module.scss";


import { Calendar } from "react-datepicker2";
const Date = ({ value, setValue,setFormatedValue }) => {
  const getCustomFormat = (inputValue) => {
    if (!inputValue) return "";
    const inputFormat = "jYYYY/jM/jD";
    return inputValue.locale("fa").format(inputFormat);
  };
  useEffect(() => {
    const formatedValue=getCustomFormat(value)
    setFormatedValue(formatedValue)
  }, [value])
  return (
    <div>
      <Calendar
        value={value}
        isGregorian={false}
        onChange={(value) => setValue(value)}
        className={styles.picker}
      />

    </div>
  );
};

export default Date;
