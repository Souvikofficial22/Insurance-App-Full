import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../Layouts/Navbar/Navbar'
import Footer from '../../Layouts/Footer/Footer'
import './ViewScheme.css'

const ViewScheme = () => {
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
            console.log(resp.data);
        // // console.log(banks.fullName)
      }

      const handleDelete = async (policyid)=>{
        const token = localStorage.getItem('token')
        let resp = await axios.delete(`http://localhost:8081/policy/delete/${policyid}`,
        {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            }
          })
        .catch(err=>{
          alert("Invalid request")
          return
        })
        
        getAllPolicies();
      }

      const handleUpdate =async(policyid)=>{
        
        navigate(`/update/policy/${user.username}/${user.role}/${policyid}`)
        

      }

      const tableRows = policies.map((policy,index)=>{
        return(
            <tr>
                <td>{policy.plan.insuranceType}</td>
                <td>Commission for new registration: {policy.newCommission}%<br/>
                Commission for installment: {policy.installmentCommission}%</td>
                <td>{policy.description}</td>
                {/* <td>{policy.status == "ACTIVE" ? 'Active' : 'Inactive'}</td>
                <td><button type="submit" class="btn btn-primary" onClick={()=>handleUpdate(policy.policyId)}>Update</button></td> */}
                {/* <td><button type="submit" class="btn btn-danger" onClick={()=>handleDelete(policy.policyId)}>Delete</button></td> */}
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
        <h1>All Insurance Schemes</h1>
    </div>
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
    <table class="table table-dark table-striped-columns table-hover rounded">
                <thead>
                    <tr>
                        <th> Insurance Type </th>
                        <th> Agent Commission </th>
                        <th> Insurance Description </th>
                        {/* <th> Status </th>
                        <th> Update </th> */}
                        {/* <th> Delete </th> */}
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

export default ViewScheme