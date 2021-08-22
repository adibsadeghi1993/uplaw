import React from 'react'
import "./AuthGoogle.css"
import googleImage from "../../../asstes/google (2).svg"
import arrowImage from "../../../asstes/arrow2.svg"

const AuthGoogle = () => {
    return (
        <section className="google_section">
            <div>
                <button><img src={googleImage}/>از گوگل برای ثبت نام/ورود استفاده کنید</button>
            </div>
            <div>
                <input type="checkbox"/>
                <label>با قوانین و مقررات موافقم</label>
            </div>
            <div>
                <button>وارد شوید <img src={arrowImage}/></button>
            </div>
          
        </section>
    )
}

export default AuthGoogle
