import React, { useEffect } from 'react'
import Footer from '../../Layouts/Footer/Footer'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../../Layouts/Navbar/Navbar'

const ViewAccounts = () => {
    const [accounts,setAccounts] = useState([])

    const navigate = new useNavigate()
    const user = {
        username: useParams().username,
        role: useParams().role,
      }
      const getAllAccounts = async()=>{
        const token = localStorage.getItem('token')
        let resp = await axios.get(`http://localhost:8081/insuranceapp/insuranceaccounts`,
        {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            }
          }).catch(err=>{
            alert("Something went wrong")
            return
        })
        console.log(resp)
        // // setTotalCount(resp.data.length)
            setAccounts(resp.data)
        // // console.log(banks.fullName)
      }

      

      const tableRows = accounts.map((account,index)=>{
        return(
            <tr>
                <td>{account.accountNumber}</td>
                <td>{account.customer.user.name}</td>
                <td>{account.customer.agent ? account.customer.agent.user.name : '-'}</td>
                <td>{account.insuranceType}</td>
                <td>{account.insuranceScheme}</td>
                <td>{account.dateCreated}</td>
                <td>{account.maturityDate}</td>
            </tr>
            
                // console.log(bank.accounts.length() 
            
        )
        })

      useEffect(()=>{
        getAllAccounts()
    },/*[limit, offset]*/ [])
  return (
    <>
    <div className="mycontainer">
    <header><Navbar user={user} /></header>
    <main>
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
        <h1>All Insurance Accounts</h1>
    </div>
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
    <table class="table table-dark table-striped-columns table-hover rounded">
                <thead>
                    <tr>
                    <th> Account Number </th>
                        <th> Customer Name </th>
                        <th> Agent Name</th>
                        <th> Insurance Type </th>
                        <th> Insurance Scheme </th>
                        <th> Creation Date </th>
                        <th> Maturity Date </th> 
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
          </main>
          <footer><Footer /></footer>
          </div>
          </>
  )
}

export default ViewAccounts