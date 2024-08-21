import React, { useState } from 'react';
import Preview from '../../components/preview/Preview';
import Analysis from '../../components/analysis/Analysis';
import Matching from '../../components/matching/Matching';
import './Dashboard.css';

const Dashboard = () => {
  const [activeSection, setActiveSection] = useState('Preview');

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
        {activeSection === 'Preview' && <Preview />}
        {activeSection === 'Analysis' && <Analysis />}
        {activeSection === 'Matching' && <Matching />}
      </div>
    </div>
  );
};

export default Dashboard;
