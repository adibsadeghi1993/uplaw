import React,{useContext} from "react";
import UserStep from "../../commonFiles/userStep/UserStep";
import styles from "./contactDetailes.module.css";
import linkedinIcon from "../../../../asstes/linkedin.svg"
import driblIcon from "../../../../asstes/dribl.svg"
import portfoIcon from "../../../../asstes/portfo.svg"
import githubIcon from "../../../../asstes/github.svg"
import gitlabIcon from "../../../../asstes/gitlab.svg"
import instaIcon from "../../../../asstes/insta.svg"
import whiteArrowImage from "../../../../asstes/whitearrow.svg"
import ContactInputs from "./contactInputs/ContactInputs";
import FreeServices from "../../basicInfo/detail/freeServices/FreeServices";
import { UserInfoContext } from "../../contextInfo/ContextInfo";


const ContactDetailes = () => {
 const {setStep,setProgress} =useContext(UserInfoContext)

    const nextStepHandler=()=>{

      setStep(step=>step+1)
      setProgress(75)
    }
  return (
    <section className={styles.contact_detaile}>
      <UserStep stepName="راه های ارتباطی" />
      <section className={styles.contact_detaile_inputs}>
        <div className={styles.linkedin}>
        <img src={linkedinIcon} alt={linkedinIcon} className={styles.socialMediaicon}/>
            <ContactInputs name="linkedin" placeholder="آدرس اکانت لینکدین خود راوارد کنید."/>
            
        </div>
        <div className={styles.dribl}>
        <img src={driblIcon} alt={driblIcon} className={styles.socialMediaicon}/>
        <ContactInputs name="dribl" placeholder="آدرس اکانت دریبل خود راوارد کنید."/>
       
        </div>
        <div className={styles.portfo}>
        <img src={portfoIcon} alt={portfoIcon} className={styles.socialMediaicon}/>
        <ContactInputs name="portfo" placeholder="آدرس اکانت پورتفو خود راوارد کنید."/>

        </div>
        <div className={styles.github}>
        <img src={githubIcon} alt={githubIcon} className={styles.socialMediaicon}/>
        <ContactInputs name="github" placeholder="آدرس اکانت گیت هاب خود راوارد کنید."/>
  
        </div>
        <div className={styles.gitlab}>
        <img src={gitlabIcon} alt={gitlabIcon} className={styles.socialMediaicon}/>
        <ContactInputs name="gitlab" placeholder="آدرس اکانت گیت لب خود راوارد کنید."/>
        
        </div>
        <div className={styles.instagram}>
        <img src={instaIcon} alt={instaIcon} className={styles.socialMediaicon}/>
        <ContactInputs name="instagram" placeholder="آدرس اکانت اینستاگرام خود راوارد کنید."/>
        
        </div>
      </section>
      <div className={styles.contact_nextStep}>
          <button onClick={nextStepHandler} className={styles.nextbtn}>
            ثبت و مرحله بعد
            <img src={whiteArrowImage} />
          </button>
        </div>
        <FreeServices/>
    </section>
  );
};

export default ContactDetailes;
