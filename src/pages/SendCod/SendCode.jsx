import { Box } from '@mui/material';
import { Typography, Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { SendCodeSchema } from '../validation/SendCode';
import TextField from '@mui/material/TextField';
import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

import useSendCode from '../../hooks/useSendCode';

function SendCode() {
   const {sendMutation, serverErrors} = useSendCode();
    const { register, handleSubmit, formState:{errors,isSubmitting } } = useForm({resolver: yupResolver(SendCodeSchema),mode:'onBlur'});
    const sendCode = async(values) => {
        await sendMutation.mutateAsync(values);
};
    return (
        <>
    <Box className="send-code-form">
        <Typography variant="h2">Send Code Page</Typography>
    {serverErrors.length >0 ?
    serverErrors.map((err)=>
    <Typography  color="error">{err}</Typography>
    ):null}
    </Box>
    <Box onSubmit={handleSubmit(sendCode)}
        component={'form'}
        sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 5, alignItems: 'center' ,backgroundColor: "#f4f3f3ff",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0px 4px 20px rgba(0,0,0,0.05)", 
    width: "100%",}}>
        <TextField label="user email" {...register('email')} variant="outlined" sx={{ width: "1000px", borderRadius: "12px" }}
        error={errors.email } helperText={errors.email?.message} 
        />
        <Button variant="contained" type="submit" disable={isSubmitting} sx={{ width: "200px", borderRadius: "12px", backgroundColor: "#000000" }}>
        {isSubmitting ? <CircularProgress /> : 'Send Code'}
        </Button>
    </Box>
    </>
    )
}
export default SendCode