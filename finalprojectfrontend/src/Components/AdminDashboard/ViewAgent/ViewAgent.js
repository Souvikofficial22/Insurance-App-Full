import React from 'react'
import Footer from '../../Layouts/Footer/Footer'
import Navbar from '../../Layouts/Navbar/Navbar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'

const ViewAgent = () => {
    const [agents,setAgents] = useState([])

    // const [limit, setLimit] = useState(1);
    // const [offset, setOffset] = useState(1);
    // const [totalCount, setTotalCount] = useState(0);
    const navigate = new useNavigate()
    const user = {
        username: useParams().username,
        role: useParams().role,
      }
      const getAllAgents = async()=>{
        // let size=limit
        // let page=offset-1
        const token = localStorage.getItem('token')
        let resp = await axios.get(`http://localhost:8081/agentapp/agents`,
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
            setAgents(resp.data)
        // // console.log(banks.fullName)
      }

      const handleDelete = async (userid)=>{
        const token = localStorage.getItem('token')
        let resp = await axios.put(`http://localhost:8081/agentapp/delete/${userid}`,null,
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
        
        getAllAgents();
      }

      const handleUpdate =async(agentid)=>{
        
        navigate(`/update/agent/${user.username}/${user.role}/${agentid}`)
        

      }

      const tableRows = agents.map((agent,index)=>{
        return(
            <tr>
                <td>{agent.agentCode}</td>
                <td>{agent.user.name}</td>
                <td>{agent.user.username}</td>
                <td>{agent.user.email}</td>
                <td>{agent.user.address}</td>
                <td>{agent.qualification}</td>
                <td>{agent.user.status === 'ACTIVE' ? 'Active' : 'Inactive'}</td>
                {/* <td><button type="submit" class="btn btn-primary" onClick={()=>handleUpdate(agent.user.userId)}>Update</button></td> */}
                <td><button type="submit" class="btn btn-danger" onClick={()=>handleDelete(agent.user.userId)}>Delete</button></td> 
            </tr>
            
                // console.log(bank.accounts.length())
            
        )
        })

      useEffect(()=>{
        getAllAgents()
    },/*[limit, offset]*/ [])
  return (
    <>
    <div className="mycontainer">
    <header><Navbar user={user} /></header>
    <main>
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
        <h1>All Agent Details</h1>
    </div>
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
    <table class="table table-dark table-striped-columns table-hover rounded">
                <thead>
                    <tr>
                    <th> Agent Code </th>
                        <th> Agent Name </th>
                        <th> Username </th>
                        <th> Email </th>
                        <th> Address </th>
                        <th> Qualification </th>
                        <th> Status </th>
                        {/* <th> Update </th>*/}
                        <th> Delete </th> 
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

export default ViewAgent