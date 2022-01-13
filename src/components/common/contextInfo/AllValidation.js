
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
      .matches(new RegExp("^[۰۱۲۳۴۵۶۷۸۹0-9]+$"),"لطفا عدد وارد نمایید")
      .required("شماره تلفن الزامی است").length("شماره تلفن 11 رقمی است"),
    email: Yup.string().email("ایمیل صحیح نیست").required("ایمیل الزامی است"),
    password: Yup.string()
      .min(8, "حداقل 8 کارکتر")
      .required(" رمز عبور الزامی است"),
    confirmPassword: Yup
    .string()
    .required("تکرار رمز عبور الزامی است")
    .oneOf([Yup.ref("password"), null], "رمز عبور مطابقت ندارد"),
    address: Yup
    .string()
    .required("ادرس الزامی است"),
    postalCode: Yup
    .string()
    .required("کد پستی الزامی است").matches(new RegExp("[0-9]{10}"),"کد پستی 10 رقمی وارد کنید"),
    nationalCode: Yup
    .string()
    .required("کد ملی الزامی است").matches(new RegExp("[0-9]{10}"),"کد پستی 10 رقمی وارد کنید"),
    jobTitle: Yup.string()
      .min(1, "is short")
      .max(15, "is long")
      .required("عنوان شغلی الزامی است"),
      jobLevel: Yup.string()
      .max(15, "is long")
      .required("سطح خود در شغل مورد نظر الزامی است"),
      companyName: Yup.string()
      .required("نام شرکت ضروری است"),
      skills: Yup.string()
      .required("ذکر مهارت الزامی است"),
   
  });