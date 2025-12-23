import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import axiosInstance from '../Api/axiosInstance';
import { AuthContext } from '../context/AuthContext';

function useLogin() {
    const navigate = useNavigate();
    const[serverErrors,setServerErrors]= useState([]);
    const { setToken, setAccessToken } = useContext(AuthContext);
    const loginMutation = useMutation({
        mutationFn: async(values) => {
            return await axiosInstance.post(`/Auth/Account/Login`,values);
        },
        onSuccess:(data)=>{
            setAccessToken(data.data.token);
            console.log(data.data.token);
            setToken(data.data.token);
            navigate('/home');
        },
        onError: (err) => {
            setServerErrors(err.response.data.errors);
        }
    })
    return {loginMutation, serverErrors};
}
export default useLogin;