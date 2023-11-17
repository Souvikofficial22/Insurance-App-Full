import axios from 'axios'
// import './account.css'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../Layouts/Navbar/Navbar'


const AgentCustomers = () => {
    
    const[customers,setCustomers] = useState([])
    const userDetails = {
        username: useParams().username,
        role: useParams().role
    }
    console.log(userDetails.username);
    console.log(userDetails.role);
    // console.log(username);
    // console.log("inside customer accounts");
    
    // const userDetails = {
    //     username: useParams().name,
    //     role: useParams().role
    // }
    // const [currentCust, setCurrentCust] = useState(null);

    //function to get current agent
    const getAgentCustomers = async () => {
        const token = localStorage.getItem("token")
        let resp = await axios.get(`http://localhost:8081/agentapp/getusername/${userDetails.username}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
              }
        })
        .catch(err => {
            alert("agent not found")
            return
        })
        
        // console.log(customer);
        console.log(resp.data.customers);
        console.log("hello all accounts");
        setCustomers(resp.data.customers)
        // console.log(customer.data.insuranceAccounts);
        // console.log(accounts);
        
    }
    
  
    // //fuction to get all accounts from database
    // const getCustAllAccounts = async () => {
    //     let resp = await axios.get(`
    //     `).catch(err => {
    //         alert("No records found")
    //         return
    //     })
    //     setAccounts(resp.data)
    //     console.log(resp.data);
    // }

    const tableRows = customers.map((customer,index) => {
        console.log("customer account rows me hain");
        return(
            <tr key={customer.customerId}>
            <td>{customer.user.name}</td>
            <td>{customer.dateOfBirth}</td>
            <td>{customer.user.username}</td>
            <td>{customer.user.address}</td>
            <td>{customer.phone}</td>
            <td>{customer.nominee}</td>
            <td>{customer.nomineeRelation}</td>
            <td>{customer.user.status}</td>
            {/* <td>{account.sumAssured}</td> */}
            {/* <td><button type="button" className="btn btn-secondary" disabled>view more</button></td> */}
          </tr>
        )
        
    })

    useEffect(() => {
        console.log("use effect me hun");
        getAgentCustomers()
    },[])
  

   
    console.log(customers);
    return (
        <>
        <Navbar user={userDetails}/>
        {/* <Table /> */}
        <div className="insur_table">
    <section className="table__header">
        <div className="d-flex align-items-center justify-content-center mt-3"><h1>Customer Records</h1></div>
    </section>
    <section className="table__body">
        <table>
            <thead>
                <tr>
                    <th> Customer Name </th>
                    <th> Customer DOB </th>
                    <th> Login Id </th>
                    <th> Address </th>
                    <th> Mobile </th>
                    <th> Nominee</th>
                    <th> Nominee Relation </th>
                    <th> Status </th>
                    {/* <th> Sum Assured </th>
                    <th> View </th> */}
                </tr>
            </thead>
            <tbody>
                  {tableRows}
            </tbody>
        </table>
    </section>
</div>
        </>
        
  )
}

export default AgentCustomers