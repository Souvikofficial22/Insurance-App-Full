import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../Layouts/Navbar/Navbar'
import './AddPolicy.css'
import Footer from '../../Layouts/Footer/Footer'

const AddPolicy = () => {
    const [insurances,setInsurances] = useState([])
    const policyName = useRef()
    const commNew = useRef()
    const description = useRef()
    const commInst = useRef()
    const policyMinTerm = useRef()
    const policyMaxTerm = useRef()
    const policyMinAge = useRef()
    const policyMaxAge = useRef()
    const policyMinAmount = useRef()
    const policyMaxAmount = useRef()
    const profit = useRef()
    const [selectedId, setSelectedId] = useState(null);
    const [status,setStatus] = useState(2)

    const navigate = new useNavigate()

    const user = {
        username: useParams().username,
        role: useParams().role,
    }


    const getAllPlans = async()=>{
        const token = localStorage.getItem('token')
        let resp = await axios.get(`http://localhost:8081/insuranceplan/get-all`,
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
            setInsurances(resp.data)
      }

      useEffect(()=>{
        getAllPlans()
    },/*[limit, offset]*/ [])

    const handleInsuranceChange = (e) => {
        setSelectedId(parseInt(e.target.value));
      };

      const handleStatus = (e)=>{
        e.preventDefault()
        setStatus(e.target.value)
    }

      const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token")
        const resp= await axios.post(`http://localhost:8081/policy/save`, {
            "policyName": policyName.current.value,
            "newCommission": commNew.current.value,
            "installmentCommission": commInst.current.value,
            "description": description.current.value,
            "status": status,
            "plan":{
                "insuranceId": selectedId
    },
    "details":{
        "miniAmount":policyMinAmount.current.value,
        "maxiAmount":policyMaxAmount.current.value,
        "miniInvestmentTime":policyMinTerm.current.value,
        "maxiInvestmentTime":policyMaxTerm.current.value,
        "miniAge":policyMinAge.current.value,
        "maxiAge":policyMaxAge.current.value,
        "profit": profit.current.value
        }
        }, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            }
          })
            .then(response => {
                alert('Policy added successfully')
                navigate(`/admindashboard/${user.username}/${user.role}`)
            })
            .catch(error => console.error(error));
    }
  return (
    <>
    <header><Navbar user={user} /></header>
    <main>
    <div className='d-flex align-items-center justify-content-center w-100'>
        <h1>Adding Insurance Policy</h1>
    </div>
    <div className="d-flex align-items-center justify-content-center">
    <div className='login-policy mt-3 mb-4'>
            <div class="card">
    <form class="row g-3 ms-3 me-3 mt-3 mb-3">
  <div class="col-md-4">
    <label for="exampleInputEmail1" class="form-label">Insurance Type:</label>
        <select class="form-select" id="insurance" onChange={handleInsuranceChange}>
            <option value="">-- select an option --</option>
                {insurances.map((insurance) => (
                    <option key={insurance.insuranceId} value={insurance.insuranceId}>
                        {insurance.insuranceType}
                    </option>
                ))}
        </select>
  </div>
  <div class="col-md-4">
    <label for="exampleInputEmail1" class="form-label">Insurance Scheme:</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={policyName}/>
  </div>
  {/* <div class="col-md-4">
    <label for="formFile" class="form-label">Image:</label>
    <input class="form-control" type="file" id="formFile" />
  </div> */}
  <div class="col-md-4">
    <label for="exampleInputEmail1" class="form-label">Profit Ratio(%):</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={profit}/>
  </div>
  <div class="col-md-4">
    <label for="exampleInputEmail1" class="form-label">Commission for new registration(%):</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={commNew}/>
  </div>
  <div class="col-md-4">
    <label for="exampleInputEmail1" class="form-label">Commission for installment payment(%):</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={commInst}/>
  </div>
  <div class="col-md-4">
    <label for="inputState" class="form-label">Status</label>
    <select class="form-select" name="Status" id="Status" onChange={(e) => handleStatus(e)}>
        <option value="2" selected>--select an option-- </option>
        <option value="1">Active</option>
        <option value="0">Inactive</option>
    </select>
  </div>
  <div class="col-12">
    <label for="exampleFormControlTextarea1" class="form-label" >Description</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" ref={description}></textarea>
  </div>
  <div class="col-12">
    <h1 className='d-flex align-items-center justify-content-center'>Premium Details</h1>
  </div>
  <div class="col-md-4">
    <h5 className="mt-2">Age:</h5>
  </div>
  <div class="col-md-4">
  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={policyMinAge} placeholder='minimum age'/>
  </div>
  <div class="col-md-4">
  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={policyMaxAge} placeholder='maximum age'/>
  </div>
  <div class="col-md-4">
    <h5 className="mt-2">Policy Term:</h5>
  </div>
  <div class="col-md-4">
  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={policyMinTerm} placeholder='minimum term'/>
  </div>
  <div class="col-md-4">
  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={policyMaxTerm} placeholder='maximum term'/>
  </div>
  <div class="col-md-4">
    <h5 className="mt-2">Investment Amount:</h5>
  </div>
  <div class="col-md-4">
  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={policyMinAmount} placeholder='minimum amount'/>
  </div>
  <div class="col-md-4">
  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={policyMaxAmount} placeholder='maximum amount'/>
  </div>
  <div className='d-flex align-items-center justify-content-center'>
    <button type="submit" class="btn btn-primary" onClick={(e)=>handleSubmit(e)}>Submit</button>
  </div>
</form>
</div>
</div>
</div>
</main>
    <footer><Footer /></footer>
    </>
  )
}

export default AddPolicy