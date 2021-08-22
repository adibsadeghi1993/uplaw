import React,{useContext} from "react";
import { UserInfoContext } from "../../contextInfo/ContextInfo";

const SelectComponent = ({ selectedOptions,name}) => {
  const {formik} = useContext(UserInfoContext)
  return (
    <>
      <select name={name} {...formik.getFieldProps({name})} >
        {selectedOptions.map((item) => {
          return <option key={item.value} value={item.value}>{item.label}</option>;
        })}
      </select>
      {formik.errors[name]&& formik.touched[name]&& (
          <div className="error">{formik.errors[name]}</div>
        )}
    </>
  );
};

export default SelectComponent;
