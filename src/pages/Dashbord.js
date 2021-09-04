import React from 'react'
import ContextInfo from '../components/userInfo/contextInfo/ContextInfo';
import CreateTeam from '../components/userInfo/createTeam/CreateTeam';
import DashbordComponents from '../components/userInfo/DashbordComponents';
import TeamInfo from '../components/userInfo/userTeams/teamsInfo/TeamInfo';


const Dashbord = () => {

    return (
        <ContextInfo>
         <DashbordComponents/>
        {/* <TeamInfo/> */}
        {/* <CreateTeam/> */}
        </ContextInfo>
    )
}

export default Dashbord
