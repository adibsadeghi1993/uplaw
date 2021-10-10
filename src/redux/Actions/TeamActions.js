import { SELECTED_TEAM } from "../constants/TeamConstants"

export const selectedTeamAction=(selectedTeam)=>{
    return {
        payload:selectedTeam,
        type:SELECTED_TEAM
    }
}