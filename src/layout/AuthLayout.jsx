import React from 'react';
import { Outlet } from 'react-router-dom';


function AuthLayout() { 
    return (
        <>
        <Outlet />
        <div>
            <h2>Auth Footer</h2>
        </div>
        </>
    )
}
export default AuthLayout;