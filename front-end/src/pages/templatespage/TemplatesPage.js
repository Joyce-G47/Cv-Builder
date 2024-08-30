// src/pages/TemplatesPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import TemplateOne from '../../components/templateone/TemplateOne';
import TemplateTwo from '../../components/templatetwo/TemplateTwo'; 
import './TemplatesPage.css';

const TemplatesPage = () => {
  const navigate = useNavigate();

  const selectTemplate = (template) => {
    localStorage.setItem('selectedTemplate', template); 
    navigate('/dashboard');
  };

  return (
    <div className="templates-page">
      <h1>Select a CV Template</h1>
      <div className="template-selection">
        <div onClick={() => selectTemplate(1)}>
          <img src="" alt="Template One" />
          <h2>Template One</h2>
        </div>
        <div onClick={() => selectTemplate(2)}>
          <img src="" alt="Template Two" />
          <h2>Template Two</h2>
        </div>
      </div>
    </div>
  );
};

export default TemplatesPage;
