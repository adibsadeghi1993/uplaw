import React,{useContext} from "react";
import BasicInfo from "./basicInfo/BasicInfo";
import Contact from "./contact/Contact";
import { UserInfoContext } from "./contextInfo/ContextInfo";
import JobIssues from "./jobIssues/JobIssues";
import Verification from "./userVerification/Verification";



const DashbordComponents = () => {
const {step} = useContext(UserInfoContext)
  switch (step) {
    case 1:
      return <BasicInfo />;
    case 2:
      return <JobIssues />;
    case 3:
      return <Contact />;
    case 4:
      return <Verification/>;

    default:
      break;
  }
  return <div></div>;
};

export default DashbordComponents;
