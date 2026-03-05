import React from 'react';
import { Document, Page, Text, View, StyleSheet, Link } from '@react-pdf/renderer';
import resumeData from '../data/resume.json';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: '#333',
    lineHeight: 1.4,
  },
  header: {
    marginBottom: 15,
    textAlign: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
    textTransform: 'uppercase',
  },
  title: {
    fontSize: 11,
    color: '#666',
    marginBottom: 6,
  },
  contact: {
    fontSize: 9,
    color: '#555',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 2,
    marginBottom: 6,
    textTransform: 'uppercase',
  },
  item: {
    marginBottom: 8,
  },
  itemHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  itemTitle: {
    fontWeight: 'bold',
    fontSize: 10,
  },
  itemSubtitle: {
    fontStyle: 'italic',
    color: '#555',
  },
  itemDate: {
    fontSize: 9,
    color: '#666',
  },
  bullet: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  bulletPoint: {
    width: 10,
    fontSize: 10,
  },
  bulletText: {
    flex: 1,
  },
  skillsGroup: {
    flexDirection: 'row',
    marginBottom: 3,
  },
  skillsTitle: {
    fontWeight: 'bold',
    width: 120,
  },
  skillsList: {
    flex: 1,
  },
});

export const ResumePDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{resumeData.basics.name}</Text>
        <Text style={styles.title}>{resumeData.basics.title}</Text>
        <View style={styles.contact}>
          <Text>{resumeData.basics.email}</Text>
          <Text>|</Text>
          <Text>{resumeData.basics.phone}</Text>
          <Text>|</Text>
          <Text>{resumeData.basics.location}</Text>
        </View>
        <View style={styles.contact}>
          {resumeData.basics.links.map((link, i) => (
            <React.Fragment key={i}>
              <Link src={link.url}>{link.name}</Link>
              {i < resumeData.basics.links.length - 1 && <Text>|</Text>}
            </React.Fragment>
          ))}
        </View>
      </View>

      {/* Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Summary</Text>
        <Text>{resumeData.basics.summary}</Text>
      </View>

      {/* Experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {resumeData.experience.map((exp, i) => (
          <View key={i} style={styles.item}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>{exp.company}</Text>
              <Text style={styles.itemDate}>{exp.dates}</Text>
            </View>
            <View style={styles.itemHeader}>
              <Text style={styles.itemSubtitle}>{exp.role}</Text>
              <Text style={styles.itemDate}>{exp.location}</Text>
            </View>
            {exp.bullets.map((bullet, j) => (
              <View key={j} style={styles.bullet}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>{bullet}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>

      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Projects</Text>
        {resumeData.projects.map((proj, i) => (
          <View key={i} style={styles.item}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>{proj.title}</Text>
              <Text style={styles.itemDate}>{proj.dates}</Text>
            </View>
            <Text style={{ fontSize: 9, color: '#555', marginBottom: 2 }}>{proj.stack}</Text>
            {proj.bullets.map((bullet, j) => (
              <View key={j} style={styles.bullet}>
                <Text style={styles.bulletPoint}>•</Text>
                <Text style={styles.bulletText}>{bullet}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>

      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Technical Skills</Text>
        {resumeData.skills.map((skill, i) => (
          <View key={i} style={styles.skillsGroup}>
            <Text style={styles.skillsTitle}>• {skill.group}:</Text>
            <Text style={styles.skillsList}>{skill.items.join(', ')}</Text>
          </View>
        ))}
      </View>

      {/* Education */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Education</Text>
        {resumeData.education.map((edu, i) => (
          <View key={i} style={styles.item}>
            <View style={styles.itemHeader}>
              <Text style={styles.itemTitle}>{edu.institution}</Text>
              <Text style={styles.itemDate}>{edu.dates}</Text>
            </View>
            <View style={styles.itemHeader}>
              <Text style={styles.itemSubtitle}>{edu.degree}</Text>
              <Text style={styles.itemDate}>{edu.details}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* Certifications */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Certifications</Text>
        {resumeData.certifications.map((cert, i) => (
          <View key={i} style={styles.bullet}>
            <Text style={styles.bulletPoint}>•</Text>
            <Text style={styles.bulletText}>{cert}</Text>
          </View>
        ))}
      </View>
    </Page>
  </Document>
);
