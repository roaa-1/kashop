import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';


function AuthLayout() { 
    return (
        <>
        <Navbar />
        <Outlet />
        </>
    )
}
export default AuthLayout;