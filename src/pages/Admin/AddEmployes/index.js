
import { useFormik } from 'formik';
import { nanoid } from 'nanoid'
import { BasicFormSchema } from '../../../validation/validation';
import { postProduct } from '../../../api/requests';
import { useNavigate } from 'react-router-dom'

function AddEmployes() {  
  const navigate=useNavigate();
  
  async function handleSubmit(values, actions){
    console.log(values)
    actions.resetForm()
    navigate("/admin/employe")

   
    
  }
  const formik=useFormik({
    initialValues:{
      name:"",
      surname:"",
      position:"",
      salary:"",
      url:""
    },
    onSubmit:handleSubmit,
    validationSchema:BasicFormSchema,
  })
  

     
     

  return (
   <>
     <form onSubmit={formik.handleSubmit} style={{display:"flex",alignItems:"center",justifyContent:"center", marginTop:"130px", marginBottom:"400px"}}>
      <input  style={{marginLeft:"5px",  borderColor: `${
              formik.errors.name && formik.touched.name
                ? "red"
                : "black"
            }`,}}value={formik.values.name} onChange={formik.handleChange} placeholder='people name'name='name' type='text'/>
            {formik.errors.name && formik.touched.name && (
          <p style={{ color: "red" }}>{formik.errors.name}</p>
        )}
      <input  style={{marginLeft:"5px", borderColor: `${
              formik.errors.surname && formik.touched.surname
                ? "red"
                : "black"
            }`}}value={formik.values.surname} onChange={formik.handleChange} placeholder='people surname'name='surname' type='text'/>
             {formik.errors.surname && formik.touched.surname && (
          <p style={{ color: "red" }}>{formik.errors.surname}</p>
        )}   
      <input  style={{marginLeft:"5px"}}value={formik.values.url} onChange={formik.handleChange} placeholder='people image'name='url'/>
      <input  style={{marginLeft:"5px", borderColor: `${
              formik.errors.salary && formik.touched.salary
                ? "red"
                : "black"
            }`,}}type='number'  value={formik.values.salary} onChange={formik.handleChange} placeholder='people salary' name='salary'/>
          {formik.errors.salary && formik.touched.salary && (
          <p style={{ color: "red" }}>{formik.errors.salary}</p>
        )}
        <select name="position" value={formik.values.position} onChange={formik.handleChange}  >
            <option>Job type</option>
            <option value='az'>Developer</option>
            <option value='tr'>Designer</option>
            <option value='ru'>Supervisor</option>
            <option value='ch'>Engineer</option>
        </select>
        {formik.errors.position && formik.touched.position && (
          <p style={{ color: "red" }}>{formik.errors.position}</p>
        )}
        <button disabled = {Object.keys(formik.errors).length!==0 ? true : false} type="submit">Submit</button>
     </form>
   </>
  )
}

export default AddEmployes