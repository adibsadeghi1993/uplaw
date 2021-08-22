import React,{useState} from 'react'
import BasicInfo from '../components/userInfo/basicInfo/BasicInfo';
import JobIssues from '../components/userInfo/jobIssues/JobIssues';
import Contact from '../components/userInfo/contact/Contact';
import Verfication from '../components/userInfo/userVerification/Verfication';
import ContextInfo from '../components/userInfo/contextInfo/ContextInfo';
import DashbordComponents from '../components/userInfo/DashbordComponents';

const Dashbord = () => {

    return (
        <ContextInfo>
         <DashbordComponents/>
        </ContextInfo>
    )
}

export default Dashbord
