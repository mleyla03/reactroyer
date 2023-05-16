import * as yup from "yup";

const PASSWORD_RULES = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const BasicFormSchema = yup.object().shape({
  name: yup
    .string("invalid data type")
    .min(5, "name cannot be less than 5 characters")

    .required("name is required"),
   surname: yup
    .string("invalid data type")
    .min( 6, "surname cannot be less than 6 characters")
    .required("surname is required"),

    salary: yup
    .number("invalid data type")
    .max( 2500, "surname cannot be less than 2500")
    .required("surname is required"),

    position:yup
    .string()
    .oneOf(['az','ru','tr','ch',null],"invalid nationality")
});