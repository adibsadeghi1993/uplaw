import React,{useState} from 'react'
import { useFormik } from 'formik';
import BasicInfo from '../components/userInfo/basicInfo/BasicInfo';
import JobIssues from '../components/userInfo/jobIssues/JobIssues';
import Contact from '../components/userInfo/contact/Contact';
import Verfication from '../components/userInfo/userVerification/Verfication';

const Dashbord = () => {
    const [step, setStep] = useState(1);
    switch (step) {
        case 1:
          return <BasicInfo  setStep={setStep} step={step}  />;
        case 2:
          return <JobIssues  setStep={setStep} step={step}  />;
        case 3:
          return <Contact  setStep={setStep} step={step}  />;
        case 4:
          return <Verfication  setStep={setStep} step={step}  />;
         
        default:
          break;
      }
    return (
        <div>
           {/* <BasicInfo/> */}
        </div>
    )
}

export default Dashbord
