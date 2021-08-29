import React from "react";
import styles from "./completedDetailes.module.css";
import completedImage from "../../../../asstes/completedpic.svg";
import { buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import contractImage from "../../../../asstes/blueadjustcontract.svg"
import signatureImage from "../../../../asstes/blue signature.svg"
import adjustMeetingImage from "../../../../asstes/blueadjustmeeting.svg"
import blueArrowImage from "../../../../asstes/blue arrow.svg"

const CompletedDetailes = () => {
  const percentage = 66;
  return (
    <main className={styles.completed_detailes}>
      <section className={styles.completede_desc}>
        <p>پروفایل شما کامل و تایید شد! از بسته رایگانتون امکانات زیر باقیه!</p>
        <img src={completedImage} />
      </section>
      <section className={styles.completed_detailes_sectionTow}>
        <div className={styles.circle}>
          <CircularProgressbarWithChildren strokeWidth={26} styles={buildStyles({
              pathColor: "#3770E2",
            })} value={30} maxValue={45}>
            <div style={{ marginTop: -5 }} className={styles.cricular_desc}>
             <p style={{color:"black",fontSize: 14,fontWeight:900}}>30 از 45</p>
             <p style={{color:"black",fontSize: 14,fontWeight:900}}>روز</p>
            </div>
          </CircularProgressbarWithChildren>
        </div>
        
        <div className={styles.contract}><img src={contractImage} className={styles.image} /><div className={styles.descdiv}><span>یک</span>تنظیم هوشمند قرارداد</div></div>
        <div className={styles.meeting}><img src={adjustMeetingImage} className={styles.image}/><div  className={styles.descdiv}><span>یک</span>تنظیم صورت جلسه</div></div>
        <div className={styles.signature}><img src={signatureImage} className={styles.image}/><div  className={styles.descdiv}>ثبت امضای دیجیتال</div></div>
        <button className={styles.begainButton}><img src={blueArrowImage}/>شروع میکنم</button>
      </section>
    </main>
  );
};

export default CompletedDetailes;
