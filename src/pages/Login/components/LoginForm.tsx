// src/pages/Login.tsx
import React, { useState } from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { Redirect } from 'umi';
import { PageContainer } from '@ant-design/pro-layout';
import Navbar from '../../../components/Guide/Navabar'; 
import './Login.less';
const LoginForm: React.FC = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const onFinish = () => {
    setAuthenticated(true);
    message.success('Login successful');
  };

  if (isAuthenticated) {
   <Redirect to="/" />;
  }

  return (
    <PageContainer>
      <Navbar />
      <div className="login-container">
        <Card style={{width:'600'}} className="login-card">
          <Form style={{width:'600'}} name="login" onFinish={onFinish}>
            <h1>Login to begin looking at all our recipes...</h1>

            <Form.Item name="username" rules={[{ required: true, message: 'Please enter your username!' }]}>
              <Input prefix={<UserOutlined />} placeholder="Username" />
            </Form.Item>

            <Form.Item name="email" rules={[{ required: true, message: 'Please enter your email!' }]}>
              <Input prefix={<MailOutlined />} type="email" placeholder="Enter your email" />
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true, message: 'Please enter your password!' }]}>
              <Input.Password prefix={<LockOutlined />} placeholder="Enter your password" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </PageContainer>
  );
};

export default LoginForm;
