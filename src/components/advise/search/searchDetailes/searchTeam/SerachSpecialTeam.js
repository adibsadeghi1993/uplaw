import React from 'react'
import axios from "axios";
import AsyncSelect from 'react-select/async';
import "./searchSpecialTeam.css"

const SearchSpecialTeam = ({setSelectedOption,selectedOption}) => {
   
  const handleChange = (selectedOption) => {
    
    setSelectedOption(selectedOption );
    console.log(`Option selected:`, selectedOption);
  };

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
         value={selectedOption}
      styles={customStyles}
        isRtl={true}
        isSearchable={true}
        className="react-select-container"
        classNamePrefix="react-select"
        placeholder="تیم مورد نظر را در اپلا جستجو کنید"
      />
    </div>
  );
};


export default SearchSpecialTeam