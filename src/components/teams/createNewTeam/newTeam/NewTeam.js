
import React, { useState } from "react";
import TeamHeader from "../../userTeams/teamDetailes/teamHeader/TeamHeader";
import NewTeamHeader from "./newTeamHeader/NewTeamHeader";
import styles from "./newTeam.module.css"
import image from "../../../../asstes/upload.svg";
import arrowImage from "../../../../asstes/blue arrow.svg";
import SelectCity from "./selectCity/SelectCity";

const NewTeam = () => {
  const [checkboxOptions, setCheckboxOptions] = useState([]);
  const [userProfile, setUserProfile] = useState("");
  const [uploadImage, setUpLoadedImage] = useState("");
  const [selectedOption, setSelectedOption,] = useState("");

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
  return (
    <div>
      <TeamHeader title="تیم های من/ساخت تیم جدید" />
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
          <input type="text" placeholder="نام تیم را وارد کنید"/>
      </div>
      <div className={styles.startop}>
        <div><p>استارتاپ هستید یا شرکت ثبت شده؟</p></div>
       <div>
            <p>شرکت</p>
        <p>استارتاپ</p>
       </div>
      </div>

      <div className={styles.uploadImage}>
          {userProfile ? (
            <img
              src={userProfile}
              alt="profileImage"
              className={styles.profileImage}
            />
          ) : (
            <img
              src={image}
              alt="profileImage"
              className={styles.imageIcon}
            />
          )}
          <input
            type="file"
            accept="image/*"
            id="image"
            name="image-upload"
            onChange={imageHandler}
          />
        </div>
        <div className={styles.logo}>
            <label htmlFor="image">بارگزاری لوگو</label>
        </div>
        <div className={styles.team_member}>
          <input type="text" placeholder="اعضای تیم شما جند نفر است"/>
      </div>
      <div className={styles.company_services}>
          <input type="text" placeholder="نوع خدمات شرکت شما چیست؟"/>
      </div>
      <div className={styles.invest}>
          <div>آیا اقدام به جذب سرمایه کرده اید؟</div>
          <div>
              <p>بله</p>
              <p>خیر</p>
          </div>
         
      </div>
      <div className={styles.next}>
         <button><span>مرحله بعد</span><img src={arrowImage} alt="مرحله بعد"/></button>
      </div>

      <div className={styles.city}>
          <SelectCity/>
      </div>
     

      </section>
    </div>
  );
};

export default NewTeam;
