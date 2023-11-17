import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../Layouts/Navbar/Navbar'

const AddPolicyDetails = () => {
    const [insurances,setInsurances] = useState([])
    const [schemes,setSchemes] = useState([])
    const policyMinTerm = useRef()
    const policyMaxTerm = useRef()
    const policyMinAge = useRef()
    const policyMaxAge = useRef()
    const policyMinAmount = useRef()
    const policyMaxAmount = useRef()
    const [selectedInsuranceId, setSelectedInsuranceId] = useState(null);
    const [selectedPolicyId, setSelectedPolicyId] = useState(null);
    const [policies,setPolicies] = useState([])
    const [status,setStatus] = useState(2)

    const policyName = useRef()
    const commNew = useRef()
    const description = useRef()
    const commInst = useRef()

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
        setSelectedInsuranceId(parseInt(e.target.value));
      };

      const handleSchemeChange = (e) => {
        setSelectedPolicyId(parseInt(e.target.value));
      };

    const handlePolicies =()=>{
        const insurance = insurances.find((insurance) => insurance.insuranceId === selectedInsuranceId);
        setPolicies(insurance.policies)
    }

    useEffect(()=>{
        handlePolicies()
    },/*[limit, offset]*/ [selectedInsuranceId])
      const handleStatus = (e)=>{
        e.preventDefault()
        setStatus(parseInt(e.target.value))
    }

      const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem("token")
    //     const resp= await axios.post(`http://localhost:8081/policy/save`, {
    //         "policyName": policyName.current.value,
    //         "newCommission": commNew.current.value,
    //         "installmentCommission": commInst.current.value,
    //         "description": description.current.value,
    //         "status": status,
    //         "plan":{
    //             "insuranceId": selectedId
    // }
        // }, {
        //     headers: {
        //       'Content-Type': 'application/json',
        //       'Authorization': `Bearer ${token}`,
        //     }
        //   })
        //     .then(response => {
        //         alert('Policy details added successfully')
        //         navigate(`/admindashboard/${user.username}/${user.role}`)
        //     })
        //     .catch(error => console.error(error));
    }
  return (
    <>
    <Navbar user={user} />
    <div className='d-flex align-items-center justify-content-center w-100'>
        <h1>Adding Insurance Policy</h1>
    </div>
    <div className='d-flex align-items-center justify-content-center w-100 mb-3'>
    <div className='login mt-3'>
            <div class="card">
                <div class="card-body">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Insurance Type:</label>
                        <select class="form-control" id="insurance" onChange={(e)=>handleInsuranceChange(e)}>
                            <option value="">-- select an option --</option>
                            {insurances.map((insurance) => (
                                <option key={insurance.insuranceId} value={insurance.insuranceId}>
                                {insurance.insuranceType}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Insurance Scheme:</label>
                        <select class="form-control" id="insurance" onChange={(e)=>handleSchemeChange(e)}>
                            <option value="">-- select an option --</option>
                            {policies.length>0 && policies.map((policy) => (
                                <option key={policy.policyId} value={policy.policyId}>
                                {policy.policyName}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div class="mb-3">
                    <label for="formFile" class="form-label">Image:</label>
                    <input class="form-control" type="file" id="formFile" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Commission for new registration(%):</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={commNew}/>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Commission for installment payment(%):</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={commInst}/>
                    </div>

                    <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label" >Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" ref={description}></textarea>
                    </div>

                    <div class="mb-3">
                    <label for="formFile" class="form-label">Status:</label>
                    <select class="form-control" name="Status" id="Status" onChange={(e) => handleStatus(e)}>
                        <option value="2">--select--status-- </option>
                        <option value="1">Active</option>
                        <option value="0">Inactive</option>
                    </select>
                    </div>
                    <button type="submit" class="btn btn-primary w-100" onClick={(e)=>handleSubmit(e)}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default AddPolicyDetails