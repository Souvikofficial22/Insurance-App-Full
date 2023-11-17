import React from 'react';
import './AdminCard.css'
const AdminCard = ({ name, email, phone, image }) => {
  return (
    <div className="admin-card">
      <img src={image} alt={name} className="admin-card__image" />
      <div className="admin-card__details">
        <h3 className="admin-card__name">{name}</h3>
        <p className="admin-card__email">{email}</p>
        <p className="admin-card__phone">{phone}</p>
      </div>
    </div>
  );
};

export default AdminCard;
