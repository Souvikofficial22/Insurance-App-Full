import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Layouts/Navbar/Navbar'

const AdminDashboard = () => {
    const username = useParams().username
    const role = useParams().role
  return (
    <>
        <Navbar role={role} />
        <h1 className="d-flex align-items-center justify-content-center">Admin Dashboard</h1>
        
    </>
  )
}

export default AdminDashboard