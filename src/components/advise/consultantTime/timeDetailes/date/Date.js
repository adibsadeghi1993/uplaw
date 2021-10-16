import React from 'react'

import { Calendar } from 'react-datepicker2';
const Date = ({value,setValue}) => {
   

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
