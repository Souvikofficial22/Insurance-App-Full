import axios from 'axios'
import React, { useEffect, useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../../Layouts/Navbar/Navbar'
import Footer from '../../../Layouts/Footer/Footer'

const AgentProfile = () => {
    const navigateObject = useNavigate()

    const userDetails = {
        username: useParams().username,
        role: useParams().role
    }

    // const currAgentId = useRef()
    const fullname = useRef()
    const address = useRef()
    const username = useRef()
    const email = useRef()
    const agentCode = useRef()
    const qualification = useRef()

    const getAgentDetails = async () => {
        console.log(userDetails.username);
        console.log("hekooooo");
        const token = localStorage.getItem('token')
        let agent = await axios.get(`http://localhost:8081/agentapp/getusername/${userDetails.username}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
              }
        })
            .catch(err => {
                alert("Agent not found")
                return
            })

        // currAgentId.current.value = agent.data.customerId
        fullname.current.value = agent.data.user.name
        address.current.value = agent.data.user.address
        email.current.value = agent.data.user.email
        username.current.value = agent.data.user.username
        agentCode.current.value = agent.data.agentCode
        qualification.current.value = agent.data.qualification

    }

    useEffect(() => {
        getAgentDetails()
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (address.current.value == "" || qualification.current.value == "" || email.current.value == "") {
            alert("All fields are required")
            return
        }
        const token = localStorage.getItem('token')
        console.log(username.current.value);
        const resp = await axios.put(`http://localhost:8081/agentapp/update/username/${username.current.value}`, {

            "qualification": qualification.current.value,
            "user": {
                "address": address.current.value,
                "email": email.current.value
            }


        },{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
        }).catch(err => {
            if (err.response.status == 400) {
                alert(err.response.data)
                return
            }
            alert("updation failed")
        })

        console.log(resp.data);

        if (resp.status == 200) {
            alert("updated successfully")
            navigateObject(`/agentdashboard/${userDetails.username}/${userDetails.role}`)

        }

    }


    return (
        <>
            <Navbar user={userDetails} />
            <div className='d-flex align-items-center justify-content-center w-100'>
                <h1>Agent Profile</h1>
            </div>
            <div className='d-flex align-items-center justify-content-center w-100 mb-3'>
                <div className='login mt-3'>
                    <div className="card">
                        <div className="card-body">
                            <form>

                                {/* <div className="mb-3">
                                <label className="form-label">Customer Id</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={currCustId} readOnly />
                            </div> */}

                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={fullname} readOnly />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Agent Code</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={agentCode} readOnly />
                                </div>


                                <div className="mb-3">
                                    <label className="form-label">Username</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={username} readOnly />
                                </div>


                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={email} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Address</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={address} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Qualification</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={qualification} />
                                </div>

                                <button type="submit" className="btn btn-primary w-100" onClick={(e) => handleSubmit(e)}>Update</button>


                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <footer><Footer /></footer>
        </>
    )
}

export default AgentProfile