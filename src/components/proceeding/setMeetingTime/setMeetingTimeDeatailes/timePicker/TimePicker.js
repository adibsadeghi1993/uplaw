import "antd/dist/antd.css";
import moment from "moment";
import { TimePicker } from "antd";


const TimePickerComponent = ({setValue,value}) => {

  const format = "HH:mm";
  const onChange = (time) => {
    setValue(time);
  };
  return (
    <>
      <TimePicker
        showNow={false}
        minuteStep={15}
        defaultValue={moment("12:08", format)}
        format={format}
        style={{ width: "100%", height: "49px", borderRadius: "6px",outline:"none" }}
        placeholder="ساعت تشکیل جلسه را انتخاب کنید."
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default TimePickerComponent;
