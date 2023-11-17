import React from 'react'
import { useParams } from 'react-router-dom';
import Navbar from '../Layouts/Navbar/Navbar';
import Footer from '../Layouts/Footer/Footer';
import CardList from './CardList/CardList';

const AgentDashboard = () => {
    const userDetails = {
        username: useParams().username,
        role: useParams().role
    }
    console.log(userDetails.username);

  
    return (
        <>
        <div className='mycontainer'>
            <header><Navbar user = {userDetails}/></header>
            <main>
            <div className='d-flex align-items-center justify-content-center'><h1>Agent Dashboard</h1></div>
            <CardList user={userDetails} />
            </main>
            <footer><Footer /></footer>
        </div>
        </>
    
  )
}

export default AgentDashboard