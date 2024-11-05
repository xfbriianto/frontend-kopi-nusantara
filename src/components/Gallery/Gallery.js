import React from 'react';
import './Gallery.css';

const Gallery = ({ images }) => {
  return (
    <section className="gallery">
      <h2>Galeri Kami</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;