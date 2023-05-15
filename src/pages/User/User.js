import React from 'react'
import UserNavbar from '../../components/User/Navbar'
import Footer from '../../components/User/Footer'
import { Outlet } from 'react-router-dom'
function User() {
  return (
    <>
    <UserNavbar/>
       <Outlet/>
    <Footer/>
    </>
  )
}

export default User