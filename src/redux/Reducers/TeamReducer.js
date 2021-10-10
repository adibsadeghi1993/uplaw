
import uplawImage from "../../asstes/uplaw.png"
import { SELECTED_TEAM } from "../constants/TeamConstants"
import user1 from "../../asstes/user1.svg"
import user2 from "../../asstes/user2.svg"
import user3 from "../../asstes/user3.svg"
import user4 from "../../asstes/user4.svg"


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
  selectedTeam:"",
   teamMember:[
     {id:1,name:"محسن خانی"},
     {id:2,name:"سارا کریمی صفت"},
     {id:3,name:"سامان یوسفی"},
     {id:4,name:"رضا حسین زاده"},
   ]


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