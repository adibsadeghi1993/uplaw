import axios from "axios";
import AsyncSelect from 'react-select/async';
import "./selectContract.css"

const SelectContract = ({setSelectedOption,selectedOption}) => {


 
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

  return (
    <div>
      <AsyncSelect
        onChange={handleChange}
        loadOptions={loadOptions}
         value={selectedOption}
        isRtl={true}
        isSearchable={true}
        className="react-select-container"
        classNamePrefix="react-select"
        placeholder="نام سند مورد نظر خود را وارد کنید.برای مثال قرارداد استخدام برنامه نویس"
      />
    </div>
  );
};

export default SelectContract;