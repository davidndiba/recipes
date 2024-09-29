import React from 'react';
import { Button } from 'antd';
import styles from './AboutHome.less'; // Adjust this to your file location
import bgImage from '../../assets/IMG-20240807-WA0020.jpg'; // Update this path to your actual image path

const AboutUsSection = () => {
    return (
      <div className={styles.container} style={{ backgroundImage: `url(${bgImage})` }}>
        <div className={styles.content}>
          <h1 className={styles.title}>About Us</h1>
          <p className={styles.description}>
          Headquartered in Nairobi Kenya, Microvision Innovations Ltd is an information
          technology and consulting firm specialized in custom software development, ERP,
          CRM and Web technologies. Our technical resources are very diverse and capable of
          working on multiple platforms, in various environments and with a set of tools in full
          harmony. This allows us to offer the best solution for each business condition and
          existing environment. Our goal is to provide our clients with custom-tailored solutions,
          which allows them to achieve and exceed in their business objectives. We specialize
          in project oriented work and focus on deliverables to measure our success.
            {/* Microvision Software Technologies stands at the forefront of innovation, offering top-notch software development and IT solutions. Our expertise spans across financial services, healthcare, education, and more, ensuring customized, high-quality solutions that drive business success. With a commitment to excellence and a client-centric approach, we transform ideas into impactful digital experiences, empowering businesses to thrive. */}
          </p>
          <Button className={styles.readMoreButton}>Read More</Button>
        </div>
      </div>
    );
  };
  
  export default AboutUsSection;
