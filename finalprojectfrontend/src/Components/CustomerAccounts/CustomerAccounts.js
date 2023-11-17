import axios from 'axios'
import './account.css'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Layouts/Navbar/Navbar'

const CustomerAccounts = () => {
    
    // const customerData = () => {

    // }
    const[accounts,setAccounts] = useState([])
    const userDetails = {
        username: useParams().username,
        role: useParams().role
    }
    console.log(userDetails.username);
    console.log(userDetails.role);
    // console.log(username);
    console.log("inside customer accounts");
    
    // const userDetails = {
    //     username: useParams().name,
    //     role: useParams().role
    // }
    const [currentCust, setCurrentCust] = useState(null);

    //function to get current user
    const getCurrentCustInsuAccounts = async () => {
        const token = localStorage.getItem('token')
        let customer = await axios.get(`http://localhost:8081/customerapp/getusername/${userDetails.username}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
              }
        })
        .catch(err => {
            alert("Customer not found")
            return
        })
        
        // console.log(customer);
        console.log(customer.data);
        console.log("hello all accounts");
        setAccounts(customer.data.insuranceAccounts)
        console.log(customer.data.insuranceAccounts);
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

    const custAccRows = accounts.map((account,index) => {
        console.log("customer account rows me hain");
        return(
            <tr key={account.accountNumber}>
            <td>{account.accountNumber}</td>
            <td>{account.insuranceType}</td>
            <td>{account.insuranceScheme}</td>
            <td>{account.dateCreated}</td>
            <td>{account.maturityDate}</td>
            <td>{account.premiumType}</td>
            <td>{account.totalPremiumAmount}</td>
            <td>{account.profitRatio}%</td>
            <td>{account.sumAssured}</td>
            <td><button type="button" className="btn btn-secondary" disabled>view more</button></td>
          </tr>
        )
        
    })

    useEffect(() => {
        console.log("use effect me hun");
        getCurrentCustInsuAccounts()
    },[])
  

   
    console.log(accounts);
    return (
        <>
        <Navbar user={userDetails}/>
        {/* <Table /> */}
        <div className="insur_table">
    <section className="table__header d-flex align-items-center justify-content-center mt-2">
        <h1>Customer's Insurance Accounts</h1>
    </section>
    <section className="table__body">
        <table>
            <thead>
                <tr>
                    <th> Acc No.</th>
                    <th> Insurance Type </th>
                    <th> Insurance Scheme </th>
                    <th> Date Created </th>
                    <th>Maturity Date </th>
                    <th> Premium Type </th>
                    <th> Total Premium Amount </th>
                    <th> Profit Ratio </th>
                    <th> Sum Assured </th>
                    <th> View </th>
                </tr>
            </thead>
            <tbody>
                  {custAccRows}
            </tbody>
        </table>
    </section>
</div>
        </>
        
  )
}

export default CustomerAccounts