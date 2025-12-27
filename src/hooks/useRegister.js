import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import axiosInstance from "../Api/axiosInstance";

function useRegister() {
    const [serverErrors,setServerErrors]= useState([]);
    const Navigate = useNavigate();
    const registerMutation = useMutation({
        mutationFn: async(values) => {
            return await axiosInstance.post(`/Auth/Account/Register`,values);
        },
        onSuccess:()=>{
            Navigate('/auth/login');
        },
        onError: (err) => {
            setServerErrors(err.response.data.errors);
        }
    })
    return {registerMutation, serverErrors};
}
export default useRegister;