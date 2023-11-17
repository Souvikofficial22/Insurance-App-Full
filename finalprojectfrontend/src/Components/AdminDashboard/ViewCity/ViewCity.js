import React, { useEffect, useState } from 'react'
import Footer from '../../Layouts/Footer/Footer'
import Navbar from '../../Layouts/Navbar/Navbar'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import Paginate from '../../Layouts/Pagination/Paginate'

const ViewCity = () => {
    const [cities,setCities] = useState([])
    const [limit, setLimit] = useState(10);
    const [offset, setOffset] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const navigate = new useNavigate()
    const user = {
        username: useParams().username,
        role: useParams().role,
      }
      const getAllCities = async()=>{
        let size=limit
        let page=offset-1
        const token = localStorage.getItem('token')
        let resp = await axios.get(`http://localhost:8081/city/get-all?page=${page}&size=${size}`,
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
        setTotalCount(resp.data.totalPages)
            setCities(resp.data.content)
        // // console.log(banks.fullName)
      }

      const handleUpdate = async (cityid)=>{
        const token = localStorage.getItem('token')
        console.log(cityid);
        let resp = await axios.put(`http://localhost:8081/city/update/${cityid}`,null,
        {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            }
          })
        .catch(err=>{
          alert("Invalid request")
          return
        })
        
        getAllCities();
      }

    //   const handleUpdate =async(policyid)=>{
        
    //     navigate(`/update/policy/${user.username}/${user.role}/${policyid}`)
        

    //   }

    //   const tableRows = states.map((state,index)=>{
    //     return(
    //         <tr>
    //             <td>{state.name}</td>
    //             <td>{state.status === "ACTIVE" ? 'Active' : 'Inactive'}</td>
    //             <td><button type="submit" class="btn btn-primary" onClick={handleUpdate(state.id)}>Update</button></td>
    //         </tr>
            
    //             // console.log(bank.accounts.length())
            
    //     )
    //     })

      useEffect(()=>{
        getAllCities()
    },[limit, offset])
  return (
    <>
    <div className="mycontainer">
    <header><Navbar user={user} /></header>
    <main>
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
        <h1>All Cities</h1>
    </div>
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
    <table class="table table-dark table-striped-columns table-hover rounded">
                <thead>
                    <tr>
                        <th> Name</th>
                        <th> Status </th>
                        <th> Update </th>
                    </tr>
                </thead>
                <tbody>
                {cities.map((city, index) => (
                <tr key={index}>
                  <td>{city.name}</td>
                  <td>{city.status === 'ACTIVE' ? 'Active' : 'Inactive'}</td>
                  <td>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={() => handleUpdate(city.id)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
                </tbody>
            </table>
        </div>
        <div className="card-footer white-background">
            {totalCount > 0 &&
              <Paginate totalCount={totalCount} limit={limit} offset={offset} setLimit={setLimit} setOffset={setOffset} />
            }
          </div>
          </main>
          <footer><Footer /></footer>
          </div>
          </>
  )
}

export default ViewCity