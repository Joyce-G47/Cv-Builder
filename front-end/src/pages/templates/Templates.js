import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Templates.css";

const Templates = (setSelectionMade) => {
  const navigate = useNavigate();

  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleSelectTemplate = (templateId) => {
    setSelectionMade(true);
    setSelectedTemplate(templateId);
    navigate("/preview",{
      state: { selectedTemplate: templateId },
    });
  };
  
  return (
    <div className="templates-page">
      <div className="template-section">
        <div className="container">
          <div className="resume-templates">
            <h1>Choose Your CV Template</h1>
            <p>Select a professional template that best fits your needs.</p>
            <div className="templates-list">
              <div className="template-card">
                <img src="path_to_template_image_1" alt="Template 1" />
                <h3>Template 1</h3>
                <button onClick={() => handleSelectTemplate(1)}>Select Template</button>
              </div>
              <div className="template-card">
                <img src="path_to_template_image_2" alt="Template 2" />
                <h3>Template 2</h3>
                <button onClick={() => handleSelectTemplate(2)}>Select Template</button>
              </div>
              <div className="template-card">
                <img src="path_to_template_image_3" alt="Template 3" />
                <h3>Template 3</h3>
                <button onClick={() => handleSelectTemplate(3)}>Select Template</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
