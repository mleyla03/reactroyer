import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getProductByID } from '../../../api/requests';
import { putProduct } from '../../../api/requests';

const EditProduct = () => {
  const[products,setProducts] = useState({name:"", surname:"", position:"", salary:"", url:""});
  const navigate = useNavigate();
  const{id} = useParams();
  useEffect(()=>{
    getProductByID(id).then(data=>{
      setProducts(data);
    })
  },[id]);
  function handleChange(e){
    setProducts({...products,[e.target.name]:e.target.value});
  }
  async function handleSubmit(e){
    e.preventDefault();
    await putProduct(id, products);
    setProducts({name:"",surname:"",position:"",salary:"",url:""})
    navigate("/admin/employe");
  }
  return (
    <form onSubmit={(e)=>handleSubmit(e)}>
     
     <input value={products.url} onChange={(e)=>handleChange(e)} placeholder='people image'name='url'/>
     <input value={products.name} onChange={(e)=>handleChange(e)} placeholder='people name'name='name'/>
      <input value={products.surname} onChange={(e)=>handleChange(e)} placeholder='people surname'name='surname'/>
      <input  value={products.salary} onChange={(e)=>handleChange(e)} placeholder='people salary'name='salary'/>
      <input value={products.position} onChange={(e)=>handleChange(e)} placeholder='people position'name='position'/>
      <button type='submit'>Edit</button>
    </form>
  )
}

export default EditProduct