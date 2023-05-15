import React from 'react'
import { Link } from 'react-router-dom'
import Style from "./index.module.css"
function UserNavbar() {
  return (
    <>
     <header className={Style.header}>
        <ul>
            <li><Link  style={{textDecoration:"none",color:"white"}} to="">Home</Link></li>
            <li><Link  style={{textDecoration:"none",color:"white"}} to="employes">Employes</Link></li>
            <li><Link  style={{textDecoration:"none",color:"white"}} to="admin">Admin Panel</Link></li>
            <li><Link style={{textDecoration:"none",color:"white"}}  to="basket">Basket</Link></li>
        </ul>
     </header>
    </>
  )
}

export default UserNavbar