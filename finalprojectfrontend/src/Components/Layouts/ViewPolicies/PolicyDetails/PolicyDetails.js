import React, { useEffect, useState } from 'react'
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

const PolicyDetails = () => {
    const policyId = useParams().policyid
    const [policy, setPolicy] = useState([]);
    const [loading, setLoading] = useState(true);
    // const [planName,setPlanName] = useState()
    const [user, setUser] = useState({ username: "", role: "" });
    const { username, role } = useParams();
    const navigate = useNavigate()
    const [customer,setCustomer] = useState();

    const [years, setYears] = useState('');
  const [totalInvestment, setTotalInvestment] = useState('');
  const [installmentMonths, setInstallmentMonths] = useState(3);
  const [installmentAmount, setInstallmentAmount] = useState('');
  const [profit, setProfit] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [creationDate,setCreationDate] = useState('')
    const [maturityDate,setMaturityDate] = useState('')

    const getCustomer = async ()=>{
        console.log(user.username);
        const token =localStorage.getItem('token')
        let resp = await axios.get(`http://localhost:8081/customerapp/getusername/${user.username}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
              }
        }).catch(err=>{
            alert("cannot fetch customer data")
        })

        if(resp && resp.status==200){
            setCustomer(resp.data)
        }
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            const token =localStorage.getItem('token')
            const decode = jwtDecode(token)
            const role = decode.roles
            const username = decode.sub
          setUser({ username, role });
        }
        
      }, []);

  useEffect(() => {
    if(user.role=="customer"){
        getCustomer()
    }
  }, [user.role]);

    const getAllPolicy=async()=>{
       const resp = await axios.get(`http://localhost:8081/policy/get-id/${policyId}`) 
      .then(response => {
        console.log(response);
        setPolicy(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
      
    }

  useEffect(() => {
    getAllPolicy()
  }, [policyId]);

  if (loading) {
    return <h1 className="d-flex align-items-center justify-content-center">Loading...</h1>;
  }
  const handleYearsChange = (e) => {
    setYears(e.target.value);
  };

  const handleTotalInvestmentChange = (e) => {
    setTotalInvestment(e.target.value);
  };

  const handleInstallmentMonthsChange = (e) => {
    setInstallmentMonths(e.target.value);
  };

  
  const calculate = () => {
    const months = parseInt(years) * 12;
    const totalInstallments = months/installmentMonths;
    const installmentValue = parseFloat(totalInvestment) / totalInstallments;
    const profitValue = parseFloat(totalInvestment) * (policy.details.profit / 100);
    const totalValue = parseFloat(totalInvestment) + profitValue;

    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();
    const formattedCreationDate = `${day < 10 ? `0${day}` : day}-${month < 10 ? `0${month}` : month}-${year}`
    setCreationDate(formattedCreationDate);


    const maturityDate = new Date(currentDate.getFullYear() + parseInt(years), currentDate.getMonth(), currentDate.getDate());
    const myear = maturityDate.getFullYear();
    const mmonth = maturityDate.getMonth() + 1;
    const mday = maturityDate.getDate();
    const formattedMaturityDate = `${mday < 10 ? `0${mday}` : mday}-${mmonth < 10 ? `0${mmonth}` : mmonth}-${myear}`
    setMaturityDate(formattedMaturityDate);

    // const options = {day: 'numeric', month: 'numeric', year: 'numeric',  timeZone: 'UTC'};
    // const formattedCreationDate = currentDate.toLocaleDateString('en-GB').replace(/\//g, '-');
    // const formattedMaturityDate = maturityDate.toLocaleDateString('en-GB').replace(/\//g, '-');

  
  


    setInstallmentAmount(installmentValue.toFixed(2));
    setProfit(profitValue.toFixed(2));
    setTotalAmount(totalValue.toFixed(2));
  };

  const handleSubmit = async ()=>{

    const token = localStorage.getItem('token')
    const resp = await axios.post(`http://localhost:8081/insuranceapp/save`,{
        "insuranceType":policy.plan.insuranceType,
        "insuranceScheme": policy.policyName,
        "dateCreated":creationDate,
        "maturityDate": maturityDate,
        "premiumType":installmentMonths,
        "totalPremiumAmount":totalInvestment,
        "profitRatio":policy.details.profit,
        "sumAssured":totalAmount,
        "customer":{
            "customerId":customer.customerId
        }
    },{
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
          }
    }) 
    .then(response => {
        console.log(response);
        // navigate(`/${user.username}/${user.role}`)
        navigate(`/payment/${user.username}/${user.role}`, {
            state: {
              accountNumber: response.data.accountNumber,
              installmentAmount: installmentAmount,
              customerName: customer.user.name
            }
        }
        )
    })
    .catch(error => {
      console.error(error);
    });
    
  }
  
  return (
    <>
    <div>
        <Navbar user={user} />
        <main>
        <div class="container">
            {/* <div class="row">
                <div class="col-md-6"> */}
                    <div>
                    <div className='d-flex align-items-center justify-content-center'>
                        <h2>{policy.policyName}</h2>
                        </div>
                    <div className='d-flex align-items-center justify-content-center'>
                        <p>{policy.description}</p>
                    </div>
                    {/* </div>
                </div> */}
            </div>
            <div class="row g-3 ms-3 me-3 mt-3 mb-3">
                <div class="col-12">
                    <h1 className='d-flex align-items-center justify-content-center'>Premium Details</h1>
                </div>
                <div class="col-md-6">
                    <h5 className="mt-2">Minimum Age:</h5>
                </div>
                <div class="col-md-6">
                <label for="exampleFormControlTextarea1" class="form-label" >{policy.details.miniAge}</label>
                </div>
                <div class="col-md-6">
                    <h5 className="mt-2">Maximum Age:</h5>
                </div>
                <div class="col-md-6">
                <label for="exampleFormControlTextarea1" class="form-label" >{policy.details.maxiAge}</label>
                </div>
                <div class="col-md-6">
                    <h5 className="mt-2">Maximum Amount:</h5>
                </div>
                <div class="col-md-6">
                <label for="exampleFormControlTextarea1" class="form-label" >{policy.details.maxiAmount}</label>
                </div>
                <div class="col-md-6">
                    <h5 className="mt-2">Minimum Age:</h5>
                </div>
                <div class="col-md-6">
                <label for="exampleFormControlTextarea1" class="form-label" >{policy.details.miniAmount}</label>
                </div>
                <div class="col-md-6">
                    <h5 className="mt-2">Maximum Policy-Term:</h5>
                </div>
                <div class="col-md-6">
                <label for="exampleFormControlTextarea1" class="form-label" >{policy.details.maxiInvestmentTime}</label>
                </div>
                <div class="col-md-6">
                    <h5 className="mt-2">Minimum Policy-Term:</h5>
                </div>
                <div class="col-md-6">
                <label for="exampleFormControlTextarea1" class="form-label" >{policy.details.miniInvestmentTime}</label>
                </div>
                <div class="col-md-6">
                    <h5 className="mt-2">Profit Ratio:</h5>
                </div>
                <div class="col-md-6">
                <label for="exampleFormControlTextarea1" class="form-label" >{policy.details.profit}</label>
                </div>
            </div>
            <div className="container mt-4">

        <div className='d-flex align-items-center justify-content-center w-100 mb-4'>
            <h1>Interest Calculator</h1>
        </div>
<div className="row">
        <div className="col-md-6">
            <div className="mb-3">
            <label htmlFor="years" className="form-label">Number of years</label>
            </div>
        </div>
        <div className="col-md-6">
            <div className="mb-3">
            <input type="number" className="form-control" id="years" value={years} onChange={handleYearsChange} />
            </div>
        </div>
        <div className="col-md-6">
            <div className="mb-3">
            <label htmlFor="totalInvestment" className="form-label">Total investment amount</label>
            </div>
        </div>
        <div className="col-md-6">
            <div className="mb-3">
            <input type="number" className="form-control" id="totalInvestment" value={totalInvestment} onChange={handleTotalInvestmentChange} />
            </div>
        </div>
        <div className="col-md-6">
            <div className="mb-3">
                <label htmlFor="installmentMonths" className="form-label">Installment in months</label>
            </div>
        </div>
        <div className="col-md-6">
            <div className="mb-3">
                <select className="form-select" id="installmentMonths" value={installmentMonths} onChange={handleInstallmentMonthsChange}>
                <option value={3}>3 months</option>
                <option value={6}>6 months</option>
                <option value={12}>12 months</option>
                </select>
            </div>
        </div>
        </div>
        <div className='d-flex align-items-center justify-content-center'>
            <button className="btn btn-primary mt-2 mb-4" onClick={calculate}>Calculate</button>
        </div>



            
        <div className="row">
        <div className="col-md-6">
            <div className="mb-3">
                <label htmlFor="installmentAmount" className="form-label">Installment amount</label>
            </div>
        </div>
        <div className="col-md-6">
            <div className="mb-3">
                <input type="text" className="form-control" id="installmentAmount" value={installmentAmount} disabled />
            </div>
        </div>
        <div className="col-md-6">
            <div className="mb-3">
                <label htmlFor="profit" className="form-label">Profit</label>
            </div>
        </div>
        <div className="col-md-6">
            <div className="mb-3">
                <input type="text" className="form-control" id="profit" value={profit} disabled />
            </div>
        </div>
        <div className="col-md-6">
            <div className="mb-3">
                <label htmlFor="totalAmount" className="form-label">Total amount</label>
            </div>
        </div>
        <div className="col-md-6">
            <div className="mb-3">
                <input type="text" className="form-control" id="profit" value={totalAmount} disabled />
            </div>
        </div>
        </div>
        </div>
        </div>
        
        {user.role=='customer' ?
        <div className='d-flex align-items-center justify-content-center'>
            <button className="btn btn-danger mt-2 mb-4" onClick={handleSubmit}>Buy Policy</button>
        </div> : <></>
        }
        </main>
        </div>
        
    <footer><Footer /></footer>
    </>
  )
}

export default PolicyDetails