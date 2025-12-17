import React from 'react';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { TextField, Button, Box, Breadcrumbs, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import Container from "@mui/material/Container";
import { RegisterSchema } from '../../pages/validation/RegisterSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import CircularProgress from '@mui/material/CircularProgress';
import axiosInstance from '../../Api/axiosInstance';
function Register() {
    const [serverErrors,setServerErrors]= useState([]);
const { register, handleSubmit, formState:{errors, isSubmitting } } = useForm({ resolver: yupResolver(RegisterSchema),mode: 'onBlur' });
const registerForm = async (values) => {
    try {
    const response = await axiosInstance.post(`/Auth/Account/Register`,values);
    console.log(response);
    } catch (err) {
    console.log(err);
    setServerErrors(err.response.data.errors);
    }
};
return (
    <Box className="register-form">
    <Typography variant="h2">Register Page</Typography>
    {serverErrors.length >0 ?
    serverErrors.map((err)=>
        <Typography  color="error">{err}</Typography>
    ):null}
    <Container maxWidth="xl">
    <Box
        onSubmit={handleSubmit(registerForm)}
        component={'form'}
        sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 5, alignItems: 'center' ,backgroundColor: "#f4f3f3ff",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0px 4px 20px rgba(0,0,0,0.05)", 
    width: "100%",}}
    >
        <TextField label="user name" {...register('userName')} variant="outlined" sx={{ width: "1000px", borderRadius: "12px" }} 
        error={errors.userName } helperText={errors.userName?.message}
        />
        <TextField label="Full Name" {...register('fullName')} variant="outlined" sx={{ width: "1000px", borderRadius: "12px" }} 
        error={errors.fullName } helperText={errors.fullName?.message}
        />
        <TextField label="user email" {...register('email')} variant="outlined" sx={{ width: "1000px", borderRadius: "12px" }} 
        error={errors.email } helperText={errors.email?.message}
        />
        <TextField label="password" {...register('password')} variant="outlined" sx={{ width: "1000px", borderRadius: "12px" }} 
        error={errors.password } helperText={errors.password?.message}
        />
        <TextField label="phone number" {...register('phoneNumber')} variant="outlined" sx={{ width: "1000px", borderRadius: "12px" }} 
        error={errors.phoneNumber } helperText={errors.phoneNumber?.message}
        />
        <Button variant="contained" type="submit" disable={isSubmitting} sx={{ width: "200px", borderRadius: "12px", backgroundColor: "#000000" }}>
        {isSubmitting ? <CircularProgress /> : 'Register'}
        </Button>
    </Box>
    </Container>
    </Box>
);
}

export default Register;
