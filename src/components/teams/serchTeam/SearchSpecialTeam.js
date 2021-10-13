import React,{useState} from 'react'
import InviteMember from '../iniviteMember/InviteMember'
import SearchTeam from '../iniviteMember/inviteDetailes/searchTeam/SearchTeam'
import styles from "./serach.module.css"



const SearchSpecialTeam = () => {
    const [selectedOption, setSelectedOption] = useState("")

    return (
        <>
    
       <InviteMember search={true} selectedOption={selectedOption}  setSelectedOption={ setSelectedOption}  />
      
        </>
    )
}

export default SearchSpecialTeam
