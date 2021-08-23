import React from 'react'
import Auth from '../components/signup/Auth'
import { useFormik } from "formik";
import * as Yup from "yup"

const SignUp = (props) => {

    const validationSchema=Yup.string({
        
    })



    const  initialValues={
        phoneNumber:"",
        confirmCode:"",
        terms:""
    }
    
  const formik=useFormik({
    initialValues,
    validateOnMount:true,
    validationSchema,

  })
    return (
        <div>
          <Auth {...props}/>  
        </div>
    )
}

export default SignUp
