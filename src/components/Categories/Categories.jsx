import React, { useEffect } from 'react';
import axiosInstance from '../../Api/axiosInstance';
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Container, Grid, Card } from '@mui/material';
function Categories() {
    const [categories , setCategories] = React.useState([]);
    const getCategories = async ()=>{
        try{
            const response = await axiosInstance.get('/Categories');
            console.log(response);
            setCategories(response.data);
        }catch(error){
            console.log(error);
        }
    }
    useEffect(()=>{
        getCategories();
    },[]);
    return (
    <>
    <Box p={2}>
        <Typography component={'h2'} variant='h4'>Categories</Typography>
        {
        <Container maxWidth="lg">
            <Grid container spacing={3}>
        {categories.map((category) => 
        <Grid key={category.id}  item size={{xs:12,sm:6,md:5,lg:3}}>
            <Card sx={{textAlign: 'center', padding:2}}>
                {category.name}
            </Card>
        </Grid>
        )}
            </Grid>
        </Container>
        }
    </Box>
    </>
    )
}

export default Categories 