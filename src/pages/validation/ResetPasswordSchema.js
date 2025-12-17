import * as yup from 'yup';

export const ResetPasswordSchema = yup.object({
    email:yup.string().email("Invalid email format").required("Email is Required"),
    code:yup.string().required("Code is Required"),
    newPassword:yup.string().required("New Password is Required").min(8,"Password must be at least 8 characters").matches(/[A-Z]/,"Password must contain at least one uppercase letter").matches(/[a-z]/,"Password must contain at least one lowercase letter").matches(/\d/,"Password must contain at least one number").matches(/[@$!%*?&]/,"Password must contain at least one special character"),
});