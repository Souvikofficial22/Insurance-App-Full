import React, { useEffect, useState } from 'react';
import './EmailForm.css';
import axios from 'axios';
import Navbar from '../../Layouts/Navbar/Navbar';
import { useParams } from 'react-router-dom';
import Footer from '../../Layouts/Footer/Footer';

const MarketingEmail = () => {
  
    const userDetails = {
        username: useParams().username,
        role: useParams().role
    }

    const [currAgentId,setCurrAgentId] = useState('')

    const getCurrAgent = async () => {
      const token = localStorage.getItem('token')
      let agent = await axios.get(`http://localhost:8081/agentapp/getusername/${userDetails.username}`,{
          headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`,
            }
      }).catch(err => {
            alert("agent not found")
            return
        })
        console.log(agent.data);
        setCurrAgentId(agent.data.agentId)
    }
    useEffect(()=>{
        getCurrAgent();
    },[])
    

  const [emailMessage, setEmailMessage] = useState({
    email: '',
    subject: ''
  });
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  

  const handleChange = (event) => {
    setEmailMessage({
      ...emailMessage,
      [event.target.name]: event.target.value
    });
  };

  const refLink = `http://localhost:3000/user/registration/${currAgentId}`

  const emailContent =
   `Please click on the following link to register yourself:${refLink}`
  
   const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSending(true);
    // Send email using emailMessage data
    const resp = await axios.post(`http://localhost:8081/email/sendmail`,{
        "to":emailMessage.email,
        "subject":emailMessage.subject,
        "textMessage":emailContent   
    }).catch(err => {
        if (err.response.status == 400) {
            alert(err.response.data)
            setIsSending(false);
            return
        }
    })
  

    if(resp.status == 200){
        alert("mail sent successfully")
        setIsEmailSent(true);
        setIsSending(false);
    }
    // Set isEmailSent to true if email is sent successfully
    
    // setIsEmailSent(true);
  };

  return (
    <>
    <div className='mycontainer'>
    <header><Navbar user={userDetails} /></header>
    <main>
    <div className="email-form-container">
      <h2>Marketing</h2>
      {!isEmailSent ? (
        <form onSubmit={handleSubmit}>
          {/* <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={emailMessage.name}
              onChange={handleChange}
              required
            />
          </div> */}
          <div className="form-group">
            <label htmlFor="email">Customer Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={emailMessage.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              name="subject"
              value={emailMessage.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Referal Link</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="3"
              value={emailContent}
              readOnly
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary" disabled={isSending}>
                {isSending ? 'Sending...' : 'Send Email'}
          </button>
        </form>
      ) : (
        <div className="success-message">
          <p>Your email has been sent successfully.</p>
        </div>
      )}
    </div>
    </main>
    <footer><Footer /></footer>
    </div>
    </>
  );
};

export default MarketingEmail;
