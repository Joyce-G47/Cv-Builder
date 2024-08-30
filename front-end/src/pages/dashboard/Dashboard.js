// src/pages/Dashboard.js
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Preview from '../../components/preview/Preview';
import Analysis from '../../components/analysis/Analysis';
import Matching from '../../components/matching/Matching';
import './Dashboard.css';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('Preview');
  const location = useLocation();
  const selectedTemplate = location.state?.selectedTemplate || 1; 

  return (
    <div className="dashboard">
      <nav className="dashboard-nav">
        <ul>
          <li onClick={() => setActiveSection('Preview')}>Preview</li>
          <li onClick={() => setActiveSection('Analysis')}>Analysis</li>
          <li onClick={() => setActiveSection('Matching')}>Matching</li>
        </ul>
      </nav>

      <div className="dashboard-content">
        {activeSection === 'Preview' && <Preview selectedTemplate={selectedTemplate} />}
        {activeSection === 'Analysis' && <Analysis />}
        {activeSection === 'Matching' && <Matching />}
      </div>
    </div>
  );
};

export default Dashboard;
