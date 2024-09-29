import React from 'react';
import { Card, Row, Col, Typography } from 'antd';
import './WhyChooseUsA.less';

const { Title, Paragraph } = Typography;

const reasons = [
  {
    number: 1,
    title: "Expert Team",
    description: "Our team is a diverse group of seasoned professionals with deep industry knowledge and technical expertise. With years of experience in delivering high-quality software solutions, we pride ourselves on our ability to understand your unique business needs and craft tailored strategies that drive success. From concept to execution, our experts are dedicated to providing innovative solutions that set you apart in the competitive market.",
  },
  {
    number: 2,
    title: "Innovative Solutions",
    description: "At Microvision Software Technologies, we don’t just follow trends—we create them. Leveraging the latest advancements in technology, we deliver forward-thinking solutions that push the boundaries of what's possible. Whether it’s through cutting-edge software, seamless integration, or data-driven insights, our innovative approach ensures that your business stays ahead of the curve and ready to meet the challenges of tomorrow.",
  },
  {
    number: 3,
    title: "Customer-Centric Approach",
    description: "Your success is our success. That’s why we place our clients at the heart of everything we do. Our customer-centric approach is built on listening, understanding, and adapting to your needs. We collaborate closely with you to ensure that our solutions not only meet your expectations but exceed them. With a focus on building long-term partnerships, we’re committed to delivering value that helps your business thrive and grow sustainably.",
  },
];

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-container">
      <Title level={2} className="why-choose-us-title">WHY CHOOSE US?</Title>
      <Row gutter={[16, 16]} className="why-choose-us-row">
        {reasons.map(({ number, title, description }) => (
          <Col xs={24} md={8} key={number}>
            <Card className="why-choose-us-card">
              <div className="why-choose-us-number">{number}</div>
              <Title level={4} className="why-choose-us-card-title">{title}</Title>
              <Paragraph className="why-choose-us-card-description">{description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default WhyChooseUs;
