import React from 'react'
import "./input.css"

const Input = ({name,type,placeholder,formik}) => {
    return (
        <>
           <input
              name={name}
              type={type}
              placeholder={placeholder}
              {...formik.getFieldProps({name})}
            />
             {formik.errors[name] && formik.touched[name] && (
          <div className="error">{formik.errors[name]}</div>
        )}  
        </>
    )
}

export default Input
