import React, { useState } from 'react';
import './ContactUs.css';
import AdminCard from '../ContactCard/AdminCard';
import Footer from '../Footer/Footer';

const ContactUs = () => {

  return (
    <>
      <div class="contact-header">
        <h1>Contact Us</h1>
      </div>

    <div className="admin-contact">
    <AdminCard
      name="Rohit Vishal"
      email="rohitvishal57@gmail.com"
      phone="7870355750"
      image="https://banner2.cleanpng.com/20180201/yge/kisspng-u0627u0631u0648u0646u062f-u062au062cu0627u0631u062-technical-after-services-5a72f0e9047934.7404569315174822170183.jpg"
    />
    <AdminCard
      name="Souvik Mitra"
      email="souvikofficial07@gmail.com"
      phone="8486761515"
      image="https://w7.pngwing.com/pngs/791/674/png-transparent-phone-call-call-now-telephone-phone-number-contact-contact-us-contact-details-talk-support-thumbnail.png"
    />
  </div>
  <footer><Footer /></footer>
  </>
      
  );
};

export default ContactUs;
