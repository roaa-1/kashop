import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../Api/axiosInstance';
import { useNavigate } from 'react-router';   

function useResetpassword() {
    const[serverErrors,setServerErrors]= useState([]);
    const navigate = useNavigate();
    const resetMutation = useMutation({
    mutationFn: async(values) => {
        return await axiosInstance.patch("/Auth/Account/ResetPassword",values);
    },
    onSuccess: (data) => {
        console.log(data);
        localStorage.removeItem("resetEmail");
        navigate('/auth/login');

    },
    onError: (err) => {
        setServerErrors(err.response.data.errors||["Something went wrong"]);
    }
 });
    return {resetMutation, serverErrors};
}
export default useResetpassword;