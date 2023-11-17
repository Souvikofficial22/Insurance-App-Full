import axios from 'axios'
// import './account.css'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../Layouts/Navbar/Navbar'


const ViewPolicyPayments = () => {
    
    const[customer,setCustomer] = useState([])
    const[custAccounts,setCustAccounts] = useState([])

    // const custAccNo = useParams().accno
    // console.log(custAccNo);
    const userDetails = {
        username: useParams().username,
        role: useParams().role
    }

    console.log(userDetails.username);
    console.log(userDetails.role);

    //function to get current agent
    const getCustPolicyPayments = async () => {
        const token = localStorage.getItem("token")
        let resp = await axios.get(`http://localhost:8081/customerapp/getusername/${userDetails.username}`,{
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
        console.log(resp.data.insuranceAccounts);
        console.log("hello all accounts");
        setCustomer(resp.data)
        setCustAccounts(resp.data.insuranceAccounts)
        // console.log(customer.data.insuranceAccounts);
        // console.log(accounts);
        
    }

    const tableRows = custAccounts.map((account,index) => {
        // let custAccounts = new Array(customer.insuranceAccounts)
        // console.log(custAccounts);
        console.log("customer account rows me hain");
            return account.policyPayments.map((payment,index) => {
                
                console.log(payment);
                return(
                    <tr>
                    <td>{payment.customerName}</td>
                    <td>{payment.insuranceAccNo}</td>
                    <td>{payment.paidAmount}</td>
                    <td>{payment.paidDate}</td>
                    <td>{payment.transferType}</td>
                    <td>{payment.status}</td>
                    {/* <td>{account.sumAssured}</td> */}
                    {/* <td><button type="button" className="btn btn-secondary" disabled>view more</button></td> */}
                  </tr>
                )
                
            })
           
        })
        


    useEffect(() => {
        console.log("use effect me hun");
        getCustPolicyPayments()
    },[])
  

   
    return (
        <>
        <Navbar user={userDetails}/>
        {/* <Table /> */}
        <div className="insur_table">
    <section className="table__header">
        <h1>View Policy Payment Records</h1>
    </section>
    <section className="table__body">
        <table>
            <thead>
                <tr>
                    <th> Customer Name </th>
                    <th> Acc No.</th>
                    <th> Paid Amount </th>
                    <th> Paid Date </th>
                    <th> Transfer Type </th>
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

export default ViewPolicyPayments