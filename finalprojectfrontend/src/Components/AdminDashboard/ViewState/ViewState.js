import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from '../../Layouts/Navbar/Navbar'
import Footer from '../../Layouts/Footer/Footer'

const ViewState = () => {
    const [states,setStates] = useState([])
    // const [limit, setLimit] = useState(1);
    // const [offset, setOffset] = useState(1);
    // const [totalCount, setTotalCount] = useState(0);
    const navigate = new useNavigate()
    const user = {
        username: useParams().username,
        role: useParams().role,
      }
      const getAllStates = async()=>{
        // let size=limit
        // let page=offset-1
        const token = localStorage.getItem('token')
        let resp = await axios.get(`http://localhost:8081/state/get-all`,
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
            setStates(resp.data)
        // // console.log(banks.fullName)
      }

      useEffect(()=>{
        getAllStates()
    },/*[limit, offset]*/ [])
      console.log(states);

      const handleUpdate = async (stateid)=>{
        const token = localStorage.getItem('token')
        console.log(stateid);
        let resp = await axios.put(`http://localhost:8081/state/update/${stateid}`,null,
        {
            headers: {
              'Content-Type': 'application/json',
              'withCredentials': true,
              'Authorization': `Bearer ${token}`,
            }
          })
        .catch(err=>{
          alert("Invalid request")
          return
        })
        
        getAllStates();
      }


      
  return (
    <>
    <div className="mycontainer">
    <header><Navbar user={user} /></header>
    <main>
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
        <h1>All States</h1>
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
                {states.map((state, index) => (
                <tr key={index}>
                  <td>{state.name}</td>
                  <td>{state.status === 'ACTIVE' ? 'Active' : 'Inactive'}</td>
                  <td>
                    <button
                      type="submit"
                      className="btn btn-primary"
                      onClick={()=>handleUpdate(state.id)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              ))}
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

export default ViewState