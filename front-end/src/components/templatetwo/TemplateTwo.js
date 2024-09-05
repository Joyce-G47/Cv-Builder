import React from 'react';
import './TemplateTwo.css';

// Components
const Header = ({ name, title }) => (
  <header>
    <h1>{name}</h1>
    <h2>{title}</h2>
  </header>
);

const Sidebar = ({ email, phone, address, linkedin, github }) => (
  <aside className="sidebar">
    <h3>Contact Information</h3>
    <p>Email: {email}</p>
    <p>Phone: {phone}</p>
    <p>Address: {address}</p>
    <p>LinkedIn: {linkedin}</p>
    <p>GitHub: {github}</p>
  </aside>
);

const Section = ({ title, children }) => (
  <section className="main-section">
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
const TemplateTwo = () => {
  const personalInfo = {
    name: 'Jane Smith',
    title: 'Front-End Developer',
    email: 'janesmith@example.com',
    phone: '+1 (555) 9876 543',
    address: '456 Elm St, Somecity USA',
    linkedin: 'linkedin.com/in/janesmith',
    github: 'github.com/janesmith',
  };

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React.js',
    'Webpack',
    'SASS',
  ];

  const experience = [
    {
      company: 'Tech Solutions',
      title: 'Front-End Developer',
      duration: 'Feb 2021 - Present',
      responsibilities: [
        'Built responsive user interfaces with React.js and CSS',
        'Collaborated with back-end developers to integrate APIs',
        'Implemented design changes based on user feedback',
      ],
    },
    {
      company: 'WebWorks',
      title: 'Junior Developer',
      duration: 'Jul 2019 - Jan 2021',
      responsibilities: [
        'Assisted in developing and maintaining web applications',
        'Worked with HTML, CSS, and JavaScript on various projects',
        'Supported senior developers in debugging and testing',
      ],
    },
  ];

  const education = [
    {
      institution: 'Institute of Technology',
      degree: 'Bachelor of Science in Web Development',
      graduation: 'June 2019',
    },
  ];

  return (
    <div className="cv-template">
      <Header name={personalInfo.name} title={personalInfo.title} />
      <div className="content">
        <Sidebar 
          email={personalInfo.email}
          phone={personalInfo.phone}
          address={personalInfo.address}
          linkedin={personalInfo.linkedin}
          github={personalInfo.github}
        />
        <div className="main-content">
          <Section title="Skills">
            <List items={skills} />
          </Section>
          <Section title="Experience">
            {experience.map((job, index) => (
              <div key={index}>
                <h4>{job.title}</h4>
                <p>{job.company}</p>
                <p>{job.duration}</p>
                <List items={job.responsibilities} />
              </div>
            ))}
          </Section>
          <Section title="Education">
            {education.map((edu, index) => (
              <div key={index}>
                <h4>{edu.degree}</h4>
                <p>{edu.institution}</p>
                <p>{edu.graduation}</p>
              </div>
            ))}
          </Section>
        </div>
      </div>
    </div>
  );
};

export default TemplateTwo;
