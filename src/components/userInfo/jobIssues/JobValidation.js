
import * as Yup from "yup";
export const validationSchema = Yup.object({
    jobTitle: Yup.string()
      .min(1, "is short")
      .max(15, "is long")
      .required("عنوان شغلی الزامی است"),
      jobLevel: Yup.string()
      .min(2, "is short")
      .max(15, "is long")
      .required("سطح خود در شغل مورد نظر الزامی است"),
    //   companyName: Yup.string()
    //   .min(1, "is short")
    //   .max(15, "is long")
    //   .required("نام شرکت الزامی است"),
    //   skills: Yup.string()
    //   .required("ذکر مهارت الزامی است"),
   
  });