import React, { useState } from 'react';
import { Form, Input, Button, Typography } from 'antd';
import './ContactForm.less';

const { Title } = Typography;

const ContactForm: React.FC = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values: any) => {
    console.log(values);
  };

  return (
    <Form form={form} onFinish={handleSubmit} className="contact-form">
      <Title level={3}>Contact Us</Title>
      <Form.Item
        name="name"
        rules={[{ required: true, message: 'Please enter your full name!' }]}
      >
        <Input placeholder="Full Name" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[
          { required: true, message: 'Please enter your email!' },
          { type: 'email', message: 'Please enter a valid email address!' },
        ]}
      >
        <Input placeholder="example@gmail.com" />
      </Form.Item>
      <Form.Item
        name="phone"
        rules={[{ required: true, message: 'Please enter your phone number!' }]}
      >
        <Input placeholder="+254 700 000 000" />
      </Form.Item>
      <Form.Item
        name="message"
        rules={[{ required: true, message: 'Please enter your message!' }]}
      >
        <Input.TextArea placeholder="Type here..." />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Send
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ContactForm;
