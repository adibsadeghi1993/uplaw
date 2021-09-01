import React from 'react'
import ContextInfo from '../components/userInfo/contextInfo/ContextInfo';
import DashbordComponents from '../components/userInfo/DashbordComponents';
import UserTeams from '../components/userInfo/userTeams/UserTeams';

const Dashbord = () => {

    return (
        <ContextInfo>
         {/* <DashbordComponents/> */}
         <UserTeams/>
        </ContextInfo>
    )
}

export default Dashbord
