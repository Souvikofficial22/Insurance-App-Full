import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../../Layouts/Footer/Footer';
import Navbar from '../../Layouts/Navbar/Navbar';
import { useNavigate, useParams } from 'react-router-dom';

const UserRegistration = () => {
    const [user, setUser] = useState({ username: "", role: "" });
    const { username, role } = useParams();
    const navigate = useNavigate()
    const { agentid} = useParams()

  useEffect(() => {
    if (username && role) {
      setUser({ username, role });
    }
  }, [username,role]);
  
    const [formData, setFormData] = useState({
        dateOfBirth: '',
        phone: '',
        state: '',
        city: '',
        pincode: '',
        nominee: '',
        nomineeRelation: '',
        user: {
          name: '',
          username: '',
          password: '',
          role: 'customer',
          email: '',
          address: '',
          status: 'ACTIVE',
        },
      });

      const [states, setStates] = useState([]);
        const [cities, setCities] = useState([]);

        const getActiveStates = async()=>{

            const resp = await axios.get(`http://localhost:8081/state/getactivestates`).catch(err=>{
                alert("Could not fetch the states")
            });

            setStates(resp.data);
        }

        useEffect(()=>{
            getActiveStates()
        },[])

        useEffect(()=>{
            if (formData.state) {
                const st = states.find(state => state.name === formData.state);
                if (st) {
                  setCities(st.cities);
                }
              }
        },[formData.state])
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleUserInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          user: {
            ...formData.user,
            [name]: value,
          },
        });
      };
    
      const handleSubmit = async(event) => {
        event.preventDefault();
        console.log(formData);
        try{
        if(agentid)
        {
            const resp= await axios.post(`http://localhost:8081/customerapp/save/agent/${agentid}`, 
            {
              "dateOfBirth": formData.dateOfBirth,
              "phone":formData.phone,
              "state":formData.state,
              "city":formData.city,
              "pincode":formData.pincode,
              "nominee":formData.nominee,
              "nomineeRelation":formData.nomineeRelation,
              "user":{
                "name":formData.user.name,
                "password":formData.user.password,
                "username": formData.user.username,
                "email":formData.user.email,
                "status":"ACTIVE",
                "role":"customer",
                "address":formData.user.address
              }
            }
        )
            .then(response => {
                alert('Customer added successfully')
                navigate(`/`)
            });
        }
        else{
            const resp= await axios.post(`http://localhost:8081/customerapp/save`, 
        {
          "dateOfBirth": formData.dateOfBirth,
          "phone":formData.phone,
          "state":formData.state,
          "city":formData.city,
          "pincode":formData.pincode,
          "nominee":formData.nominee,
          "nomineeRelation":formData.nomineeRelation,
          "user":{
            "name":formData.user.name,
            "password":formData.user.password,
            "username": formData.user.username,
            "email":formData.user.email,
            "status":"ACTIVE",
            "role":"customer",
            "address":formData.user.address
          }
        }
        )
            .then(response => {
                alert('Customer added successfully')
                navigate(`/`)
            });
        }
        }
        catch(error){
            // if(error.response.status==400){
            //   alert("username already exist")
            // }
            console.log(error);
        }

      };

      return(
        <>
        <div className='mycontainer'>
            <header><Navbar user={user} /></header>
            <main>
    <div className='d-flex align-items-center justify-content-center w-100'>
        <h1>Customer Registration</h1>
    </div>
    <div className="d-flex align-items-center justify-content-center">
    <div className='login-policy mt-3 mb-4'>
            <div class="card">
    <form class="row g-3 ms-3 me-3 mt-3 mb-3">
  <div class="col-md-4">
    <label for="exampleInputEmail1" class="form-label">Customer Name:</label>
  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    name="name"
    value={formData.user.name}
    onChange={handleUserInputChange}
    required
  />
  </div>
  <div class="col-md-4">
    <label for="exampleInputEmail1" class="form-label">Username:</label>
  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    name="username"
    value={formData.user.username}
    onChange={handleUserInputChange}
    required
  />
  </div>
  <div class="col-md-4">
  <label for="exampleInputEmail1" class="form-label">Password:</label>
  <input type="password" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    name="password"
    value={formData.user.password}
    onChange={handleUserInputChange}
    required
  />
  </div>
  <div class="col-md-4">
  <label for="exampleInputEmail1" class="form-label">Email:</label>
  <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    name="email"
    value={formData.user.email}
    onChange={handleUserInputChange}
    required
  />
  </div>
  <div class="col-md-4">
  <label for="exampleInputEmail1" class="form-label">Address:</label>
  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    name="address"
    value={formData.user.address}
    onChange={handleUserInputChange}
    required
  />
  </div>
  <div class="col-md-4">
  <label for="exampleInputEmail1" class="form-label">Date of Birth:</label>
  <input type="date" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    name="dateOfBirth"
    value={formData.dateOfBirth}
    onChange={handleInputChange}
    required
  />
  </div>
  <div class="col-md-4">
  <label for="exampleInputEmail1" class="form-label">Phone:</label>
  <input type="text" class="form-control" id="exampleInputEmail1" 
    name="phone"
    value={formData.phone}
    onChange={handleInputChange}
    required
  />
  </div>
  <div class="col-md-4">
  <label for="exampleInputEmail1" class="form-label">State:</label>
  <select className="form-control" id="state" name="state" value={formData.state} onChange={handleInputChange} required>
          <option value="">Select a state</option>
          {states.map(state => (
            <option key={state.id} value={state.name}>{state.name}</option>
          ))}
    </select>
  </div>
  <div class="col-md-4">
  <label for="exampleInputEmail1" class="form-label">City:</label>
  <select className="form-control" id="city" name="city" value={formData.city} onChange={handleInputChange} required>
          <option value="">Select a City</option>
          {cities.map(city => (
            <option key={city.id} value={city.name}>{city.name}</option>
          ))}
    </select>
  </div>
  <div class="col-md-4">
  <label for="exampleInputEmail1" class="form-label">Pincode:</label>
  <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    name="pincode"
    value={formData.pincode}
    onChange={handleInputChange}
    required
  />
  </div>
  <div class="col-md-4">
  <label for="exampleInputEmail1" class="form-label">Nominee:</label>
  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    name="nominee"
    value={formData.nominee}
    onChange={handleInputChange}
    required
  />
  </div>
  <div class="col-md-4">
  <label for="exampleInputEmail1" class="form-label">Nominee Relation:</label>
  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
    name="nomineeRelation"
    value={formData.nomineeRelation}
    onChange={handleInputChange}
    required
  />
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
    </div>
        </>
      )

}

export default UserRegistration