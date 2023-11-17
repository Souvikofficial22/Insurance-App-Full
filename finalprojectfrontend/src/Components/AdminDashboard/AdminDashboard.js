import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Layouts/Navbar/Navbar'
import CardList from './CardList/CardList'
import Footer from '../Layouts/Footer/Footer'

const AdminDashboard = () => {
    
    const user={
      role : useParams().role,
      username: useParams().username
    }

  return (
    <>
    <div className='mycontainer'>
        <header><Navbar user={user} /></header>
        <main><h1 className="d-flex align-items-center justify-content-center mb-3">Admin Dashboard</h1>
        <CardList user={user}/>
        </main>
        <footer><Footer /></footer>
      </div>
    </>
  )
}

export default AdminDashboard