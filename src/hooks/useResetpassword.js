import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../Api/axiosInstance';   

function useResetpassword() {
        const[serverErrors,setServerErrors]= useState([]);
     const resetMutation = useMutation({
    mutationFn: async(values) => {
        return await axiosInstance.post("/Auth/Account/ResetPassword",values);
    },
    onSuccess: (data) => {
        console.log(data);
        localStorage.removeItem("resetEmail");
    },
    onError: (err) => {
        setServerErrors(err.response.data.errors);
    }
 });
    return {resetMutation, serverErrors};
}
export default useResetpassword;