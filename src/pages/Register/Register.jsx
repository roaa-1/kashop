import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Box, Breadcrumbs, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Register() {
const { register, handleSubmit } = useForm();

const registerForm = async (values) => {
    try {
    const response = await axios.post("http://knowledgeshop.runasp.net/api/Auth/Account/Register",values);
    console.log(response);
    } catch (error) {
    console.error(error);
    }
};



return (
    <Box className="register-form">
    <Typography variant="h2">Register Page</Typography>

    <Box
        onSubmit={handleSubmit(registerForm)}
        component={'form'}
        sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 5, alignItems: 'center' ,backgroundColor: "#f4f3f3ff",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0px 4px 20px rgba(0,0,0,0.05)", 
    width: "100%",}}
    >
        <TextField label="user name" {...register('userName')} variant="outlined" sx={{ width: "1000px", borderRadius: "12px" }} />
        <TextField label="Full Name" {...register('fullName')} variant="outlined" sx={{ width: "1000px", borderRadius: "12px" }} />
        <TextField label="user email" {...register('email')} variant="outlined" sx={{ width: "1000px", borderRadius: "12px" }} />
        <TextField label="password" {...register('password')} variant="outlined" sx={{ width: "1000px", borderRadius: "12px" }} />
        <TextField label="phone number" {...register('phoneNumber')} variant="outlined" sx={{ width: "1000px", borderRadius: "12px" }} />
        <Button variant="contained" type="submit" sx={{ width: "200px", borderRadius: "12px", backgroundColor: "#000000" }}>
        Register
        </Button>
    </Box>
    </Box>
);
}

export default Register;
