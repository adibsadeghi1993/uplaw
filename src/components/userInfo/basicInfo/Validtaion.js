
import * as Yup from "yup";
export const validationSchema = Yup.object({
    fullName: Yup.string()
      .min(4, "is short")
      .max(15, "is long")
      .required("نام و نام خانوادگی الزامی است"),
    phoneNumber: Yup.string()
      .matches(new RegExp("[0-9]{11}"),"لطفا شماره تلفن11 رقمی وارد کنید")
      .required("شماره تلفن الزامی است"),
    email: Yup.string().email("email is invalid").required("ایمیل الزامی است"),
  });