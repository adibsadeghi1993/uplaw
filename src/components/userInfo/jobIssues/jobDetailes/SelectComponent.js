import React from "react";

const SelectComponent = ({ selectedOptions,name,formik }) => {
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
