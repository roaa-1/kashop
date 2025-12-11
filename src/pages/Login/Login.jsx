import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { TextField, Button, Box, Breadcrumbs, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function Login() {
    const { register, handleSubmit } = useForm();
    const loginForm = async (values) => {
    try {
    const response = await axios.post("http://knowledgeshop.runasp.net/api/Auth/Account/Login",values);
    if (response.status === 200) {
    console.log(response);
    localStorage.setItem("token", response.data.accessToken);
    }
    console.log(response);
    } catch (err) {
    console.log(err);
    }
};
    
    return (
    <Box className="register-form">
        <Typography variant="h2">Login Page</Typography>
    
        <Box
            onSubmit={handleSubmit(loginForm)}
            component={'form'}
            sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 5, alignItems: 'center' ,backgroundColor: "#f4f3f3ff",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0px 4px 20px rgba(0,0,0,0.05)", 
        width: "100%",}}
        >
            <TextField label="user email" {...register('email')} variant="outlined" sx={{ width: "1000px", borderRadius: "12px" }} />
            <TextField label="password" {...register('password')} variant="outlined" sx={{ width: "1000px", borderRadius: "12px" }} />
            <Button variant="contained" type="submit" sx={{ width: "200px", borderRadius: "12px", backgroundColor: "#000000" }}>
            Login
            </Button>
        </Box>
        </Box>
    )
}
export default Login;