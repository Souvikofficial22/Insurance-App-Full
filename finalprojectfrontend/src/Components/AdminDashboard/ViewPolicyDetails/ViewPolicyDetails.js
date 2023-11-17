import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../Layouts/Navbar/Navbar'
import Footer from '../../Layouts/Footer/Footer'
import './ViewPolicyDetails.css'

const ViewPolicyDetails = () => {
    const [policies,setPolicies] = useState([])
    // const [limit, setLimit] = useState(1);
    // const [offset, setOffset] = useState(1);
    // const [totalCount, setTotalCount] = useState(0);
    const navigate = new useNavigate()
    const user = {
        username: useParams().username,
        role: useParams().role,
      }
      const getAllPolicies = async()=>{
        // let size=limit
        // let page=offset-1
        const token = localStorage.getItem('token')
        let resp = await axios.get(`http://localhost:8081/policy/get-all`,
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
            setPolicies(resp.data)
        // // console.log(banks.fullName)
      }


      const tableRows = policies.map((policy,index)=>{
        return(
            <tr>
                <td>{policy.plan.insuranceType}</td>
                <td>{policy.policyName}</td>
                <td>{policy.details.miniInvestmentTime}</td>
                <td>{policy.details.maxiInvestmentTime}</td>
                <td>{policy.details.miniAge}</td>
                <td>{policy.details.maxiAge}</td>
                <td>{policy.details.miniAmount}</td>
                <td>{policy.details.maxiAmount}</td>
            </tr>
            
                // console.log(bank.accounts.length())
            
        )
        })

      useEffect(()=>{
        getAllPolicies()
    },/*[limit, offset]*/ [])
  return (
    <>
    <div className="mycontainer">
    <header><Navbar user={user} /></header>
    <main>
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
        <h1>All Schemes Details</h1>
    </div>
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
    <table class="table table-dark table-striped-columns table-hover rounded">
                <thead>
                    <tr>
                        <th> Insurance Type </th>
                        <th> Scheme Name </th>
                        <th> Minimum Term </th>
                        <th> Maximum Term </th>
                        <th> Minimum Age </th>
                        <th> Maximum Age </th>
                        <th> Minimum Investment Amount </th>
                        <th> Maximum Investment Amount </th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
        {/* <div className="card-footer white-background">
            {totalCount > 0 &&
              <Paginate totalCount={totalCount} limit={limit} offset={offset} setLimit={setLimit} setOffset={setOffset} />
            }
          </div> */}
          </main>
          <footer><Footer /></footer>
          </div>
          </>
  )
}

export default ViewPolicyDetails