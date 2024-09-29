import React from 'react';
import { Row, Col, Button } from 'antd';
import styles from './Hero.less'; 
import bgImage from '../../assets/IMG-20240807-WA0000.jpg'; 

const LandingPage: React.FC = () => {
  return (
    <div className={styles.navbarContainer} style={{ backgroundImage: `url(${bgImage})` }}>
      <Row justify="center" align="middle" className={styles.contentContainer}>
        <Col xs={24} md={16} className={styles.textContainer}>
          <h1 className={styles.mainTitle}>
            Software Solutions to Make Your Business Simple.
          </h1>
          <p className={styles.subtitle}>
            We provide unparalleled tech solutions to meet each of our customer needs.
          </p>
          <Button type="primary" className={styles.ctaButton}>
            Get In Touch
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default LandingPage;
