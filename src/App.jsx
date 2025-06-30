import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './pages/Home';
import Footer from './component/Footer';
import Category from './pages/Category';

const App = () => {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category" element={<Category />} />
        {/* Add more routes here as needed */}
      </Routes>

      <Footer />
    </>
  );
};

export default App;
