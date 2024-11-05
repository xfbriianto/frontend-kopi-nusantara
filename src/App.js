import React from 'react';
import Header from './components/Header/Header';
import Description from './components/Description/Description';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Map from './components/Map/Map';
import Footer from './components/Footer/Footer';
import './App.css';


function App() {
  const websiteInfo = {
    title: "Warung Kopi Nusantara",
    tagline: "Nikmati Cita Rasa Kopi Indonesia",
    description: "Warung Kopi Nusantara adalah tempat yang sempurna untuk menikmati berbagai jenis kopi dari seluruh penjuru Nusantara. Kami menyajikan kopi berkualitas tinggi yang dipetik dan diolah dengan penuh dedikasi oleh para petani kopi lokal.",
    images: [
      "https://images.unsplash.com/photo-1511920170033-f8396924c348",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085",
      "https://images.unsplash.com/photo-1442512595331-e89e73853f31",
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd"
    ],
    contact: {
      phone: "+62 123 4567 890",
      email: "info@warungkopinusantara.com",
      address: "Jl. Kopi No. 123, Banyuwangi, Indonesia"
    }
  };

  return (
    <div className="App">
      <Header title={websiteInfo.title} tagline={websiteInfo.tagline} />
      <Description description={websiteInfo.description} />
      <Gallery images={websiteInfo.images} />
      <Contact contact={websiteInfo.contact} />
      <Map address={websiteInfo.contact.address} />
      <Footer />
    </div>
  );
}

export default App;
