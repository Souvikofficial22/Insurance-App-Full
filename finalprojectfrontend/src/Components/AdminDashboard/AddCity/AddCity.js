import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../Layouts/Navbar/Navbar'
import Footer from '../../Layouts/Footer/Footer'

const AddCity = () => {
    const cityName= useRef()
    const [status,setStatus] = useState()
     const [stateId,setStateId] = useState()
     const [states,setStates] = useState([])
    const user = {
        username: useParams().username,
        role: useParams().role,
    }
    const navigate = new useNavigate()

    const getActiveStates = async()=>{
        const token = localStorage.getItem('token')
        let resp = await axios.get(`http://localhost:8081/state/getactivestates`,
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
            setStates(resp.data)
      }

      useEffect(()=>{
        getActiveStates()
    },/*[limit, offset]*/ [])
    const handleStateChange = (e) => {
        setStateId(parseInt(e.target.value));
      };

    const handleSubmit= async (e)=>{
        e.preventDefault()
        if(status==2){
            alert("Please set a status")
            return
        }
        const token = localStorage.getItem("token")
        const resp= await axios.post(`http://localhost:8081/city/save`, {
            "name":cityName.current.value,
            "status":status,
            "state":{
                "id":stateId
            }
            
        }, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            }
          })
            .then(response => {
                alert('City added successfully')
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
    <div className='mycontainer'>
        <header><Navbar user={user}/></header>
        <main>
    <div className="state-container">
    <h1>Add City</h1>
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
        
        <div className='admin-login mb-3'>
            <div class="card">
                <div class="card-body">
                <form className='mb-3'>
                <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">State:</label>
                            <select class="form-select" id="insurance" onChange={handleStateChange}>
                                <option value="">-- select an option --</option>
                                    {states.map((state) => (
                                        <option key={state.id} value={state.id}>
                                            {state.name}
                                        </option>
                                    ))}
                            </select>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name:</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={cityName} required/>
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

export default AddCity