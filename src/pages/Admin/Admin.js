import React from 'react'
import AdminNavbar from '../../components/Admin/Navbar'
import Footers from '../../components/Admin/Footer'
import { Outlet } from 'react-router-dom'

function Admin() {
  return (
      <>
      <AdminNavbar/>
      <Outlet/>
      <Footers/>
      </>
  )
}

export default Admin