import React,{useState,useEffect} from 'react'
import CommonConsultan from '../../../common/commonConsultant/CommonConsultan'
import Date from './date/Date'
import momentJalaali from 'moment-jalaali';
import styles from "./TimeDetailes.module.css"
import { useSelector } from 'react-redux';
import arrowImage from "../../../../asstes/blue arrow.svg"


const TimeDeatiles = () => {
    const [value, setValue] = useState(momentJalaali())
    const [formatedValue, setFormatedValue] = useState(null)
    const [time, setTime] = useState("30")
    const [timeInterval, setTimeInterval] = useState(null)
    const times = useSelector(state => state.advise.times)

    useEffect(() => {
      const selectedTime=times[0]
      setTimeInterval(selectedTime)
      
    }, [])
    const intervalHandler=(time)=>{
        setTimeInterval(time)
    }
    return (
        <div>
            <CommonConsultan subject="زمان مشاوره را انتخاب کنید"/>
        <section className={styles.main_setTime}>
            <article className={styles.setDate}>
            <Date value={value} setValue={setValue} setFormatedValue={setFormatedValue}/>
            </article>
            <article className={styles.setTime}>
                <div className={styles.time_picker}>
                    <p onClick={()=>setTime("30")} className={time==="30"&&styles.active}>30 دقیقه</p>
                   <p onClick={()=>setTime("45")} className={time==="45"&&styles.active}>45 دقیقه</p>
                   <p onClick={()=>setTime("60")} className={time==="60"&&styles.active}>60 دقیقه</p>
                </div>
                <div className={styles.time_interval}>
                    {times?.map((item)=>(
                        <p className={timeInterval?.id===item.id && styles.active} onClick={()=>intervalHandler(item)} key={item.id}>{item.time}</p>
                    ))}
                </div>
                <div className={styles.next_btn}>
                    <button><span>مرحله بعد</span><img src={arrowImage} alt="مرحله بعد"/></button>
                </div>
           
            </article>
        </section>
            
        </div>
    )
}

export default TimeDeatiles
