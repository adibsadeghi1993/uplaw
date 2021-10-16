import React,{useState} from 'react'
import CommonConsultan from '../../../common/commonConsultant/CommonConsultan'
import Date from './date/Date'
import momentJalaali from 'moment-jalaali';
import styles from "./TimeDetailes.module.css"
import { StylesContext } from '@mui/styles';

const TimeDeatiles = () => {
    const [value, setValue] = useState(momentJalaali())
    const [time, setTime] = useState("30")
    return (
        <div>
            <CommonConsultan subject="زمان مشاوره را انتخاب کنید"/>
        <section>
            <article>
            <Date value={value} setValue={setValue}/>
            </article>
            <article>
                <div>
                    <p onClick={()=>setTime("30")} className={time==="30"&&styles.active}>30 دقیقه</p>
                   <p onClick={()=>setTime("45")} className={time==="45"&&styles.active}>45 دقیقه</p>
                   <p onClick={()=>setTime("60")} className={time==="60"&&styles.active}>60 دقیقه</p>
                </div>
           
            </article>
        </section>
            
        </div>
    )
}

export default TimeDeatiles
