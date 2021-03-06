import React, { useState, useContext, useEffect } from "react";
import UserStep from "../../commonFiles/userStep/UserStep";
import styles from "./detailInfo.module.css";
import Input from "./Input";
import uploadImage from "../../../../asstes/upload.svg";
import { allInputs } from "./ConstantInputs";
import DateImage from "../../../../asstes/Date.svg";
import whitearrowImage from "../../../../asstes/whitearrow.svg";
import DatePicker from "../DtaePicker/DatePicker";
import FreeServices from "./freeServices/FreeServices";
import { sendProfileImage } from "../../../../services/userInfoServices";
import { useSelector } from "react-redux";
import { UserInfoContext } from "../../../common/contextInfo/ContextInfo";

const DetailInfo = () => {
  const state = useSelector((state) => state.userInfo.userInfo);
  const { mobileNumber, userEmail } = state;

  const context = useContext(UserInfoContext);
  console.log(context);
  const {
    upLoadedImage,
    setUpLoadedImage,
    setStep,
    setProgress,
    setBirthday,
    formik,
  } = context;

  let statueBtn = true;

  const {
    postalCode,
    birthday,
    nationalCode,
    firstName,
    lastName,
    email,
    password,
    address,
    confirmPassword,
  } = formik.errors;
  if (
    !postalCode &&
    !birthday &&
    !nationalCode &&
    !firstName &&
    !lastName &&
    !email &&
    !address &&
    !password &&
    !confirmPassword
  ) {
    statueBtn = false;
  }
  const [userProfile, setUserProfile] = useState("");
  console.log(formik.errors);

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
  const firstStepHandler = () => {
    setStep((step) => step + 1);
    setProgress(25);
  };

  const sendHandlerImage = () => {
    console.log("send image");
    const formData = new FormData();
    console.log(uploadImage);
    formData.append("profile", upLoadedImage);
    sendProfileImage(formData)
      .then((res) => {
        console.log(res);
        const file = new Blob([res.data.data], { type: "image/png" });
        console.log(file);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (upLoadedImage) {
      sendHandlerImage();
    }
  }, [upLoadedImage]);

  return (
    <div className={styles.detail}>
      <UserStep stepName="?????????????? ????????" />

      <section className={styles.Inputs}>
        {allInputs.map((item) => {
          return (
            <div className={styles[item.name]}>
              <Input
                type={item.type}
                name={item.name}
                formik={formik}
                placeholder={item.placeholder}
              />
            </div>
          );
        })}
        <div className={styles.phoneNumber}>
          <Input
            type="text"
            name="phoneNumber"
            placeholder="?????????? ???????? ?????? ???? ???????? ????????"
          />
        </div>

        <div className={styles.confirmMobile}>
          <input type="text" placeholder="???? ??????????" />
          <button>?????????? ????????????</button>
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
              src={uploadImage}
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

        <div className={styles.birthday}>
          <DatePicker setBirthday={setBirthday} />
          <label htmlFor="datePicker">
            <img src={DateImage} alt="dateimage" />
          </label>
        </div>
        <div className={styles.label}>
          <label htmlFor="image">???????????????? ??????</label>
        </div>
        <div className={styles.password}>
          <Input
            type="password"
            name="password"
            placeholder=" ?????? ???????? ?????????????? ?????? ???? ???????? ????????"
          />
          <p className={styles.passwordChracter}>8 ??????????????</p>
        </div>

        <div className={styles.address}>
          <textarea
            type="text"
            name="address"
            {...formik.getFieldProps("address")}
            placeholder="  ???????? ?????? ???? ???????? ????????"
          />
          {formik.errors.address && formik.touched.address && (
            <div className={styles.error}>{formik.errors.address}</div>
          )}
        </div>
      </section>
      <div className={styles.confirmInfo}>
        <p>???????? ?????? ?????????????? ?????????? ??????</p>
        <button
          disabled={statueBtn}
          className={styles.nextbtn}
          onClick={firstStepHandler}
        >
          ?????? ?? ?????????? ??????
          <img src={whitearrowImage} alt="nextstepimage" />
        </button>
      </div>
      <FreeServices />
    </div>
  );
};

export default DetailInfo;
