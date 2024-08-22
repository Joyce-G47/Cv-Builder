// src/components/ResumeTemplate1.js
import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  section: {
    margin: 10,
    padding: 10,
    borderBottom: '1px solid #E0E0E0',
  },
  heading: {
    fontSize: 24,
    marginBottom: 10,
  },
  text: {
    fontSize: 12,
  },
});

const ResumeTemplates01 = ({ name, contact, education, experience, skills }) => (
  <Document>
    <Page style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heading}>{name}</Text>
        <Text>{contact}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Education</Text>
        {education.map((edu, index) => (
          <Text key={index} style={styles.text}>
            {edu.degree} at {edu.institution} ({edu.year})
          </Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Experience</Text>
        {experience.map((exp, index) => (
          <Text key={index} style={styles.text}>
            {exp.role} at {exp.company} ({exp.years})
          </Text>
        ))}
      </View>
      <View style={styles.section}>
        <Text style={styles.heading}>Skills</Text>
        <Text style={styles.text}>{skills.join(', ')}</Text>
      </View>
    </Page>
  </Document>
);

export default ResumeTemplates01;
