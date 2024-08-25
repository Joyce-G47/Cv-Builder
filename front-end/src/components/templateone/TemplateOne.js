// src/components/templateone/TemplateOne.js
import React from 'react';
import './TemplateOne.css';

// Components
const Header = ({ name, title }) => (
  <header>
    <h1>{name}</h1>
    <h2>{title}</h2>
  </header>
);

const Section = ({ title, children }) => (
  <section>
    <h3>{title}</h3>
    {children}
  </section>
);

const List = ({ items }) => (
  <ul>
    {items.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);

// CV Template
const TemplateOne = ({ formData }) => {
  return (
    <div className="cv-template">
      <Header name={formData.fullName} title={formData.professionalSummary} />
      <Section title="Contact">
        <p>Email: {formData.deliveryNote}</p>
        <p>Phone: {formData.phoneNumber}</p>
        <p>Address: {formData.location}</p>
        <p>Portfolio: {formData.portfolio}</p>
      </Section>
      <Section title="Skills">
        <List items={formData.skills.split(',')} />
      </Section>
      <Section title="Experience">
        <div>
          <h4>Experience</h4>
          <p>{formData.workExperience}</p>
        </div>
      </Section>
      <Section title="Education">
        <div>
          <h4>Education</h4>
          <p>{formData.education}</p>
        </div>
      </Section>
      <Section title="Projects">
        <div>
          <h4>Projects</h4>
          <p>{formData.project}</p>
        </div>
      </Section>
      <Section title="Achievements">
        <div>
          <h4>Achievements</h4>
          <p>{formData.achievements}</p>
        </div>
      </Section>
    </div>
  );
};

export default TemplateOne;
