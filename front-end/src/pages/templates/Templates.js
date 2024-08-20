import React from "react";
import "./Templates.css"; // Make sure to create this CSS file for styling

const Templates = () => {
  return (
    <div className="templates-page">
      <div className="template-section">
        <div className="container">
          <div className="resume-tampltes">
            <h1>Choose Your CV Template</h1>
            <p>Select a professional template that best fits your needs.</p>
            <div className="templates-list">
              <div className="template-card">
                <img src="path_to_template_image_1" alt="Template 1" />
                <h3>Template 1</h3>
                <button>Select Template</button>
              </div>
              <div className="template-card">
                <img src="path_to_template_image_2" alt="Template 2" />
                <h3>Template 2</h3>
                <button>Select Template</button>
              </div>
              <div className="template-card">
                <img src="path_to_template_image_2" alt="Template 2" />
                <h3>Template 3</h3>
                <button>Select Template</button>
              </div>
            </div>
            <div className="templates-list">
              <div className="template-card">
                <img src="path_to_template_image_1" alt="Template 1" />
                <h3>Template 1</h3>
                <button>Select Template</button>
              </div>
              <div className="template-card">
                <img src="path_to_template_image_2" alt="Template 2" />
                <h3>Template 2</h3>
                <button>Select Template</button>
              </div>
              <div className="template-card">
                <img src="path_to_template_image_2" alt="Template 2" />
                <h3>Template 3</h3>
                <button>Select Template</button>
              </div>
            </div>
            <div className="more-templates">
              <a href="#">View More Templates</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
