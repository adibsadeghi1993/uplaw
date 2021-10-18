import React from 'react'
import AdviseType from '../components/advise/adviseType/AdviseType'
import CreateNewTeam from '../components/teams/createNewTeam/CreateNewTeam'
import InviteMember from '../components/teams/iniviteMember/InviteMember'
import MyTeam from '../components/teams/myTeam/MyTeam'
import ProfileTeam from '../components/teams/profileTeam/ProfileTeam'
import SpecialTeam from '../components/teams/serchTeam/SpecialTeam'
import TeamAdmin from '../components/teams/teamAdmin/TeamAdmin'
import UserTeams from '../components/teams/userTeams/UserTeams'

import CreateTeam from '../components/userInfo/createTeam/CreateTeam'
// import TeamInfo from '../components/userInfo/userTeams/teamsInfo/TeamInfo'

const Team = () => {
    return (
        <div>
            {/* <CreateTeam/> */}
            {/* <TeamInfo/> */}
            {/* <UserTeams/> */}
            {/* <TeamAdmin/> */}
            {/* <MyTeam/> */}
            {/* <CreateNewTeam/> */}
            {/* <InviteMember/> */}
            <SpecialTeam/>
            {/* <ProfileTeam/> */}
            {/* <AdviseType/> */}
        </div>
    )
}

export default Team
