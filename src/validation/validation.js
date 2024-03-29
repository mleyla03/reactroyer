import * as yup from "yup";

const PASSWORD_RULES = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const BasicFormSchema = yup.object().shape({
  name: yup
    .string("invalids data type")
    .min(5, "name cannot be less than 5 characters")

    .required("name is required"),
   surname: yup
    .string("invalids data type")
    .min( 6, "surname cannot be less than 6 characters")
    .required("surname is required"),

    salary: yup
    .number("invalids data type")
    .max( 2500, "salary cannot be less than 2500")
    .required("salary is required"),
   
    position:yup
    .string()
    .oneOf(['az','ru','rf','tr','ch',null],"invalids position") ,

   age:yup
   .number()
   .integer("age is not an integer")
   .positive("age cannot be negative number")
   .required("age is required")
});