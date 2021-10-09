import React,{useEffect,useState} from "react";
import styles from "./completedDetailes.module.css";
import completedImage from "../../../../asstes/completedpic.svg";
import contractImage from "../../../../asstes/blueadjustcontract.svg";
import signatureImage from "../../../../asstes/blue signature.svg";
import adjustMeetingImage from "../../../../asstes/blueadjustmeeting.svg";
import blueArrowImage from "../../../../asstes/blue arrow.svg";
import rocketImage from "../../../../asstes/rocket3.svg";
import teamImage from "../../../../asstes/team10.svg";
import starImage from "../../../../asstes/starIcon.svg";
import smileImage from "../../../../asstes/smiling face with sunglasses emoji 1 (1).svg";
import ProgressBar from "../../commonFiles/circleProgress/ProgressBar";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

const CompletedDetailes = () => {
   const state=useSelector(state=>state.contract)
  const history= useHistory()
   const {suggestedContracts}=state
   const [width, setWidth] = useState(window.innerWidth);

   const updateDimensions = () => {
     setWidth(window.innerWidth);
   };
   useEffect(() => {
     window.addEventListener("resize", updateDimensions);
     return () => window.removeEventListener("resize", updateDimensions);
   }, []);

   let arrayOne=null
   
   let arrayTow=null

   if (width<768) {
     const middleLength=Math.ceil(suggestedContracts.length/2)
     arrayOne=suggestedContracts.slice(0,middleLength)
     arrayTow=suggestedContracts.slice(middleLength)
     console.log(arrayOne,arrayTow) 
   }

   const adjustContractHandler=(adjustTiltle)=>{
        history.push(`contract/${adjustTiltle}`)
   }

  
  
  return (
    <main className={styles.completed_detailes}>
      <section className={styles.completede_desc}>
        <p>پروفایل شما کامل و تایید شد! از بسته رایگانتون امکانات زیر باقیه!</p>
        <img src={completedImage} alt="completed" />
      </section>
      <section className={styles.completed_detailes_sectionTow}>
        <div className={styles.circle}>
         <ProgressBar title="30 از 45" subTitle="روز" persentage={30} />
        </div>

        <div className={styles.contract}>
          <img src={contractImage} className={styles.image} alt="contract"/>
          <div className={styles.descdiv}>
            <span>یک</span>تنظیم هوشمند قرارداد
          </div>
        </div>
        <div className={styles.meeting}>
          <img src={adjustMeetingImage} className={styles.image} alt="adjustmeeting" />
          <div className={styles.descdiv}>
            <span>یک</span>تنظیم صورت جلسه
          </div>
        </div>
        <div className={styles.signature}>
          <img src={signatureImage} className={styles.image} alt="signature" />
          <div className={styles.descdiv}>ثبت امضای دیجیتال</div>
        </div>
        <button className={styles.begainButton}>
          <img src={blueArrowImage} alt="arrow" />
          شروع میکنم
        </button>
      </section>
      <div className={styles.pridication}>
        <p>اسناد پرطرفدار در آپلا</p>
      </div>
      <section className={styles.completed_detailes_sectionThree}>
      {width>768 ?   suggestedContracts.map((item) => {
          return (
            <div onClick={()=>adjustContractHandler(item.title)} key={item.id} className={`${styles[item.className]} ${styles.pointerBtn}`}>
              <div className={styles.eachDocs}>
                <p>{item.title}</p>
              </div>
              <button className={styles.adjustbtn}>
                تنظیم هوشمند <img src={blueArrowImage}  alt="arrow" />
              </button>
            </div>
          );
        }):
      <section className={styles.scroolSections}>
       <div className={styles.scrool_sectionOne}>
       {arrayOne?.map((item)=>{
          return <div key={item.id} onClick={()=>adjustContractHandler(item.title)}  className={`${styles[item.className]} ${styles.pointerBtn}`}>
            <div className={styles.eachDocs}>
              <p>{item.title}</p>
            </div>
            <button className={styles.adjustbtn}>
              تنظیم هوشمند <img src={blueArrowImage}  alt="arrow" />
            </button>
          </div>
        })}
       </div>
       <div className={styles.scrool_sectionTow}>
       {arrayTow?.map((item)=>{
          return <div onClick={()=>adjustContractHandler(item.title)}  key={item.id} className={`${styles[item.className]} ${styles.pointerBtn}`}>
            <div className={styles.eachDocs}>
              <p>{item.title}</p>
            </div>
            <button className={styles.adjustbtn}>
              تنظیم هوشمند <img src={blueArrowImage}  alt="arrow" />
            </button>
          </div>
        })}
       </div>
        
        
        </section>
       
        
        
        
        
        
        
        }
      </section>
      <section className={styles.completed_detailes_sectionFour}>
        <p className={styles.raise_acount}>
          همین امروز اکانتتون رو ارتقا بدید!
        </p>

        <div className={styles.purchaseAcount_services}>
          <div className={styles.purchaseAcount}>
            <div>
              <img className={styles.rocket} src={rocketImage} alt="rocket" />
            </div>
            <div className={styles.startup}>
              <button className={styles.startup_purchase}>
                خریداکانت استارتاپی
              </button>
              <p className={styles.startup_price}>ماهانه 99 هزار تومان</p>
            </div>
          </div>
          <div className={styles.services}>
            <div className={styles.createTeam}>
              <img src={teamImage} alt="team" />
              <p>امکان ایجاد یک تیم 10 نفره</p>
            </div>
            <div className={styles.adjustDocs}>
              <img src={starImage} alt="adjust docs" />
              <p>تنظیم هوشمند 10 سند حقوقی و مدیریتی</p>
            </div>
          </div>
        </div>
       <div className={styles.smileImage}> <img  src={smileImage} alt="smile"/></div>
      </section>
   
    </main>
  );
};

export default CompletedDetailes;
