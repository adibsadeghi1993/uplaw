
import uplawImage from "../../asstes/uplaw.png"
import { SELECTED_TEAM } from "../constants/TeamConstants"


const initialState={
   myTeam:[
    { teamName: "آپلا", id: 1, memberShip: 8, src: uplawImage },
    { teamName: "حسینی فاینانس", id: 2, memberShip: 8, src: uplawImage },
    { teamName: "ساران فن آور گستران اطلس", id: 3, memberShip: 8, src: uplawImage },

  ],
  teamIncudedMe:[
    { teamName: "تیم هایی که در ان عضو هستم", id: 1, memberShip: 8, src: uplawImage },
    { teamName: "حسینی فاینانس", id: 2, memberShip: 8, src: uplawImage },
    { teamName: "ساران فن آور گستران اطلس", id: 3, memberShip: 8, src: uplawImage },

  ],
  selectedTeam:""


}



export const teamReducer=(state=initialState,{type,payload})=>{
 
  switch (type) {
    case SELECTED_TEAM:{
      return {...state,selectedTeam:payload}
    }
      
      
  
    default:
      return state
  }
   

}