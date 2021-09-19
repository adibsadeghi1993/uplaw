import React,{useContext} from "react";
import { UserInfoContext } from "../../../common/contextInfo/ContextInfo";

import styles from "./jobDetailes.module.css"

const SelectComponent = ({ selectedOptions,name}) => {
  const {formik} = useContext(UserInfoContext)
  return (
    <>
      <select className={styles.select} name={name} {...formik.getFieldProps({name})} >
        {selectedOptions.map((item) => {
          return <option className={styles.option}  key={item.value} value={item.value}>{item.label}</option>;
        })}
      </select>
      {formik.errors[name]&& formik.touched[name]&& (
          <div className={styles.error}>{formik.errors[name]}</div>
        )}
    </>
  );
};

export default SelectComponent;
