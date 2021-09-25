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
        <div className={styles.timePicker}>
            <TimePicker style={{width:"100%",marginTop:"22px"}} placeholder="plese enter your time" value={value} onChange={onChange} />
        </div>
    )
}

export default TimePickerComponent
