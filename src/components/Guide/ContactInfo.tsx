import React from 'react';
import { Form, Input, Button, Typography, Row, Col } from 'antd';
import ProCard from '@ant-design/pro-card';
import './ContactInfo.less';
import MapComponent from './Map';

const { Title, Text } = Typography;

const ContactForm = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log('Received values:', values);
  };

  return (
    <div className="contact-form-container">
      <Title level={1} className="contact-info-title">Contact Info.</Title>
      <ProCard className="contact-info-card">
        <Row gutter={[16, 16]} className="contact-info-row">
          <Col xs={24} md={8} className="contact-info-col">
            <Title level={4} className="contact-info-subtitle">Address</Title>
            <Text className="contact-info-text">1st Floor Hill Gate Arcade<br />Limuru-Kiambu</Text>
            <Title level={4} className="contact-info-subtitle">Phone</Title>
            <Text className="contact-info-text">
              +254 724 858 611<br />
              +254 738 055 312
            </Text>
            <div className="map-section">
              <MapComponent />
            </div>
          </Col>
          <Col xs={24} md={16} className="contact-form-col">
            <Form form={form} onFinish={handleSubmit} layout="vertical" className="contact-form">
              <Form.Item name="name" label="Name">
                <Input placeholder="Your Name" />
              </Form.Item>
              <Form.Item name="email" label="Email">
                <Input placeholder="Your Email" />
              </Form.Item>
              <Form.Item name="subject" label="Subject">
                <Input placeholder="Subject" />
              </Form.Item>
              <Form.Item name="message" label="Message">
                <Input.TextArea placeholder="Your Message" rows={6} />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit">Send Message</Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </ProCard>
      <div className="subscribe-section">
        <Title level={2} className="subscribe-title"></Title>
        <div className="subscribe-divider">DON'T MISS OUT!</div>
        <Text className="subscribe-text">Subscribe to our newsletter and receive the latest news!</Text>
        <Form layout="inline" className="subscribe-form">
          <Form.Item>
            <Input placeholder="Enter Your Email" className="subscribe-input" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" className="subscribe-button">Send A Message</Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
