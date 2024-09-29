import React from 'react';
import { Card, Typography } from 'antd';

const { Title, Paragraph } = Typography;

interface ServiceCardProps {
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description }) => {
  return (
    <Card
      bordered={false}
      className="service-card"
      style={{ borderRadius: '10px', padding: '20px' }}
    >
      <Title level={3} className="service-card-title">
        {title}
      </Title>
      <Paragraph className="service-card-description">
        {description}
      </Paragraph>
    </Card>
  );
};

export default ServiceCard;
