// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TemplatesPage from './pages/templatespage/TemplatesPage';
import Dashboard from './pages/dashboard/Dashboard';
import Header from './components/Layout/header/Header';
import Footer from './components/Layout/footer/Footer';
import Home from './pages/home/home.js';
import CoverLetter from './pages/coverLetter/Coverletter';
import RegisterPage from './components/registerpage/RegisterPage.js';
import LoginPage from './components/loginPage/LoginPage.js';
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<><Home /> <CoverLetter /> <TemplatesPage /></>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/registerpage" element={<RegisterPage />} />
        <Route path="/loginPage" element={<LoginPage  />} />
       </Routes>
      <Footer />
    </Router>
  );
};

export default App;
