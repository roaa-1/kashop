import React, { useState } from 'react';
import { createContext } from 'react';



export const AuthContext = createContext(null);
export default function AuthContextProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem("token") || null);
    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        console.log('Logged out successfully');
    }
    const setAccessToken = (Token) => {
        localStorage.setItem('token', Token);
        setToken(Token);
    }   
    return (
        <AuthContext.Provider value={{ token, setToken, logout, setAccessToken }}>
            {children}
        </AuthContext.Provider>
    )
}