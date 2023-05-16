
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductByID } from '../../../api/requests';
import {HeartOutlined} from"@ant-design/icons"
const ProductDetail = () => {
  const{id} = useParams();
  const[product,setProduct] = useState({});
  useEffect(()=>{
    getProductByID(id)
    .then(data=>{
      setProduct(data);
    })
  },[id])
  return (
   <>
   <Link style={{textDecoration:"none"}} to="/employes"><button style={{display:"block",margin:"25px auto",backgroundColor:"orangered",color:"white", border:"none",width:"100px", height:"30px", borderRadius:"20px"}}>go back</button></Link>
   <div style={{display:"flex",alignItems:"center",justifyContent:"center", marginBottom:"15px"}} >Detail page of {product.name}</div>
   <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}><Link style={{textDecoration:"none"}} to="#"><img style={{width:"300px", height:"300px"}} src={product.url}></img> <h3 style={{textAlign:"left"}}>{product.name}</h3><p style={{textAlign:"left"}}>Position:{product.position}</p><p style={{textAlign:"left"}}>Salary:{product.salary}</p> <p style={{display:"flex",alignItems:"center", justifyContent:"flex-end"}}><div style={{height:"50px",width:"50px",color:"white",display:"flex",alignItems:"center",justiftyContent:"center"}}><HeartOutlined style={{backgroundColor:"orangered",height:"50px",width:"50px",color:"white",display:"flex",alignItems:"center",justifyContent:"center", borderRadius:"20px"}}/></div></p></Link></div>
   
   </>
  )
}

export default ProductDetail