import React from "react";

const SelectComponent = ({ selectedOptions,name }) => {
  return (
    <>
      <select name={name} >
        {selectedOptions.map((item) => {
          return <option key={item.value} value={item.value}>{item.label}</option>;
        })}
      </select>
    </>
  );
};

export default SelectComponent;
