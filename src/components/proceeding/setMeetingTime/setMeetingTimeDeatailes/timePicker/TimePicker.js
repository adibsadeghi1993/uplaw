import React,{useState} from 'react'
import styles from  "./timePicker.module.css"
import 'antd/dist/antd.css';
import { TimePicker } from 'antd';

const TimePickerComponent = () => {
    const [value, setValue] = useState(null);

    const onChange = time => {
      setValue(time);
    };
    return (
        <>
            <TimePicker style={{width:"100%"}} placeholder="plese enter your time" value={value} onChange={onChange} />
        </>
    )
}

export default TimePickerComponent
