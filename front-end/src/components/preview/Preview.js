import React, { useState, useEffect } from "react";
import TemplateOne from '../templateone/TemplateOne';
import TemplateTwo from '../templatetwo/TemplateTwo';
import "./Preview.css";

const Preview = () => {
  const selectedTemplate = localStorage.getItem('selectedTemplate');

  const [formData, setFormData] = useState({
    location: "",
    fullName: "",
    deliveryNote: "",
    phoneNumber: "",
    jotTitle: "",
    portfolio: "",
    professionalSummary: "",
    workExperience: "",
    skills: "",
    education: "",
    project: "",
    achievements: "",
  });

  const [showDetails, setShowDetails] = useState(true);
  const [showProfessional, setShowProfessional] = useState(true);
  const [showWorkExperience, setShowWorkExperience] = useState(true);
  const [showSkills, setShowSkills] = useState(true);
  const [showEducation, setShowEducation] = useState(true);
  const [showProject, setShowProject] = useState(true);
  const [showAchievements, setShowAchievements] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const toggleDetails = () => setShowDetails(!showDetails);
  const toggleProfessional = () => setShowProfessional(!showProfessional);
  const toggleWorkExperience = () => setShowWorkExperience(!showWorkExperience);
  const toggleSkills = () => setShowSkills(!showSkills);
  const toggleEducation = () => setShowEducation(!showEducation);
  const toggleProject = () => setShowProject(!showProject);
  const toggleAchievements = () => setShowAchievements(!showAchievements);

  const renderTemplate = () => {
    switch (selectedTemplate) {
      case '1': // Ensure this matches the stored string in localStorage
        return <TemplateOne formData={formData} />;
      case '2': // Ensure this matches the stored string in localStorage
        return <TemplateTwo formData={formData} />;
      default:
        return <p>Please select a template.</p>;
    }
  };

  return (
    <div className="preview-section">
      <div className="input-column">
        <div className="contact-details">
          <button onClick={toggleDetails}>
            {showDetails ? "Hide Contact Details" : "Show Contact Details"}
          </button>
          {showDetails && (
            <>
              <div className="form-group">
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="deliveryNote">Email Address:</label>
                <input type="text" id="deliveryNote" name="deliveryNote" value={formData.deliveryNote} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="location">Address:</label>
                <input type="text" id="location" name="location" value={formData.location} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input type="text" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="portfolio">Portfolio:</label>
                <input type="text" id="portfolio" name="portfolio" value={formData.portfolio} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="jobtitle">Job Title:</label>
                <input type="text" id="jobtitle" name="jobrtitle" value={formData.jotTitle} onChange={handleChange} />
              </div>
            </>
          )}
        </div>

        <div className="professional-summary">
          <button onClick={toggleProfessional}>
            {showProfessional ? "Hide Professional Summary" : "Show Professional Summary"}
          </button>
          {showProfessional && (
            <div className="form-group">
              <label htmlFor="professionalSummary">Professional Summary:</label>
              <textarea
                id="professionalSummary"
                name="professionalSummary"
                value={formData.professionalSummary}
                onChange={handleChange}
              />
            </div>
          )}
        </div>

        <div className="work-experience">
          <button onClick={toggleWorkExperience}>
            {showWorkExperience ? "Hide Work Experience" : "Show Work Experience"}
          </button>
          {showWorkExperience && (
            <div className="form-group">
              <label htmlFor="workExperience">Work Experience:</label>
              <textarea
                id="workExperience"
                name="workExperience"
                value={formData.workExperience}
                onChange={handleChange}
              />
            </div>
          )}
        </div>

        <div className="skills">
          <button onClick={toggleSkills}>
            {showSkills ? "Hide Skills" : "Show Skills"}
          </button>
          {showSkills && (
            <div className="form-group">
              <label htmlFor="skills">Skills:</label>
              <textarea
                id="skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
              />
            </div>
          )}
        </div>

        <div className="education">
          <button onClick={toggleEducation}>
            {showEducation ? "Hide Education" : "Show Education"}
          </button>
          {showEducation && (
            <div className="form-group">
              <label htmlFor="education">Education:</label>
              <textarea
                id="education"
                name="education"
                value={formData.education}
                onChange={handleChange}
              />
            </div>
          )}
        </div>

        <div className="project">
          <button onClick={toggleProject}>
            {showProject ? "Hide Project" : "Show Project"}
          </button>
          {showProject && (
            <div className="form-group">
              <label htmlFor="project">Project:</label>
              <textarea
                id="project"
                name="project"
                value={formData.project}
                onChange={handleChange}
              />
            </div>
          )}
        </div>

        <div className="achievements">
          <button onClick={toggleAchievements}>
            {showAchievements ? "Hide Achievements" : "Show Achievements"}
          </button>
          {showAchievements && (
            <div className="form-group">
              <label htmlFor="achievements">Achievements:</label>
              <textarea
                id="achievements"
                name="achievements"
                value={formData.achievements}
                onChange={handleChange}
              />
            </div>
          )}
        </div>
      </div>

      <div className="display-column">
        <h2>Preview</h2>
        {renderTemplate()}
      </div>
    </div>
  );
};

export default Preview;
