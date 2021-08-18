
import * as Yup from "yup";
export const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(2, "is short")
      .max(15, "is long")
      .required("نام و نام خانوادگی الزامی است"),
      lastName: Yup.string()
      .min(2, "is short")
      .max(15, "is long")
      .required("نام و نام خانوادگی الزامی است"),
    phoneNumber: Yup.string()
      .matches(new RegExp("[0-9]{11}"),"لطفا شماره تلفن11 رقمی وارد کنید")
      .required("شماره تلفن الزامی است"),
    email: Yup.string().email("email is invalid").required("ایمیل الزامی است"),
    password: Yup.string()
      .min(8, "حداقل 8 کارکتر")
      .required(" رمز عبور الزامی است"),
    confirmPassword: Yup
    .string()
    .required()
    .oneOf([Yup.ref("password"), null], "رمز عبور مطابقت ندارد")
  });