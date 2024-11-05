import React from 'react';
import './Contact.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const Contact = ({ contact }) => {
  const openingHours = [
    "Senin - Jumat: 08:00 - 22:00",
    "Sabtu - Minggu: 10:00 - 23:00"
  ];

  return (
    <section className="contact">
      <div className="contact-header">
        <h2>Hubungi Kami</h2>
        <p>Kami siap melayani Anda</p>
      </div>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-card">
            <FaPhone className="contact-icon" />
            <h3>Telepon</h3>
            <p>{contact.phone}</p>
          </div>

          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <h3>Email</h3>
            <p>{contact.email}</p>
          </div>

          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <h3>Alamat</h3>
            <p>{contact.address}</p>
          </div>

          <div className="contact-card">
            <FaClock className="contact-icon" />
            <h3>Jam Buka</h3>
            {openingHours.map((hours, index) => (
              <p key={index}>{hours}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;