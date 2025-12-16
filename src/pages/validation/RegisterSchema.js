import * as yup from 'yup';

export const RegisterSchema = yup.object({
    fullName:yup.string().required("FullName is Required"),
    email:yup.string().email("Invalid email format").required("Email is Required"),
    userName:yup.string().matches(/^[a-zA-Z0-9._-]+$/,"Invalid userName").min(4,"userName must be at least 4 characters").required("userName is Required"),
    phoneNumber:yup.string().matches(/^[0-9]{10,15}$/,"Invalid phone number").required("Phone Number is Required"),
    password:yup.string().required("Password is Required").min(8,"Password must be at least 8 characters").matches(/[A-Z]/,"Password must contain at least one uppercase letter").matches(/[a-z]/,"Password must contain at least one lowercase letter").matches(/\d/,"Password must contain at least one number").matches(/[@$!%*?&]/,"Password must contain at least one special character"),
});