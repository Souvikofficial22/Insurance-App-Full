import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../Layouts/Navbar/Navbar'
import Footer from '../../Layouts/Footer/Footer'
import axios from 'axios'

const ViewEmployee = () => {
    const [employees,setEmployees] = useState([])
    // const [limit, setLimit] = useState(1);
    // const [offset, setOffset] = useState(1);
    // const [totalCount, setTotalCount] = useState(0);
    const navigate = new useNavigate()
    const user = {
        username: useParams().username,
        role: useParams().role,
      }
      const getAllEmployees = async()=>{
        // let size=limit
        // let page=offset-1
        const token = localStorage.getItem('token')
        let resp = await axios.get(`http://localhost:8081/employee/get-all`,
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
            setEmployees(resp.data)
        // // console.log(banks.fullName)
      }

      const handleDelete = async (userid)=>{
        const token = localStorage.getItem('token')
        
        let resp = await axios.put(`http://localhost:8081/employee/delete/${userid}`,null,
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
        
        getAllEmployees();
      }

      const handleUpdate =async(userid)=>{
        
        navigate(`/update/employee/${user.username}/${user.role}/${userid}`)
        

      }

      const tableRows = employees.map((employee,index)=>{
        return(
            <tr>
                <td>{employee.user.role}</td>
                <td>{employee.user.name}</td>
                <td>{employee.user.username}</td>
                <td>{employee.user.password}</td>
                <td>{employee.user.email}</td>
                <td>{employee.user.address}</td>
                <td>{employee.user.status === 'ACTIVE' ? 'Active' : 'Inactive'}</td>
                <td><button type="submit" class="btn btn-primary" onClick={()=>handleUpdate(employee.user.userId)}>Update</button></td>
                <td><button type="submit" class="btn btn-danger" onClick={()=>handleDelete(employee.user.userId)}>Delete</button></td>
            </tr>
            
                // console.log(bank.accounts.length())
            
        )
        })

      useEffect(()=>{
        getAllEmployees()
    },/*[limit, offset]*/ [])
  return (
    <>
    <div className="mycontainer">
    <header><Navbar user={user} /></header>
    <main>
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
        <h1>All Employee Details</h1>
    </div>
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
    <table class="table table-dark table-striped-columns table-hover rounded">
                <thead>
                    <tr>
                        <th> Emp Type</th>
                        <th> Emp Name </th>
                        <th> Username </th>
                        <th> Password </th>
                        <th> Email </th>
                        <th> Address </th>
                        <th> Status </th>
                        <th> Update </th>
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

export default ViewEmployee