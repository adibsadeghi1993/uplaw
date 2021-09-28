import axios from "axios";
import React, { useState } from "react";
import AsyncSelect from 'react-select/async';
import "./selectComponent.css"

const SelectComponent = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const handleChange = (selectedOption) => {
    
    setSelectedOption(selectedOption );
    console.log(`Option selected:`, selectedOption);
  };
  console.log(selectedOption)
  const loadOptions= async(inputText,callback)=>{
    const response= await axios.get(`https://www.googleapis.com/books/v1/volumes?country
    =US&projection=lite&printType=books&key=AIzaSyD6SlU9JUr7Z
    -3SOOy0TfZTJtqv_EEqfZY&q=intitle:${inputText}&startIndex=0&maxResults=5`)
    const {data:{items}}=response
callback(items.map((item)=>{
  return {label:item.volumeInfo.title,value:item.volumeInfo.title}
}))
  }

  const customStyles = {
    control: (provided) => ({
      ...provided,
      boxShadow:"none",
      outline:"none",

    }),
  };

  return (
    <div>
      <AsyncSelect
        onChange={handleChange}
        loadOptions={loadOptions}
        defaultOptions={options}
         value={selectedOption}
      styles={customStyles}
        isRtl={true}
        isSearchable={true}
        className="react-select-container"
        classNamePrefix="react-select"
        placeholder="برای چه منظوری قصد تنظیم صورت جلسه دارید ؟ تایپ کنید یا از موارد پیشفرض انتخاب کنید"
      />
    </div>
  );
};

export default SelectComponent;
