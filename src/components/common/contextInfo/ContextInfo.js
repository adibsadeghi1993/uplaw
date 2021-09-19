import React,{useState} from "react";
import { useFormik } from "formik";
import { validationSchema } from "./AllValidation";
import { initialValues } from "./AllInitialValues";
export const UserInfoContext = React.createContext();
const ContextInfo = ({ children }) => {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [upLoadedImage, setUpLoadedImage] = useState(null);
  const [upLoadedNationalCodeImage, setUpLoadedNationalCodeImage] = useState(null);
  const [bithday, setBirthday] = useState("");
  const [job, setJob] = useState([]);
  const [skills, setSkills] = useState([]);
 


  const formik = useFormik({
    initialValues,
    validateOnMount: true,
    validationSchema,
    enableReinitialize:true
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
        setUpLoadedNationalCodeImage
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

export default ContextInfo;
