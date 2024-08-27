// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TemplatesPage from './pages/templatespage/TemplatesPage';
import Dashboard from './pages/dashboard/Dashboard';
import Header from './components/Layout/header/Header';
import Footer from './components/Layout/footer/Footer';
import Home from './pages/home/Home.js';
import CoverLetter from './pages/coverLetter/Coverletter';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><Home /> <CoverLetter /> <TemplatesPage /></>} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
