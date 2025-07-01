import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Footer from './component/Footer';
import Category from './pages/Category';
import Productdetail from './pages/Product-detail';

const App = () => {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        <Route path="/Productdetail" element={<Productdetail />} />
        {/* Add more routes here as needed */}
      </Routes>

      <Footer />
    </>
  );
};

export default App;
