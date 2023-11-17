import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const ViewPolicies = () => {
    const planId = useParams().planid
    const [policies, setPolicies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [planName,setPlanName] = useState()
    const [user, setUser] = useState({ username: "", role: "" });
    const { username, role } = useParams();

  useEffect(() => {
    if (username && role) {
      setUser({ username, role });
    }
  }, [role]);

    const getAllPolicies =async()=>{
        const resp = await axios.get(`http://localhost:8081/insuranceplan/get-id/${planId}`)
      .then(response => {
        console.log(response);
        setPlanName(response.data.insuranceType)
        setPolicies(response.data.policies);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
      
    }

  useEffect(() => {
    getAllPolicies()
  }, [planId]);

  if (loading) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
    <div className='mycontainer'>
        <header><Navbar user={user} /></header>
        <main>
        <div class="d-flex align-items-center justify-content-center w-70">
        <div class="row mt-4">
        {policies.map(policy => (
            <div key={policy.policyId}>
                  <div class="col-sm-4">
                    <div class="card mb-3 ms-4" style={{ opacity: 0.9, backgroundColor: 'rgb(0, 0, 0)' ,color: 'white'}}>
                      <div class="card-body">
                        <h5 class="card-title">{policy.policyName}</h5>
                        <p class="card-text">{policy.description}</p>
                        <a href={`/viewpolicy/details/${policy.policyId}`} class="btn btn-primary">View</a>
                      </div>
                    </div>
                  </div>
                  </div>
                        ))}
                </div>
                {/* <div class="d-flex align-items-center justify-content-center w-70">
                        {policies.map(policy => (
                        <div key={policy.policyId}>
                            <h2><a href={`/viewpolicy/details/${policy.policyId}`} className='special-link'>{policy.policyName}</a></h2>
                            <p>{policy.description}</p>
                        </div>
                        ))}
                    </div> */}
                </div>
        
        </main>
        <footer><Footer /></footer>
    </div>
    </>
  )
}

export default ViewPolicies