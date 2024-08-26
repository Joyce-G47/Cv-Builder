import React from 'react';
import './TemplateOne.css';

const TemplateOne = ({ formData }) => {
  return (
    <div className="template-one">
      <header className="header">
        <h1>{formData.fullName}</h1>
        <h2>{formData.jobTitle || 'Lead Business Analyst'}</h2>
        <div className="contact-info">
          <p>{formData.phoneNumber || '+2773 097 4288'}</p>
          <p>|</p>
          <p>{formData.deliveryNote || 'kwaza@gmail.com'}</p>
          <p>|</p>
          <p>{formData.portfolio || 'linkedin.com'}</p>
          <p>|</p>
          <p>{formData.location || 'Cape Town'}</p>
        </div>
      </header>

      <section className="summary">
        <h3>Summary</h3>
        <p>{formData.professionalSummary || "I am an experienced Business Analyst with a strong technical background and great project management skills..."}</p>
      </section>

      <section className="skills">
        <h3>Skills</h3>
        <div className="skills-content">
          <p>{formData.skills || "Business: Budgeting • Financial Analysis • Project Management • Stakeholder Management • Business Strategy"}</p>
          <p>{formData.technicalSkills || "Technology: Excel • VBA • SQL • QuickBooks • Power BI • Tableau • Python"}</p>
        </div>
      </section>

      <section className="experience">
        <h3>Experience</h3>
        <div className="experience-item">
          <h4>{formData.jobTitle1 || "Lead Business Analyst & Project Manager"}</h4>
          <p>{formData.company1 || "Network Solutions LLC"}</p>
          <p>{formData.location1 || "Dallas, TX"}</p>
          <p>{formData.dates1 || "2019 - Present"}</p>
          <ul>
            <li>{formData.achievement1_1 || "Created new strategies to manage $2 million of accounts at risk, resulting in an increase of 4% in revenue in 6 months."}</li>
            <li>{formData.achievement1_2 || "Led the effort to deploy an automated time & expense reporting system for more than 90 onsite and offsite personnel across 3 locations."}</li>
            <li>{formData.achievement1_3 || "Oversaw the budget and schedule of a project to recruit, hire, and train 150 new employees at five new locations."}</li>
          </ul>
        </div>
        <div className="experience-item">
          <h4>{formData.jobTitle2 || "Senior Business Analyst"}</h4>
          <p>{formData.company2 || "Network Solutions LLC"}</p>
          <p>{formData.location2 || "Dallas, TX"}</p>
          <p>{formData.dates2 || "2017 - 2019"}</p>
          <ul>
            <li>{formData.achievement2_1 || "Through an improved pricing model, increased gross revenue of 15% in 2018 compared to 2017 with no change to fixed costs."}</li>
            <li>{formData.achievement2_2 || "Reduced warehouse processing time by 30% in just 3 months while the industry norm is 10 months."}</li>
            <li>{formData.achievement2_3 || "Achieved project milestones and deliverables with an internal and external team of 10+ analysts."}</li>
          </ul>
        </div>
        {/* Add more experience as needed */}
      </section>

      <section className="education">
        <h3>Education</h3>
        <div className="education-item">
          <h4>{formData.degree1 || "M.Sc. in Finance"}</h4>
          <p>{formData.university1 || "University of Wisconsin"}</p>
          <p>{formData.location3 || "Wisconsin"}</p>
          <p>{formData.dates3 || "2012 - 2013"}</p>
        </div>
        <div className="education-item">
          <h4>{formData.degree2 || "BBA: Business, Supply Chain Management"}</h4>
          <p>{formData.university2 || "University of Wisconsin"}</p>
          <p>{formData.location4 || "Wisconsin"}</p>
          <p>{formData.dates4 || "2008 - 2012"}</p>
        </div>
      </section>

      <section className="courses-certificates">
        <h3>Courses & Certificates</h3>
        <p>{formData.achievements || "PMI Professional in Business Analysis (PBA) — PMI, 2019\nCertified Associate in Project Management (CAPM) — PMI, 2018\nHigh-Dimensional Data Analysis — Harvard, 2017"}</p>
      </section>             
    </div>
  );
};

export default TemplateOne;
