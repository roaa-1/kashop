import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../Api/axiosInstance';
import { useNavigate } from 'react-router-dom';


function useSendCode() {
        const navigate = useNavigate();
    const[serverErrors,setServerErrors]= useState([]);
    const sendMutation = useMutation({
        mutationFn: async(values) => {
            return await axiosInstance.post("/Auth/Account/SendCode",values);
        },
        onSuccess: (data) => {
            navigate('/login');
            console.log(data);
        },  
        onError: (err) => {
            setServerErrors(err.response.data.errors);
        }
    });
    return {sendMutation, serverErrors};
}
export default useSendCode;
