import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './ViewInsurance.css'
import Navbar from '../../Layouts/Navbar/Navbar'
import Footer from '../../Layouts/Footer/Footer'

const ViewInsurance = () => {
    const [insurances,setInsurances] = useState([])
    // const [limit, setLimit] = useState(1);
    // const [offset, setOffset] = useState(1);
    // const [totalCount, setTotalCount] = useState(0);
    const navigate = new useNavigate()
    const user = {
        username: useParams().username,
        role: useParams().role,
      }
      const getAllPlans = async()=>{
        // let size=limit
        // let page=offset-1
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
        // // setTotalCount(resp.data.length)
            setInsurances(resp.data)
        // // console.log(banks.fullName)
      }

      // const handleDelete = async (insuranceid)=>{
      //   const token = localStorage.getItem('token')
      //   let resp = await axios.delete(`http://localhost:8081/insuranceplan/delete/${insuranceid}`,
      //   {
      //       headers: {
      //         'Content-Type': 'application/json',
      //         'Authorization': `Bearer ${token}`,
      //       }
      //     })
      //   .catch(err=>{
      //     alert("Invalid request")
      //     return
      //   })
        
      //   getAllPlans();
      // }

      const handleUpdate =async(insuranceid)=>{
        
        navigate(`/updateinsuranceplan/${user.username}/${user.role}/${insuranceid}`)
        

      }

      const tableRows = insurances.map((insurance,index)=>{
        return(
            <tr>
                <td>{insurance.insuranceType}</td>
                <td>{insurance.status === "ACTIVE" ? 'Active' : 'Inactive'}</td>
                <td><button type="submit" class="btn btn-primary" onClick={()=>handleUpdate(insurance.insuranceId)}>Update</button></td>
            </tr>
            
                // console.log(bank.accounts.length())
            
        )
        })

      useEffect(()=>{
        getAllPlans()
    },/*[limit, offset]*/ [])
  return (
    <>
    <div className="mycontainer">
    <header><Navbar user={user} /></header>
    <main>
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
        <h1>ALL Insurance Plans</h1>
    </div>
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
    <table class="table table-dark table-striped-columns table-hover rounded">
                <thead>
                    <tr>
                        <th> Insurance Plans</th>
                        <th> Status </th>
                        <th> Update </th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows}
                </tbody>
            </table>
        </div>
        {/* <div className="card-footer white-background">
            {totalCount > 0 &&
              <Paginate totalCount={totalCount} limit={limit} offset={offset} setLimit={setLimit} setOffset={setOffset} />
            }
          </div> */}
          </main>
          <footer><Footer /></footer>
          </div>
          </>
  )

}

export default ViewInsurance