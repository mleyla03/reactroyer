import React from 'react'
import { Link } from 'react-router-dom'
import Dizayn from "./index.module.css"

function AdminNavbar() {
  return (
    <>
     <header className={Dizayn.header}>
        <ul>
            <li><Link  style={{textDecoration:"none",color:"white"}}to="/admin">Main Site</Link></li>
            <li><Link style={{textDecoration:"none",color:"white"}} to="employe">Employes</Link></li>
       
            <li><Link  style={{textDecoration:"none",color:"white"}}to="addemploye">Add Employes</Link></li>
            
        </ul>
     </header>
    </>
  )
}

export default AdminNavbar