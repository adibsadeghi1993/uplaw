import { CHOOSED_TEAM_FOR_ADVISE } from "../constants/AdviseConstants"

export const setAdviseTeam=(data)=>{
  return {
      type:CHOOSED_TEAM_FOR_ADVISE,
      payload:data
  }
}