import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Navbar from '../../Layouts/Navbar/Navbar'
import { useRef } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Footer from '../../Layouts/Footer/Footer'

const CustomerProfile = () => {
    const navigateObject = useNavigate()
    // const customerData = () => {
    //     const[currUser,setCurrUser] = useState(null)
    // }

    // const[currUser,setCurrUser] = useState(null)

    const userDetails = {
        username: useParams().username,
        role: useParams().role
    }

    const currCustId = useRef()
    const fullname = useRef()
    const phone = useRef()
    const address = useRef()
    const city = useRef()
    const state = useRef()
    const dob = useRef()
    const nominee = useRef()
    const nomineeRelation = useRef()
    const pincode = useRef()
    const username = useRef()
    const email = useRef()




    const getCustomerDetails = async () => {
        console.log(userDetails.username);
        console.log("hekooooo");
        const token = localStorage.getItem('token')
        let customer = await axios.get(`http://localhost:8081/customerapp/getusername/${userDetails.username}`,
        {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            }
          }
        )
            .catch(err => {
                alert(err.message)
                return
            })

        // setCurrUser(customer.data);
        //customer ke andar data h data me user hai
        // console.log(customer.data);
        // setCurrUser(currUser => {
        //     return(customer.data);
        // })

        // return customer.data

        console.log(customer.data);
        console.log(customer.data.customerId);
        currCustId.current.value = customer.data.customerId
        fullname.current.value = customer.data.user.name
        phone.current.value = customer.data.phone
        address.current.value = customer.data.user.address
        city.current.value = customer.data.city
        state.current.value = customer.data.state
        dob.current.value = customer.data.dateOfBirth
        nominee.current.value = customer.data.nominee
        nomineeRelation.current.value = customer.data.nomineeRelation
        pincode.current.value = customer.data.pincode
        email.current.value = customer.data.user.email
        username.current.value = customer.data.user.username

        // console.log(fullname.current.value);

    }

    useEffect(() => {
        getCustomerDetails()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(currCustId.current.value);
        console.log(phone);

        if (phone.current.value == "" || city.current.value == "" || address.current.value == "" || state.current.value == "" || pincode.current.value == "" || nominee.current.value == "" || nomineeRelation.current.value == "" || email.current.value == "") {
            alert("All fields are required")
            return
        }
        const token = localStorage.getItem('token')
        const resp = await axios.put(`http://localhost:8081/customerapp/update/customerid/${currCustId.current.value}`, {

            "phone": phone.current.value,
            "state": state.current.value,
            "city": city.current.value,
            "pincode": pincode.current.value,
            "nominee": nominee.current.value,
            "nomineeRelation": nomineeRelation.current.value,
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

        // console.log(resp.data);

        if (resp.status == 200) {
            alert("user updated successfully")
            navigateObject(`/customerdashboard/${userDetails.username}/${userDetails.role}`)

        }

    }

    return (
        <>
        <div className='mycontainer'>
            <header><Navbar user={userDetails} /></header>
            <main>
            <div className='d-flex align-items-center justify-content-center w-100'>
                <h1>Customer Profile</h1>
            </div>
            <div className='d-flex align-items-center justify-content-center w-100 mb-3'>
                <div className='login mt-3'>
                    <div className="card">
                        <div className="card-body">
                            <form>

                                <div className="mb-3">
                                    <label className="form-label">Customer Id</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={currCustId} readOnly />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Full Name</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={fullname} readOnly />
                                </div>


                                <div className="mb-3">
                                    <label className="form-label">Username</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={username} readOnly />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Date Of Birth</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={dob} readOnly />
                                </div>


                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={email} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Phone</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={phone} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Address</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={address} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">City</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={city} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">State</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={state} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Pin</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={pincode} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Nominee</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={nominee} />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Nominee Relation</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={nomineeRelation} />
                                </div>

                                <button type="submit" className="btn btn-primary w-100" onClick={(e) => handleSubmit(e)}>Update</button>

                                {/* <div className="mb-3">
                    <label for="formFile" className="form-label">Image:</label>
                    <input className="form-control" type="file" id="formFile" />
                    </div> */}
                                {/* <div className="mb-3">
                        <label  className="form-label">Commission for new registration(%):</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={commNew}/>
                    </div> */}
                                {/* <div className="mb-3">
                        <label  className="form-label">Commission for installment payment(%):</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={commInst}/>
                    </div> */}

                                {/* <div className="mb-3">
                    <label for="exampleFormControlTextarea1" className="form-label" >Description</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" ref={description}></textarea>
                    </div>

                    <div className="mb-3">
                    <label for="formFile" className="form-label">Status:</label>
                    <select className="form-control" name="Status" id="Status" onChange={(e) => handleStatus(e)}>
                        <option value="2">--select--status-- </option>
                        <option value="1">Active</option>
                        <option value="0">Inactive</option>
                    </select> */}
                                {/* </div> */}

                            </form>
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

export default CustomerProfile