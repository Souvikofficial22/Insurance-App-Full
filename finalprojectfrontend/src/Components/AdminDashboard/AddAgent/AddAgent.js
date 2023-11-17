import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../Layouts/Navbar/Navbar'
import Footer from '../../Layouts/Footer/Footer'

const AddAgent = () => {
  
    const agentCode= useRef()
    const qualification = useRef()
    const agentName= useRef()
    const [status,setStatus] = useState()
    const username = useRef()
    const password = useRef()
    const email = useRef()
    const address = useRef()
    const user = {
        username: useParams().username,
        role: useParams().role,
    }
    const navigate =  useNavigate()

    // const getActiveStates = async()=>{
    //     const token = localStorage.getItem('token')
    //     let resp = await axios.get(`http://localhost:8081/state/getactivestates`,
    //     {
    //         headers: {
    //           'Content-Type': 'application/json',
    //           'Authorization': `Bearer ${token}`,
    //         }
    //       }).catch(err=>{
    //         alert("Something went wrong")
    //         return
    //     })
    //     console.log(resp)
    //         setStates(resp.data)
    //   }

    //   useEffect(()=>{
    //     getActiveStates()
    // },/*[limit, offset]*/ [])

    const handleSubmit= async (e)=>{
        e.preventDefault()
        if(status==2){
            alert("Please set a status")
            return
        }
        const token = localStorage.getItem("token")
        const resp= await axios.post(`http://localhost:8081/agentapp/save`, {
        "agentCode": agentCode.current.value,
        "qualification": qualification.current.value,      
        "user":{
                "name":agentName.current.value,
                "username":username.current.value,
                "password":password.current.value,
                "role": "agent",
                "email":email.current.value,
                "address":address.current.value,
                "status":status
            }
            
        }, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            }
          })
            .then(response => {
                alert('Agent added successfully')
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
    <header><Navbar user={user}/></header>
    <main>
    <div className="state-container">
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
    <h1>Add Agent</h1>
    </div>
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
        <div className='admin-login mt-3 mb-4'>
            <div class="card">
                <div class="card-body">
                <form>
                <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Agent Code:</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={agentCode} required/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Qualification:</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={qualification} required/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Agent Name:</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={agentName} required/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Username:</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={username} required/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Password:</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={password} required/>
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
    </>
  )

}

export default AddAgent