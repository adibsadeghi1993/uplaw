import React from 'react'
import ContextInfo from '../components/userInfo/contextInfo/ContextInfo';
import DashbordComponents from '../components/userInfo/DashbordComponents';
import TeamInfo from '../components/userInfo/userTeams/teamsInfo/TeamInfo';


const Dashbord = () => {

    return (
        <ContextInfo>
         {/* <DashbordComponents/> */}
        <TeamInfo/>
        </ContextInfo>
    )
}

export default Dashbord
