import React, { useEffect, useState } from 'react'
import {getAllProducts } from '../../../api/requests'


import {HeartOutlined} from '@ant-design/icons';


import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


function Employes() {
    const[products,setProducts] = useState([]);

    useEffect(()=>{
      getAllProducts().then(data=>{
        setProducts(data);
      })
    },[])

    return (
     <>
  
          <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={12}>
      {products && products.map((product)=>{
          return   <Grid item lg={4} md={6} sm={12} xs={12}>
            <Link to={`${product.id}`}>
            <Item style={{marginTop:"30px"}} key={product.id}><img style={{width:"300px", height:"300px"}} src={product.url}></img> <h3 style={{textAlign:"left"}}>{product.name}</h3><p style={{textAlign:"left"}}>Position:{product.position}</p><p style={{textAlign:"left"}}>Salary:{product.salary}</p> <p style={{display:"flex",alignItems:"center", justifyContent:"flex-end"}}><div style={{height:"50px",width:"50px",color:"white",display:"flex",alignItems:"center",justiftyContent:"center"}}><HeartOutlined style={{backgroundColor:"orangered",height:"50px",width:"50px",color:"white",display:"flex",alignItems:"center",justifyContent:"center", borderRadius:"20px"}}/></div></p></Item>
            </Link>
         

        </Grid>
        })}
      </Grid>
    </Box>
     </>
    )
}

export default Employes