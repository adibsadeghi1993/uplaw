import React, { useState,useEffect } from "react";
import TeamHeader from "../../userTeams/teamDetailes/teamHeader/TeamHeader";
import NewTeamHeader from "./newTeamHeader/NewTeamHeader";
import styles from "./newTeam.module.css";
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
  const [disabledBtn, setDisabledBtn] = useState(true);
  const [teamProperties, setTeamProperties] = useState({
    member: "",
    serviceType: "",
    teamName: "",
  });

  const history = useHistory();

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
  const changeHandler = (e) => {
    setTeamProperties({ ...teamProperties, [e.target.name]: e.target.value });
  };

 useEffect(() => {
  if(teamProperties.member && teamProperties.serviceType && teamProperties.teamName && selectedOption ){
    setDisabledBtn(false)
   
  }

 }, [teamProperties,selectedOption])
  const nextStepHandler = () => {

    if(teamProperties.member && teamProperties.serviceType && teamProperties.teamName  ){
      setDisabledBtn(false)
      history.push("/inviteMember");
    }
   
  };

  return (
    <div>
      <TeamHeader title="?????? ?????? ????/???????? ?????? ????????" active="searchTeam" />
      <NewTeamHeader disabledBtn={disabledBtn} />
      <section className={styles.checkbox_container}>
        <article>
          <input
            type="checkbox"
            checked={checkboxOptions.includes("isSubTeam")}
            onChange={subTeamHandler}
          />
          <label>?????? ?????? ?????? ???????????? ?????? ?????????? ?????? ?????????? ???? ???????? ??????</label>
        </article>
        <article>
          <input
            type="checkbox"
            checked={checkboxOptions.includes("invest")}
            onChange={investorHandler}
            className={styles.checkbox}
          />
          <label>???????? ???? ?????? ???????????? ????????</label>
        </article>
      </section>
      <section className={styles.container}>
        <div className={styles.team_name}>
          <input
            type="text"
            placeholder="?????? ?????? ???? ???????? ????????"
            name="teamName"
            value={teamProperties.teamName}
            onChange={changeHandler}
          />
        </div>
        <div className={styles.startop}>
          <div className={styles.question}>
            <p>???????????????? ?????????? ???? ???????? ?????? ????????</p>
          </div>
          <div className={styles.check_uesrType}>
            <p
              onClick={() => setSelect("company")}
              className={select === "company" ? styles.active : styles.inactive}
            >
              ????????
            </p>
            <p
              onClick={() => setSelect("startop")}
              className={select === "startop" ? styles.active : styles.inactive}
            >
              ????????????????
            </p>
          </div>
        </div>
        <div className={styles.team_member}>
          <input
            type="text"
            placeholder="?????????? ?????? ?????? ?????? ?????? ??????"
            value={teamProperties.member}
            name="member"
            onChange={changeHandler}
          />
        </div>
        <div className={styles.company_services}>
          <input
            type="text"
            value={teamProperties.serviceType}
            name="serviceType"
            placeholder="?????? ?????????? ???????? ?????? ??????????"
            onChange={changeHandler}
          />
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
            <label htmlFor="image">???????????????? ????????</label>
          </div>
        </div>

        <div className={`${styles.logo} ${styles.loaded_logo}`}>
          <label htmlFor="image">???????????????? ????????</label>
        </div>

        <div className={styles.invest}>
          <div className={styles.question}>
            <p>?????? ?????????? ???? ?????? ???????????? ???????? ????????</p>
          </div>
          <div className={styles.check_invest}>
            <p
              onClick={() => setInvestment(1)}
              className={investment === 1 ? styles.active : styles.inactive}
            >
              ??????
            </p>
            <p
              onClick={() => setInvestment(0)}
              className={investment === 0 ? styles.active : styles.inactive}
            >
              ??????
            </p>
          </div>
        </div>

        <div className={styles.city}>
          <SelectCity
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
        <div className={styles.next}>
          <button disabled={disabledBtn} onClick={nextStepHandler}>
            <span>?????????? ??????</span>
            <img src={arrowImage} alt="?????????? ??????" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default NewTeam;
