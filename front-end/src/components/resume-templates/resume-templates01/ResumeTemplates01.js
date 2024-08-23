import React from 'react';
import './ResumeTemplates01.css';

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
const CVTemplate = () => {
  const personalInfo = {
    name: 'John Doe',
    title: 'Software Engineer',
    email: 'johndoe@example.com',
    phone: '+1 (555) 1234 567',
    address: '123 Main St, Anytown USA',
    linkedin: 'linkedin.com/in/johndoe',
    github: 'github.com/johndoe',
  };

  const skills = [
    'JavaScript',
    'React.js',
    'Node.js',
    'SQL',
    'Git',
    'Agile',
  ];

  const experience = [
    {
      company: 'Acme Inc.',
      title: 'Software Engineer',
      duration: 'Jan 2020 - Present',
      responsibilities: [
        'Developed and maintained web applications using React.js and Node.js',
        'Collaborated with cross-functional teams to deliver high-quality software',
        'Participated in code reviews and helped mentor junior developers',
      ],
    },
    {
      company: 'Widget Co.',
      title: 'Intern',
      duration: 'Jun 2019 - Dec 2019',
      responsibilities: [
        'Assisted in the development and testing of web applications',
        'Gained experience in Agile development practices',
        'Collaborated with the team to implement new features and bug fixes',
      ],
    },
  ];

  const education = [
    {
      institution: 'University of Example',
      degree: 'Bachelor of Science in Computer Science',
      graduation: 'May 2019',
    },
  ];

  return (
    <div className="cv-template">
      <Header name={personalInfo.name} title={personalInfo.title} />
      <Section title="Contact">
        <p>Email: {personalInfo.email}</p>
        <p>Phone: {personalInfo.phone}</p>
        <p>Address: {personalInfo.address}</p>
        <p>LinkedIn: {personalInfo.linkedin}</p>
        <p>GitHub: {personalInfo.github}</p>
      </Section>
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
  );
};

export default CVTemplate;