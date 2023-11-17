import axios from 'axios'
import React, { useState } from 'react'
import { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Footer from '../../Layouts/Footer/Footer'
import Navbar from '../../Layouts/Navbar/Navbar'

const AddState = () => {
    const stateName= useRef()
    const [status,setStatus] = useState(2) 
    const user = {
        username: useParams().username,
        role: useParams().role,
    }
    const navigate = new useNavigate()

    const handleSubmit= async (e)=>{
        e.preventDefault()
        if(status==2){
            alert("Please set a status")
            return
        }
        const token = localStorage.getItem("token")
        const resp= await axios.post(`http://localhost:8081/state/save`, {
            "name":stateName.current.value,
            "status":status
        }, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            }
          })
            .then(response => {
                alert('State added successfully')
                navigate(`/admindashboard/${user.username}/${user.role}`)
            })
            .catch(error => console.error(error));

    }
    const handleStatus = (e)=>{
        e.preventDefault()
        setStatus(e.target.value)
    }

  return (
    <>
    <div className="mycontainer"><header><Navbar user={user}/></header>
    <main>
    <div className="state-container">
    <h1>Add State</h1>
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
        
        <div className='admin-login mt-3'>
            <div class="card">
                <div class="card-body">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name:</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={stateName} required/>
                    </div>
                    <div class="mb-3">
                    <label for="formFile" class="form-label">Status:</label>
                    <select class="form-select" name="Status" id="Status" onChange={(e) => handleStatus(e)}>
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
    </main>
    <footer><Footer /></footer>
    </div>
    </>
  )
}

export default AddState