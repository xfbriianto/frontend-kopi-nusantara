import React from 'react';
import './Header.css';

const Header = ({ title, tagline }) => {
  return (
    <header className="header">
      <div className="hero">
        <h1>{title}</h1>
        <p className="tagline">{tagline}</p>
        <button className="cta-button">Pesan Sekarang</button>
      </div>
    </header>
  );
};

export default Header;