
import React, { useState } from "react";
import TeamHeader from "../../userTeams/teamDetailes/teamHeader/TeamHeader";
import NewTeamHeader from "./newTeamHeader/NewTeamHeader";
import styles from "./newTeam.module.css"
import image from "../../../../asstes/upload.svg";
import arrowImage from "../../../../asstes/blue arrow.svg";
import SelectCity from "./selectCity/SelectCity";
import { useHistory } from "react-router";

const NewTeam = () => {
  const [checkboxOptions, setCheckboxOptions] = useState([]);
  const [userProfile, setUserProfile] = useState("");
  const [uploadImage, setUpLoadedImage] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [select, setSelect] = useState("startop");
  const [investment, setInvestment] = useState(0);
  const [teamProperties, setTeamProperties] = useState({
      member:"",
      serviceType:"",
      teamName:""
  });

  const history=useHistory()


  const subTeamHandler = () => {
    const oldCheckboxOptions = [...checkboxOptions];
    const updatedCheckboxOptions = [...oldCheckboxOptions, "isSubTeam"];
    setCheckboxOptions(updatedCheckboxOptions);
    if (checkboxOptions.includes("isSubTeam")) {
      const updatedCheckboxOptions = oldCheckboxOptions.filter(
        (item) => item !== "isSubTeam"
      );
      setCheckboxOptions(updatedCheckboxOptions);
    }
  };
  const investorHandler = () => {
    const oldCheckboxOptions = [...checkboxOptions];
    const updatedCheckboxOptions = [...oldCheckboxOptions, "invest"];
    setCheckboxOptions(updatedCheckboxOptions);
    if (checkboxOptions.includes("invest")) {
      const updatedCheckboxOptions = oldCheckboxOptions.filter(
        (item) => item !== "invest"
      );
      setCheckboxOptions(updatedCheckboxOptions);
    }
  };

  


  const imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setUserProfile(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);

    setUpLoadedImage(e.target.files[0]);
  };
  const changeHandler=(e)=>{
      setTeamProperties({...teamProperties,[e.target.name]:e.target.value})

  }

  const nextStepHandler=()=>{
   history.push("/inviteMember")
  }
 
  return (
    <div>
      <TeamHeader title="تیم های من/ساخت تیم جدید" active="searchTeam" />
      <NewTeamHeader />
      <section className={styles.checkbox_container}>
        <article>
          <input
            type="checkbox"
            checked={checkboxOptions.includes("isSubTeam")}
            onChange={subTeamHandler}
          />
          <label>این تیم زیر مجموعه تیم ایجاد شده دیگری در آپلا است</label>
        </article>
        <article>
          <input
            type="checkbox"
            checked={checkboxOptions.includes("invest")}
            onChange={investorHandler}
            className={styles.checkbox}
          />
          <label>نیاز به جذب سرمایه دارم</label>
        </article>
      </section>
      <section className={styles.container}>

      <div className={styles.team_name}>
          <input type="text" placeholder="نام تیم را وارد کنید" name="teamName" value={teamProperties.teamName} onChange={changeHandler}/>
      </div>
      <div className={styles.startop}>
        <div className={styles.question}><p>استارتاپ هستید یا شرکت ثبت شده؟</p></div>
       <div className={styles.check_uesrType}>
            <p onClick={()=>setSelect("company")} className={select==="company"?styles.active:styles.inactive}>شرکت</p>
        <p onClick={()=>setSelect("startop")} className={select==="startop"?styles.active:styles.inactive}>استارتاپ</p>
       </div>
      </div>
      <div className={styles.team_member}>
          <input type="text" placeholder="اعضای تیم شما جند نفر است" value={teamProperties.member} name="member"  onChange={changeHandler}/>
      </div>
      <div className={styles.company_services}>
          <input type="text" value={teamProperties.serviceType} name="serviceType" placeholder="نوع خدمات شرکت شما چیست؟" onChange={changeHandler}/>
      </div>
      <div className={styles.uploadImage}>
          {userProfile ? (
           <div className={styles.image_container}>
                <img
              src={userProfile}
              alt="profileImage"
              className={styles.profileImage}
            />
           </div>
          ) : (
            <div className={styles.image_container}>
                <img
              src={image}
              alt="profileImage"
              className={styles.imageIcon}
            />
            </div>
          )}
          <input
            type="file"
            accept="image/*"
            id="image"
            name="image-upload"
            onChange={imageHandler}
          />
           <div className={`${styles.logo} ${styles.notdisplay}`}>
            <label htmlFor="image">بارگزاری لوگو</label>
        </div>
        </div>

        <div className={`${styles.logo} ${styles.loaded_logo}`}>
            <label htmlFor="image">بارگزاری لوگو</label>
        </div>
       
  
      <div className={styles.invest}>
          <div className={styles.question}><p>آیا اقدام به جذب سرمایه کرده اید؟</p></div>
          <div className={styles.check_invest}>
              <p onClick={()=>setInvestment(1)} className={investment===1?styles.active:styles.inactive}>بله</p>
              <p onClick={()=>setInvestment(0)} className={investment===0?styles.active:styles.inactive}>خیر</p>
          </div>
         
      </div>
     

      <div className={styles.city}>
          <SelectCity selectedOption={selectedOption} setSelectedOption={setSelectedOption}/>
      </div>
      <div className={styles.next}>
         <button onClick={nextStepHandler}><span>مرحله بعد</span><img src={arrowImage} alt="مرحله بعد"/></button>
      </div>
     

      </section>
    </div>
  );
};

export default NewTeam;
