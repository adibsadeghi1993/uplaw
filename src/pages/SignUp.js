import React from 'react'
import Auth from '../components/signup/Auth'
import { useFormik } from "formik";
import * as Yup from "yup"

const SignUp = (props) => {

    const validationSchema=Yup.object({
        phoneNumber: Yup.string()
        .matches(new RegExp("[0-9]{11}"),"لطفا شماره تلفن11 رقمی وارد کنید")
        .required("شماره تلفن الزامی است"),
        confirmCode:Yup.string().required("کد الزامی است"),
        terms:Yup.boolean().oneOf([true], 'باید شرایط را بپذیرید')
    })



    const  initialValues={
        phoneNumber:"",
        confirmCode:"",
        terms:false
    }
    
  const formik=useFormik({
    initialValues,
    validateOnMount:true,
    validationSchema,

  })
    return (
        <div>
          <Auth {...props} formik={formik}/>  
        </div>
    )
}

export default SignUp
