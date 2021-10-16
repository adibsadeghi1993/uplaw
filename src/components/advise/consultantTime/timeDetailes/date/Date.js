import React from "react";
import styles from "./date.module.scss";


import { Calendar } from "react-datepicker2";
const Date = ({ value, setValue }) => {
  const getCustomFormat = (inputValue) => {
    if (!inputValue) return "";
    const inputFormat = "jYYYY/jM/jD";
    return inputValue.locale("fa").format(inputFormat);
  };
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
