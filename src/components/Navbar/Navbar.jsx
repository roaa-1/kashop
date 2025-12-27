import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Register from './../../pages/Register/Register';
import Login from './../../pages/Login/Login';
import { Link } from '@mui/material';
import Container from "@mui/material/Container";
import {Link as RouterLink} from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { useContext } from 'react';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';


function Navbar() { 
    const {token,logout} = useContext(AuthContext);
    const navigate = useNavigate('');
    const handleLogout = () => {
        logout();
        navigate('/auth/login')
    }
    return (
    <Container maxWidth="xl">
                <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: "#ffffffff", borderBottomLeftRadius: "16px",borderBottomRightRadius: "16px" }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 , color: "black" }}>
                        KAShop
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2  }}>
                    <Link component={RouterLink} to="/home" color="#000000" underline='none'> Home</Link>
                    {token !== null && token !== "" ? 
                    <>
                    <Link component={RouterLink} to="/cart" color="#000000" underline='none'> Cart</Link>
                    <Button  sx={{color:"#7d1717ff",pb: 3}} onClick={handleLogout}> Logout</Button>
                    </>
                    :
                    <>
                    <Link component={RouterLink} to="/auth/login" color="#000000" underline='none'> Login</Link>
                    <Link component={RouterLink} to="/auth/register" color="#000000" underline='none'> Register</Link>
                    </>
                    }
                    </Box>
                    
                </Toolbar>
            </AppBar>
        </Box>
    </Container>
    );
}

export default Navbar;
