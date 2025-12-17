import React from 'react'
import { Box, TextField, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useState ,useEffect} from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { ResetPasswordSchema } from '../validation/ResetPasswordSchema';
import axiosInstance from '../../Api/axiosInstance';
import CircularProgress from '@mui/material/CircularProgress';


function Resetpassword() {
    const[serverErrors,setServerErrors]= useState([]);
    const { register, handleSubmit,setValue,formState:{errors,isSubmitting } } = useForm({resolver: yupResolver(ResetPasswordSchema),mode:'onBlur' });
    useEffect(() => {
    const storedEmail = localStorage.getItem('resetEmail');
    if (storedEmail) {
    setValue('email', storedEmail, { shouldDirty: false });
    }
}, [setValue]);
    const ResetPassword= async (values) => {
    try {
        const response = await axiosInstance.post("/Auth/Account/ResetPassword",values);
        console.log(response);
        localStorage.removeItem("resetEmail");
    } catch (err) {
        console.log(err);
        setServerErrors(err.response.data.errors);
    }
    }

  return (
    <>
    <Box className="reset-password-form">
        <Typography variant="h2">Reset Password Page</Typography>
    {serverErrors.length >0 ?
    serverErrors.map((err)=>
    <Typography  color="error">{err}</Typography>
    ):null}
    </Box>
    <Box onSubmit={handleSubmit(ResetPassword)}
        component={'form'}
        sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 5, alignItems: 'center' ,backgroundColor: "#f4f3f3ff",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0px 4px 20px rgba(0,0,0,0.05)",
    width: "100%",}}>

        <TextField label="user email" {...register('email')} variant="outlined" sx={{ width: "1000px", borderRadius: "12px" }}
        error={errors.email } helperText={errors.email?.message} 
        />
        <TextField label="code" {...register('code')} variant="outlined" sx={{ width: "1000px", borderRadius: "12px" }}
        error={errors.code } helperText={errors.code?.message} 
        />
        <TextField label="new password" {...register('newPassword')} variant="outlined" sx={{ width: "1000px", borderRadius: "12px" }}
        error={errors.newPassword } helperText={errors.newPassword?.message} 
        />
        <Button variant="contained" type="submit" disable={isSubmitting} sx={{ width: "200px", borderRadius: "12px", backgroundColor: "#000000" }}>
        {isSubmitting ? <CircularProgress /> : 'Reset Password'}
        </Button>
    </Box>
    </>
  )
}
export default Resetpassword; 