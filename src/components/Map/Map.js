import React from 'react';
import './Map.css';

const Map = ({ address }) => {
  return (
    <div className="map-container">
      <div className="map-placeholder">
        <h3>Lokasi Kami</h3>
        <p>{address}</p>
        <p>Klik di sini untuk membuka di Google Maps</p>
      </div>
    </div>
  );
};

export default Map;