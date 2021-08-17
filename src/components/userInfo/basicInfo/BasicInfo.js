import React from 'react'
import UserProfile from '../commonFiles/userProfile/UserProfile'
import DetailInfo from './detail/DetailInfo'
import "./basicInfo.css"

const BasicInfo = () => {
    return (
        <div className="basicInfo">
         <UserProfile/>
         <DetailInfo/>
        </div>
    )
}

export default BasicInfo
