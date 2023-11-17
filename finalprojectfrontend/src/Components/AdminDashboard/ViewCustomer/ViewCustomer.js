import React from 'react'
import Footer from '../../Layouts/Footer/Footer'
import Navbar from '../../Layouts/Navbar/Navbar'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

const ViewCustomer = () => {
    const [customers,setCustomers] = useState([])

    // const [limit, setLimit] = useState(1);
    // const [offset, setOffset] = useState(1);
    // const [totalCount, setTotalCount] = useState(0);
    const navigate = new useNavigate()
    const user = {
        username: useParams().username,
        role: useParams().role,
      }
      const getAllCustomers = async()=>{
        // let size=limit
        // let page=offset-1
        const token = localStorage.getItem('token')
        let resp = await axios.get(`http://localhost:8081/customerapp/customers`,
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
            setCustomers(resp.data)
        // // console.log(banks.fullName)
      }

      const handleDelete = async (customerid)=>{
        const token = localStorage.getItem('token')
        let resp = await axios.delete(`http://localhost:8081/customer/delete/${customerid}`,
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
        
        getAllCustomers();
      }

      const handleUpdate =async(customerid)=>{
        
        navigate(`/update/customer/${user.username}/${user.role}/${customerid}`)
        

      }

      const tableRows = customers.map((customer,index)=>{
        return(
            <tr>
                <td>{customer.user.name}</td>
                <td>{customer.agent ? customer.agent.user.name : ""}</td>
                <td>{customer.phone}</td>
                <td>{customer.user.email}</td>
                <td>{customer.user.address}</td>
                <td>{customer.nominee}</td>
                <td>{customer.nomineeRelation}</td>
                <td>{customer.user.status === 'ACTIVE' ? 'Active' : 'Inactive'}</td>
                {/* <td><button type="submit" class="btn btn-danger" onClick={()=>handleDelete(customer.user.userId)}>Delete</button></td> */}
            </tr>
            
                // console.log(bank.accounts.length())
            
        )
        })

      useEffect(()=>{
        getAllCustomers()
    },/*[limit, offset]*/ [])
  return (
    <>
    <div className="mycontainer">
    <header><Navbar user={user} /></header>
    <main>
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
        <h1>All Customer Details</h1>
    </div>
    <div className='wrapper d-flex align-items-center justify-content-center w-100'>
    <table class="table table-dark table-striped-columns table-hover rounded">
                <thead>
                    <tr>
                    <th> Customer Name </th>
                        <th> Agent Name </th>
                        <th> Phone </th>
                        <th> Email </th>
                        <th> Address </th>
                        <th> Nominee </th>
                        <th> Relation </th>
                        <th> Status </th>
                        {/* <th> Delete </th> */}
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

export default ViewCustomer