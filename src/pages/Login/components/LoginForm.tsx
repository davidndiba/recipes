// src/pages/Login.tsx
import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
// import { useAuth } from './AuthTypes';
import { PageContainer } from '@ant-design/pro-layout';

const LoginForm: React.FC = () => {
//   const navigate = useNavigate();
//   const { login, isAuthenticated } = useAuth();

//   const onFinish = (values: any) => {
//     const { username, email, password } = values;
//     login(username, email, password);
//   };

//   useEffect(() => {
//     if (isAuthenticated) navigate('/home');
//   }, [isAuthenticated, navigate]);

  return (
    <PageContainer>
      <Form name="login" >
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
    </PageContainer>
  );
};

export default LoginForm;
