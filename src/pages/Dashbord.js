import React from 'react'
import ContextInfo from '../components/userInfo/contextInfo/ContextInfo';
import CreateTeam from '../components/userInfo/createTeam/CreateTeam';
import DashbordComponents from '../components/userInfo/DashbordComponents';
import SmartAdjustment from '../components/userInfo/smart adjustment/SmartAdjustment';
import TeamInfo from '../components/userInfo/userTeams/teamsInfo/TeamInfo';


const Dashbord = () => {

    return (
        <ContextInfo>
         {/* <DashbordComponents/> */}
        {/* <TeamInfo/> */}
        {/* <CreateTeam/> */}
        <SmartAdjustment/>
        </ContextInfo>
    )
}

export default Dashbord
