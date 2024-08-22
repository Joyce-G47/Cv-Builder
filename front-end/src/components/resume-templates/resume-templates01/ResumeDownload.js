// src/components/ResumeDownload.js
import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumeTemplates01 from './ResumeTemplates01';

const ResumeDownload = () => {
  const resumeData = {
    name: 'John Doe',
    contact: '123 Main St, Anytown, USA',
    education: [
      { degree: 'BSc in Computer Science', institution: 'University X', year: '2022' },
    ],
    experience: [
      { role: 'Software Engineer', company: 'Tech Corp', years: '2022-Present' },
    ],
    skills: ['React', 'JavaScript', 'CSS', 'HTML'],
  };

  return (
    <PDFDownloadLink
      document={<ResumeTemplates01 {...resumeData} />}
      fileName="resume.pdf"
      style={{
        textDecoration: 'none',
        padding: '10px 20px',
        color: '#fff',
        backgroundColor: '#007BFF',
        borderRadius: '5px',
        display: 'block',
        textAlign: 'center',
        marginTop: '10px',
      }}
    >
      {({ loading }) => (loading ? 'Loading document...' : 'Download Template 1')}
    </PDFDownloadLink>
  );
};

export default ResumeDownload;
