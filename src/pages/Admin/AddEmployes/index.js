import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import { postProduct } from '../../../api/requests';
import { useNavigate } from 'react-router-dom'
function AddEmployes() {  
  const navigate=useNavigate();
  const[newProduct,setNewProduct]=useState({name:"",surname:"",position:"",salary:"",url:""})
    function handleChange(e){
      setNewProduct({...newProduct,[e.target.name]:e.target.value})
    }
     async function handleSubmit(e){
      e.preventDefault()
      newProduct.id=nanoid()
      await postProduct(newProduct)
      setNewProduct({name:"",surname:"",position:"",salary:"",url:""})
      navigate("/admin/employe")
    }
  return (
   <>
     <form onSubmit={(e)=>handleSubmit(e)} style={{display:"flex",alignItems:"center",justifyContent:"center", marginTop:"130px", marginBottom:"400px"}}>
      <input  style={{marginLeft:"5px"}}value={newProduct.name} onChange={(e)=>handleChange(e)} placeholder='people name'name='name'/>
      <input  style={{marginLeft:"5px"}}value={newProduct.surname} onChange={(e)=>handleChange(e)} placeholder='people surname'name='surname'/>
      <input  style={{marginLeft:"5px"}}value={newProduct.url} onChange={(e)=>handleChange(e)} placeholder='people image'name='url'/>
      <input  style={{marginLeft:"5px"}}type='number'  value={newProduct.salary} onChange={(e)=>handleChange(e)} placeholder='people salary'name='salary'/>
      <input  style={{marginLeft:"5px"}}value={newProduct.position} onChange={(e)=>handleChange(e)} placeholder='people position'name='position'/>
      <button>Add</button>
     </form>
   </>
  )
}

export default AddEmployes