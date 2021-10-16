import React,{useState} from 'react'
import momentJalaali from 'moment-jalaali';
import { Calendar } from 'react-datepicker2';
const Date = () => {
    const [value, setValue] = useState(momentJalaali())

    const getCustomFormat=(inputValue)=> {
        if (!inputValue)
          return '';
        const inputFormat = 'jYYYY/jM/jD';
        return inputValue.locale('fa').format(inputFormat);
          
      }
    return (
        <div>
             <Calendar
        value={this.state.value}
        isGregorian={false}
        onChange={value => setValue(value)}
      />
      <br />
     
      <h2>
        selected date: {getCustomFormat(value)}
      </h2>
            
        </div>
    )
}

export default Date
