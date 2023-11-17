import axios from 'axios'
// import './account.css'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../Layouts/Navbar/Navbar'


const AgentCustomerInsurAccounts = () => {
    
    const[customers,setCustomers] = useState([])
    const[customerName,setCustomerName] = useState([])
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
    const getAgentCustomerAccounts = async () => {
        const token = localStorage.getItem('token')
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

    const tableRows = customers.map((customer,index) => {
        // let custAccounts = new Array(customer.insuranceAccounts)
        // console.log(custAccounts);
        console.log("customer account rows me hain");
       
        return customer.insuranceAccounts.map((customerAccnt,index) => {
            console.log(customerAccnt);
            return(
                <tr>
                <td>{customer.user.name}</td>
                <td>{customerAccnt.accountNumber}</td>
                <td>{customerAccnt.insuranceType}</td>
                <td>{customerAccnt.insuranceScheme}</td>
                <td>{customerAccnt.dateCreated}</td>
                <td>{customerAccnt.maturityDate}</td>
                <td>{customerAccnt.premiumType}</td>
                <td>{customerAccnt.totalPremiumAmount}</td>
                <td>{customerAccnt.profitRatio}%</td>
                <td>{customerAccnt.sumAssured}</td>
                {/* <td>{account.sumAssured}</td> */}
                {/* <td><button type="button" className="btn btn-secondary" disabled>view more</button></td> */}
              </tr>
            )
            
        })
        
    })

    useEffect(() => {
        console.log("use effect me hun");
        getAgentCustomerAccounts()
    },[])
  

   
    console.log(customers);
    return (
        <>
        <Navbar user={userDetails}/>
        {/* <Table /> */}
        <div className="insur_table">
    <section className="table__header">
        <h1>Customer Account Records</h1>
    </section>
    <section className="table__body">
        <table>
            <thead>
                <tr>
                    <th> Customer Name </th>
                    <th> Acc No.</th>
                    <th> Insurance Type </th>
                    <th> Insurance Scheme </th>
                    <th> Date Created </th>
                    <th> Maturity Date </th>
                    <th> Premium Type </th>
                    <th> Total Premium Amount </th>
                    <th> Profit Ratio </th>
                    <th> Sum Assured </th>
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

export default AgentCustomerInsurAccounts