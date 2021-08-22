import React from 'react'
import "./AuthGoogle.css"
import googleImage from "../../../asstes/google (2).svg"
import arrowImage from "../../../asstes/arrow2.svg"

const AuthGoogle = () => {
    return (
        <>
            <div className="authsection_google">
                <button><img src={googleImage}/>از گوگل برای ثبت نام/ورود استفاده کنید</button>
            </div>
            <div className="condition">
                <input type="checkbox"/>
                <label>با قوانین و مقررات موافقم</label>
            </div>
            <div className="confirm_signup">
                <button><span>وارد شوید</span> <img src={arrowImage}/></button>
            </div>
          
        </>
    )
}

export default AuthGoogle
