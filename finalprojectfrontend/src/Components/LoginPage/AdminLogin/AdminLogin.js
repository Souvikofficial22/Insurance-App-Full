import React, { useEffect, useRef, useState } from 'react'
import './AdminLogin.css'
import Navbar from '../../Layouts/Navbar/Navbar'
import Footer from '../../Layouts/Footer/Footer'
import jwtDecode from 'jwt-decode'
import axios from 'axios'
import { Await, useNavigate } from 'react-router-dom'
const AdminLogin = () => {

    const username = useRef()
    const password = useRef()
    const navigateObject = new useNavigate()
    const handleLogin = async (e)=>{
        e.preventDefault();
        console.log("Inside handlelogin");
        const user = {
            username: username.current.value,
            password: password.current.value
        }
        if(user.username==="" || user.password===""){
            alert("Username or password is empty")
            return
        }
            let resp= await axios.post(`http://localhost:8081/login`,{
                "username":user.username,
                "password":user.password
            }).catch(err=>{
                console.log(err)
                if(err.response.status===400 || err.response.status===401){
                    alert("Invalid Username or Password")
                    return
                }
            })
            

            if (resp && resp.status === 200) {
                const token= resp.headers.authorization
                const decode = jwtDecode(token)
                const role = decode.roles

                if (role === 'admin') {
                    localStorage.setItem('token', token);
                    navigateObject(`/admindashboard/${username.current.value}/${role}`);

                  } else {
                    alert('Invalid user');
                  }
            }
    }


  return (
    <>
    <Navbar />
    <div className="admin-container">
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
        <div className='login mt-3'>
            <div class="card">
                <div class="card-header">
                    Admin Login
                </div>
                <div class="card-body">
                <form className="needs-validation">
                    <div class="mb-3 was-validated">
                        <label for="exampleInputEmail1" class="form-label">Username</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" ref={username} required/>
                        <div className="invalid-feedback">
                            Please Enter Your Username
                        </div>
                    </div>
                    <div class="mb-3 was-validated">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" ref={password} required/>
                        <div className="invalid-feedback">
                            Please Enter Your Password
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary w-100" onClick={handleLogin}>Login</button>
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

export default AdminLogin