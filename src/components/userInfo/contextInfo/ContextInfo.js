import React,{useState} from "react";
import { useFormik } from "formik";
import { validationSchema } from "./AllValidation";
import { initialValues } from "./AllInitialValues";
export const UserInfoContext = React.createContext();
const ContextInfo = ({ children }) => {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(50);
  const [upLoadedImage, setUpLoadedImage] = useState(null);
  const [bithday, setBirthday] = useState("");
  const [job, setJob] = useState([]);
  const [skills, setSkills] = useState([]);
  const formik = useFormik({
    initialValues,
    validateOnMount: true,
    validationSchema,
  });
  return (
    <UserInfoContext.Provider
      value={{
        step,
        setProgress,
        setStep,
        skills,
        setSkills,
        job,
        setJob,
        progress,
        formik,
        bithday,
        setBirthday,
        upLoadedImage,
        setUpLoadedImage,
      }}
    >
      {children}
    </UserInfoContext.Provider>
  );
};

export default ContextInfo;
