import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Coverletter from "./pages/coverLetter/Coverletter";
import Templates from "./pages/templates/Templates";
import Footer from "./components/Layout/footer/Footer";
import Header from "./components/Layout/header/Header";
import Dashboard from "./pages/dashboard/Dashboard";
import ResumeTemplates01 from "./components/resume-templates/resume-templates01/ResumeTemplates01";
import "./App.css";

function App() {
  const [isSelectionMade, setIsSelectionMade] = useState(false);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={!isSelectionMade ? <Home setSelectionMade={setIsSelectionMade} /> : <Dashboard />} />
        <Route path="/coverletter" element={!isSelectionMade ? <Coverletter setSelectionMade={setIsSelectionMade} /> : <Dashboard />} />
        <Route path="/templates" element={!isSelectionMade ? <Templates setSelectionMade={setIsSelectionMade} /> : <Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      <Coverletter />
      <ResumeTemplates01/>
      <Footer />
    </Router>
  );
}

export default App;
