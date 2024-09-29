import React from 'react';
import { Card, Col, Row } from 'antd';
import { ProCard } from '@ant-design/pro-components';
import './ServicesHome.less'; // Import custom CSS for additional styling

const services = [
  {
    title: "Off-Site/Off Shore Capabilities",
    description: `
      - Support and Software Development professionals at our offsite development centers in Uganda, Zimbabwe, South Africa and Rwanda.
      - Serving fortune 20+ companies for over 12 years.
      - Total financial stability since inception
      - Spotless delivery record for over 30+ projects
      - 6 workstations across Kenya, Uganda and Rwanda for software development testing and support facilities.
      - In-house staff training facilities to train up to 50 people at a time
      - Co-location dedicated servers for application hosting, testing and client presentation
      - Over 70% business coming from repeat customers
      - Facility for video conferencing 24x7 VOIP calling for onsite-offsite-client team coordination
      - Contingency and disaster recovery facility
      - 24x7 Support to our clients
      - Phenomenal growth rate achieved through IT innovation, dedicated teams and timely implementation of solutions
      - Application Development
      - R&D consulting
      - Application Migration
      - Multimedia Services
      - Application Maintenance
      - Project Management
      - Application QA and Testing
      - Product Development
      - Dedicated development center
      - Business Consulting
      - Data management and analysis
      - BPO Services
    `,
  },
  {
    title: "Technology Competencies",
    description: `
      - Microsoft Technologies
      - Java / J2EE Expertise
      - Open Source
      - Mobile applications
      - Database Expertise
      - Outlook Exchange Server
      - Statistical data analysis
      - AWS Cloud Setup and Support
      - Cyber security
      - Data visualization and analytics
      - Data management
    `,
  },
  {
    title: "Business Process Outsourcing (BPO) Service Offerings",
    description: `
      - IT Support Help Desk
      - CRM Support
      - Managed Services
      - Inbound Customer Care
      - Data Integrity Services
      - IT Tech Support
      - Data analysis BPO
    `,
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="services-section">
      <header className="services-header">
        <h1>Our Services</h1>
      </header>
      <main className="services-content">
        <Row gutter={16}>
          {services.map((service, index) => (
            <Col span={8} key={index}>
              <ProCard title={service.title} bordered>
                <p>{service.description}</p>
              </ProCard>
            </Col>
          ))}
        </Row>
      </main>
    </section>
  );
};

export default ServicesSection;
