import React,{useContext} from 'react'
import { UserInfoContext } from '../../contextInfo/ContextInfo'
import styles from "./input.module.css"

const Input = ({name,type,placeholder}) => {
  const {formik} = useContext(UserInfoContext)
  
    return (
        <>
           <input
              name={name}
              type={type}
              placeholder={placeholder}
              {...formik.getFieldProps({name})}
              
            />
             {formik.errors[name] && formik.touched[name] && (
          <div className={styles.error}>{formik.errors[name]}</div>
        )}  
        </>
    )
}

export default Input
