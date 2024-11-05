import React from 'react';
import './Description.css';
import { FaCoffee, FaLeaf, FaStar } from 'react-icons/fa';

const Description = ({ description }) => {
  const features = [
    {
      icon: <FaCoffee />,
      title: "Kopi Pilihan",
      text: "Biji kopi premium dari berbagai daerah di Indonesia"
    },
    {
      icon: <FaLeaf />,
      title: "Proses Alami",
      text: "Dipetik dan diolah dengan metode tradisional"
    },
    {
      icon: <FaStar />,
      title: "Kualitas Terbaik",
      text: "Standar kualitas tinggi dalam setiap sajian"
    }
  ];

  return (
    <section className="description">
      <div className="description-main">
        <h2>Tentang Kami</h2>
        <p className="main-text">{description}</p>
      </div>
      <div className="features">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Description;