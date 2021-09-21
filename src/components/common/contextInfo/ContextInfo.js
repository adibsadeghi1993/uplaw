import React, { useState } from "react";
import { useFormik } from "formik";
import { validationSchema } from "./AllValidation";
import { initialValues } from "./AllInitialValues";
import uplawImage from "../../../asstes/uplaw.png"
export const UserInfoContext = React.createContext();
const ContextInfo = ({ children }) => {
  const [step, setStep] = useState(4);
  const [progress, setProgress] = useState(0);
  const [upLoadedImage, setUpLoadedImage] = useState(null);
  const [upLoadedNationalCodeImage, setUpLoadedNationalCodeImage] =
    useState(null);
  const [bithday, setBirthday] = useState("");
  const [job, setJob] = useState([]);
  const [skills, setSkills] = useState([]);
  const [contractStep, setContractStep] = useState(1);
  const [team, setTeam] = useState([
    { teamName: "آپلا", id: 1, memberShip: 8, src: uplawImage },
    { teamName: "حسینی فاینانس", id: 2, memberShip: 8, src: uplawImage },
    { teamName: "ساران فن آور گستران اطلس", id: 3, memberShip: 8, src: uplawImage },

  ]);
  const [teamIncludedMe, setTeamIncludedMe] = useState([
    { teamName: "تیم هایی که در ان عضو هستم", id: 1, memberShip: 8, src: uplawImage },
    { teamName: "حسینی فاینانس", id: 2, memberShip: 8, src: uplawImage },
    { teamName: "ساران فن آور گستران اطلس", id: 3, memberShip: 8, src: uplawImage },

  ]);

  const [choosedContract, setChoosedContract] = useState("قرارداد استخدام کارشناس تولید محتوا");


  const formik = useFormik({
    initialValues,
    validateOnMount: true,
    validationSchema,
    enableReinitialize: true,
  });
  return (
    <UserInfoContext.Provider
      value={{
        step,
        setProgress,
        progress,
        setStep,
        skills,
        setSkills,
        job,
        setJob,
        formik,
        bithday,
        setBirthday,
        upLoadedImage,
        setUpLoadedImage,
        setUpLoadedNationalCodeImage,
        contractStep,
        setContractStep,
        team,
        setTeam,
        teamIncludedMe,
        setTeamIncludedMe,
        setChoosedContract,
        choosedContract
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

export default ContextInfo;
