import React from 'react'
import './AdminLogin.css'
import Navbar from '../../Layouts/Navbar/Navbar'
const AdminLogin = () => {
  return (
    <>
    <Navbar />
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
        <div className='login mt-3'>
            <div class="card">
                <div class="card-header">
                    Login As Admin
                </div>
                <div class="card-body">
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1"/>
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
        </div>

    </div>
    </>
  )
}

export default AdminLogin