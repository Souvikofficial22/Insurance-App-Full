import React, { useEffect, useState } from 'react';
import Select from 'react-select';

import './PaymentForm.css'
import Navbar from '../../Layouts/Navbar/Navbar';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../Layouts/Footer/Footer';

function PaymentForm() {

  const options = [
    { value: 'credit_card', label: 'Credit Card' },
    { value: 'debit_card', label: 'Debit Card' },
    { value: 'visa', label: 'Visa' },
    { value: 'master_card', label: 'Master Card' },
  ];


  const location = useLocation();
  const { accountNumber, installmentAmount, customerName } = location.state;


  // const [installmentAmount, setInstallmentAmount] = useState('');
  const [taxAmount, setTaxAmount] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const userDetails = {
    username: useParams().username,
    role: useParams().role
  }

  const [selectedOption, setSelectedOption] = useState(null);
  const [currentDate, setCurrentDate] = useState('');

  const navigate = useNavigate()

  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const formattedDate = `${day < 10 ? `0${day}` : day}-${month < 10 ? `0${month}` : month}-${year}`; // format the date as dd-mm-yyyy
    setCurrentDate(formattedDate);
  }, []);


  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(selectedOption);

    const token = localStorage.getItem("token")
    let resp = await axios.post(`http://localhost:8081/policypayment/save`, {

      "insuranceAccNo": accountNumber,
      "customerName": customerName,
      "paidDate": currentDate,
      "paidAmount": installmentAmount,
      "transferType":selectedOption.value,
      "status": "paid"

    },{
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    }).catch(err => {
      alert("Payment request failed!! Try Again")
    })
    // console.log(installmentAmount);
    // console.log(currentDate);
    // console.log(selectedOption);
    console.log(resp);
    console.log(resp.data);

    if (resp.status == 201 || resp.status == 200){
      const token = localStorage.getItem("token")
      let respo = await axios.put(`http://localhost:8081/insuranceapp/id/${resp.data.paymentId}/acc/${resp.data.insuranceAccNo}`,null,{
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      }).catch(err=>{
        alert("Payment failed")
      })
      if(respo.status == 200){
        alert("payment done ")
        navigate(`/customerdashboard/${userDetails.username}/${userDetails.role}`)
      }
    }
    // console.log(installmentAmount,customerName,accountNumber);

  };

  return (
    <>
    <div className='mycontainer'>
      <header><Navbar user={userDetails} /></header>
      <main>
        <div className="payment-form-container">
        <h2>Policy Payment</h2>
        <form onSubmit={handleSubmit} className='paymentform'>

          <label htmlFor="date">Date</label>
          <input className='myinput' type="text" id="date" value={currentDate} readOnly />

          <label htmlFor="installmentAmount">Installment Amount</label>
          <input className='myinput' type="text" id="installmentAmount" value={installmentAmount} readOnly/>

          {/* <label htmlFor="taxAmount">Installment Amount</label>
          <input className='myinput' type="text" id="taxAmount" value={installmentAmount} onChange={(event) => setInstallmentAmount(event.target.value)} /> */}
          {/*
          <label htmlFor="totalAmount">Total Amount</label>
          <input className='myinput' type="text" id="totalAmount" value={cardNumber} onChange={(event) => setTotalAmount(event.target.value)} /> */}

          <div>
            <label htmlFor="payment-type">Payment Type</label>
            <Select
              id="payment-type"
              options={options}
              value={selectedOption}
              onChange={handleSelectChange}
              placeholder="Select payment type"
            />
          </div>

          <label htmlFor="card-holder">Name On Card</label>
          <input className='myinput' type="text" id="card-holder" placeholder="Enter card holder name" value={name} onChange={(event) => setName(event.target.value)} />

          <label htmlFor="card-number">Card Number</label>
          <input className='myinput' type="text" id="card-number" placeholder="Enter card number" value={cardNumber} onChange={(event) => setCardNumber(event.target.value)} />

          <label htmlFor="expiry-date">Expiry Date</label>
          <input className='myinput' type="text" id="expiry-date" placeholder="MM/YY" value={expiryDate} onChange={(event) => setExpiryDate(event.target.value)} />

          <label htmlFor="cvv">CVV</label>
          <input className='myinput' type="text" id="cvv" placeholder="Enter CVV" value={cvv} onChange={(event) => setCvv(event.target.value)} />

          <button className='mybutton' type="submit">Submit Payment</button>
        </form>
      </div>
      </main>
      <footer><Footer /></footer>
      </div>
    </>
  );
}

export default PaymentForm;
