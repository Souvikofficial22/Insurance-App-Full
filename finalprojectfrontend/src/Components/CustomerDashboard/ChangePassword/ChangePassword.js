import axios from 'axios';
import './changePass.css'
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../Layouts/Navbar/Navbar';
import Footer from '../../Layouts/Footer/Footer';

const ChangePassword = () => {
    const navigateObject = useNavigate()
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    

    const userDetails = {
        username: useParams().username,
        role: useParams().role
    }
    

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(newPassword == "" || confirmPassword == ""){
            setErrorMessage("All fields are requires")
            return
        }
       
        if (newPassword !== confirmPassword) {
            setErrorMessage('New password and confirm password do not match');
            return;
        }


        // Send API request to update password with oldPassword and newPassword
        // Handle success response
        // const resp = await axios.get(`http://localhost:8080/customerapp/getusername/${userDetails.username}`).catch(err => {
        //     alert("User not found")
        //     return
        // })



        // console.log(resp.data.user.userId);
        // setCurrUser(resp.data.user)
        // console.log(currUser);
        // console.log(newPassword);

        // const respo = await axios.put(`http://localhost:8080/userapp/updatepassword/userid/${resp.data.user.userId}`, {
        //     "password": newPassword


        // }).catch(err => {
        //     if (err.response.status == 400) {
        //         alert(err.response.data)
        //         return
        //     }
        // })

        // if (respo.status == 200) {
        //     alert("password changed successfully")
        //     navigateObject(`/customerdashboard/${userDetails.username}/${userDetails.role}`)

        // }
        const token = localStorage.getItem('token')
        const respo = await axios.put(`http://localhost:8081/user/updatepassword/username/${userDetails.username}`, {
            "password": newPassword


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
        })

        if (respo.status == 200) {
            alert("password changed successfully")
            navigateObject(`/customerdashboard/${userDetails.username}/${userDetails.role}`)

        }



    };

    return (
        <>
        <div className='mycontainer'>
            <header><Navbar user={userDetails} /></header>
            <main>
            <div className='d-flex align-items-center justify-content-center w-100'>
                <h1>Change Password</h1>
            </div>
            <div className='d-flex align-items-center justify-content-center w-100 mb-5'>
                <div className='login mt-3'>
                    <div className="card mb-3">
                        <div className="card-body">
                            <form>

                                <div className="mb-3">
                                    <label className="form-label">New Password</label>
                                    <input type="password" className="form-control" id="exampleInputEmail1"
                                        value={newPassword}
                                        onChange={(event) => {
                                            event.preventDefault()
                                            setNewPassword(event.target.value)
                                        }
                                        }
                                        required
                                    />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label">Confirm Password</label>
                                    <input type="password" className="form-control" id="exampleInputEmail1"
                                        value={confirmPassword}
                                        onChange={(event) => {
                                            setConfirmPassword(event.target.value)
                                            event.preventDefault()
                                            }
                                        }
                                        required
                                    />
                                </div>

                                {errorMessage && (
                                    <div className="alert alert-danger" role="alert">
                                        {errorMessage}
                                    </div>
                                )}

                                <button type="submit" className="btn btn-primary w-100" onClick={(e) => handleSubmit(e)}>Update</button>



                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <form onSubmit={handleSubmit}> */}
            {/* <div className="mb-3">
                    <label htmlFor="oldPassword" className="form-label">
                        Old Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="oldPassword"
                        value={oldPassword}
                        onChange={(event) => setOldPassword(event.target.value)}
                        required
                    />
                </div> */}
            {/* <div className="mb-3">
                    <label htmlFor="newPassword" className="form-label">
                        New Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="newPassword"
                        value={newPassword}
                        onChange={(event) => setNewPassword(event.target.value)}
                        required
                    />

                   


                </div> */}
            {/* <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        className="form-control"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(event) => setConfirmPassword(event.target.value)}
                        required
                    />
                </div>
                {errorMessage && (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )}
                    */}

            {/* </form> */}</main>
            <footer><Footer /></footer>
            </div>
        </>
    );
};

export default ChangePassword;
