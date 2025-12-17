import { createBrowserRouter } from "react-router-dom";
import React from "react";
import MainLayout from "./layout/MainLayout";
import AuthLayout from "./layout/AuthLayout.jsx";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import SendCode from "./pages/SendCod/SendCode.jsx";
import Resetpassword from './pages/ResetPassword/Resetpassword.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<MainLayout/>,
    children: [
      {
        path: 'home',
        element: <Home />
      },
      {
        path: 'cart',
        element: <Cart />
      }
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
      {
        path:"sendCode",
        element:<SendCode/>
      },
      {
        path:"resetPassword",
        element:<Resetpassword/>
      }
    ]
  }
]);
export default router;