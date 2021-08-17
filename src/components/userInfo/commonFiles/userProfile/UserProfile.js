import React from 'react'
import UserImage from './userImage/UserImage'
import "./userProfile.css"

const UserProfile = () => {
    return (
        <section className="userProfile">
           <div>
               <UserImage/>
           </div>
           
        </section>
    )
}

export default UserProfile
