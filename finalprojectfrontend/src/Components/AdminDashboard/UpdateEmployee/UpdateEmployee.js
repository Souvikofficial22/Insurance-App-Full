import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../../Layouts/Navbar/Navbar'
import { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Footer from '../../Layouts/Footer/Footer'

const UpdateEmployee = () => {
    const empName= useRef()
    const [status,setStatus] = useState()
    const username = useRef()
    const email = useRef()
    const address = useRef()
    const [type,setType] = useState()
    const userId = useRef()
    const user = {
        username: useParams().username,
        role: useParams().role,
    }
    const empid = useParams().empid
    const navigate = new useNavigate()




    const getEmployeeDetails = async () => {
        const token = localStorage.getItem('token')
        let resp = await axios.get(`http://localhost:8081/employee/get-id/${empid}`,
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
        empName.current.value = resp.data.user.name
        username.current.value = resp.data.user.username
        setType(resp.data.user.role)
        email.current.value = resp.data.user.email
        address.current.value = resp.data.user.address
        setStatus(resp.data.user.status)
        userId.current.value = resp.data.user.userId

    }

    useEffect(() => {
        getEmployeeDetails()
    }, [])

    const handleTypeChange = (e) => {
        setType(e.target.value);
      };

      const handleStatus = (e)=>{
        e.preventDefault()
        setStatus(e.target.value)
    }

    const handleSubmit = async (e) => {
        
        const token = localStorage.getItem('token')
        const resp = await axios.put(`http://localhost:8081/employee/update`, {

        "user":{
            "userId":userId.current.value,
            "name":empName.current.value,
            "username":username.current.value,
            "role":type,
            "email":email.current.value,
            "address":address.current.value,
            "status":status
        }
},{
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  }).catch(err => {
            if (err.response.status == 400) {
                alert(err.response.data.user)
                return
            }
            alert("updation failed")
        })

        // console.log(resp.data.user);

        if (resp.status == 200) {
            alert("Employee updated successfully")

        }
        navigate(`/admindashboard/${user.username}/${user.role}`)

    }

    return (
        <><Navbar user={user}/>
        <div className="state-container">
        <h1>Update Employee</h1>
        <div className='wrapper d-flex align-items-center justify-content-center w-100'>
            
            <div className='admin-login mt-3'>
                <div class="card">
                    <div class="card-body">
                    <form>
                    <div className="mb-3">
                                    <label className="form-label">Employee Id</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={userId} readOnly />
                                </div>
                    <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Employee Type:</label>
                                <select class="form-select" id="insurance" value={type} onChange={handleTypeChange}>
                                    <option value="">-- select an option --</option>
                                    <option value="employee">Employee</option>
                                    <option value="admin">Admin</option>
                                </select>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Employee Name:</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={empName} required/>
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Username:</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={username} required/>
                        </div>
                        
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">Email:</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={email} required/>
                        </div>
    
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label" >Address</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" ref={address}></textarea>
                        </div>
    
                        <div class="mb-3">
                        <label for="formFile" class="form-label">Status:</label>
                        <select class="form-select" name="Status" id="Status" value={status} onChange={(e) => handleStatus(e)}>
                            <option value="2" selected>--select an option--- </option>
                            <option value="ACTIVE">Active</option>
                            <option value="INACTIVE">Inactive</option>
                        </select>
                        </div>
    
                        <div className='d-flex align-items-center justify-content-center'>
                            <button type="submit" class="btn btn-primary" onClick={(e)=>handleSubmit(e)}>Submit</button>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <Footer />
        </>
    )
}

export default UpdateEmployee