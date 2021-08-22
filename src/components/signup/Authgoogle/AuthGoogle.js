import React from 'react'
import "./AuthGoogle.css"
import googleImage from "../../../asstes/google.svg"
import arrowImage from "../../../asstes/arrow.svg"

const AuthGoogle = () => {
    return (
        <section className="google_section">
            <div>
                <button>از گوگل برای ثبت نام/ورود استفاده کنید<img src={googleImage}/></button>
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
