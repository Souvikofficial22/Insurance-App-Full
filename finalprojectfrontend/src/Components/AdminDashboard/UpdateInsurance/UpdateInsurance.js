import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../Layouts/Navbar/Navbar'
import Footer from '../../Layouts/Footer/Footer'

const UpdateInsurance = () => {
    const planName = useRef()
    const [status,setStatus] = useState() 
    const navigate = new useNavigate()
    const insuranceid = useParams().id

    const user = {
        username: useParams().username,
        role: useParams().role,
    }

    const getInsurancePlan = async()=>{

        const token = localStorage.getItem("token")

        let resp = await axios.get(`http://localhost:8081/insuranceplan/get-id/${insuranceid}`,
        {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            }
          }).catch(err=>{
          alert("cannot find the plan")
          return
        })

        console.log(resp);
       if(!resp.data)
       {
        alert("cannot fetch data")
        return
       }
       planName.current.value = resp.data.insuranceType
       console.log(planName);
    //    if(resp.data.status==true){
    //     status.current.value = "Active"
    //    }
    //    else{
    //     status.current.value = "Inactive"
    //    }
    }

    useEffect(()=>{
        getInsurancePlan()
    },[])

    const handleSubmit= async (e)=>{
        e.preventDefault()
        if(status==2){
            alert("Please set a status")
            return
        }
        console.log(status);
        const token = localStorage.getItem("token")
        const resp= await axios.put(`http://localhost:8081/insuranceplan/update`, {
            "insuranceId": insuranceid,
            "insuranceType" : planName.current.value,
            "status": status
        }, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            }
          })
            .then(response => {
                alert('Plan updated successfully')
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
    <header><Navbar user={user} /></header>
    <main>
    <div className='d-flex align-items-center justify-content-center w-100'>
        <h1>Update Insurance Plan</h1>
    </div>
    <div className='d-flex align-items-center justify-content-center w-100'>
    <div className='login mt-3'>
            <div class="card">
                <div class="card-body">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Insurance Type:</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={planName} required/>
                    </div>
                    {/* <div class="mb-3">
                    <label for="formFile" class="form-label">Image:</label>
                    <input class="form-control" type="file" id="formFile" />
                    </div> */}
                    <div class="mb-3">
                    <label for="formFile" class="form-label">Status:</label>
                    <select class="form-select" name="Status" id="Status" onChange={(e) => handleStatus(e)}>
                        <option value="2">--select an option-- </option>
                        <option value="ACTIVE">Active</option>
                        <option value="INACTIVE">Inactive</option>
                    </select>
                    </div>
                    <button type="submit" class="btn btn-primary w-100" onClick={(e)=>handleSubmit(e)}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </main>
    </div>
    <footer><Footer /></footer>
    </>
  )
}

export default UpdateInsurance
