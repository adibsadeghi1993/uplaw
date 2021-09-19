import React,{useContext} from "react";
import { UserInfoContext } from "../common/contextInfo/ContextInfo";
import BasicInfo from "./basicInfo/BasicInfo";
import CompletedInfo from "./completedInfo/CompletedInfo";
import Contact from "./contact/Contact";
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
      case 5:
        return <CompletedInfo/>;

    default:
      break;
  }
  return <div></div>;
};

export default DashbordComponents;
