// import React, { useState } from 'react';
// import { Form, Input, Button, Card, message } from 'antd';
// import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
// import { PageContainer } from '@ant-design/pro-layout';
// import Navbar from '../../../components/Guide/Navabar';
// import './Login.less';
// import { fetchUserData } from '../../../services/demo/api';

// const LoginForm: React.FC = () => {
//   const [isAuthenticated, setAuthenticated] = useState(false);

//   const onFinish = async () => {
//     try {
//       const userData = await fetchUserData('someUserId');
//       setAuthenticated(true);
//       message.success('Login successful');

//       window.location.href = 'https://api.spoonacular.com/recipes/random?number=10&apiKey=3702bc79d55f4f1099be2ceacd8db842';
//     } catch (error) {
//       console.error('Error fetching data from API', error);
//     }
//   };

//   return (
//     <PageContainer>
//       <Navbar />
//       <div className="login-container">
//         <Card style={{ width: '600' }} className="login-card">
//           <Form style={{ width: '600' }} name="login" onFinish={onFinish}>
//             <h1>Login to begin looking at all our recipes...</h1>

//             <Form.Item name="username" rules={[{ required: true, message: 'Please enter your username!' }]}>
//               <Input prefix={<UserOutlined />} placeholder="Username" />
//             </Form.Item>

//             <Form.Item name="email" rules={[{ required: true, message: 'Please enter your email!' }]}>
//               <Input prefix={<MailOutlined />} type="email" placeholder="Enter your email" />
//             </Form.Item>

//             <Form.Item name="password" rules={[{ required: true, message: 'Please enter your password!' }]}>
//               <Input.Password prefix={<LockOutlined />} placeholder="Enter your password" />
//             </Form.Item>

//             <Form.Item>
//               <Button type="primary" htmlType="submit">
//                 Login
//               </Button>
//             </Form.Item>
//           </Form>
//         </Card>
//       </div>
//     </PageContainer>
//   );
// };

// export default LoginForm;
// src/pages/Login.tsx

import React, { useState } from 'react';
import { Form, Input, Button, Card, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { PageContainer } from '@ant-design/pro-layout';
import Navbar from '../../../components/Guide/Navabar';
import './Login.less';

// Simulated authentication function
const authenticateUser = (username: string, password: string) => {
  // Simulate a successful login for demonstration purposes
  return username === 'John' && password === '1234';
};

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onFinish = () => {
    // Simulated authentication logic
    if (authenticateUser(username, password)) {
      // Simulate storing authentication state in localStorage
      localStorage.setItem('isAuthenticated', 'true');

      // Redirect to external API after successful login
      window.location.href = 'https://api.spoonacular.com/recipes/716429/information?includeNutrition=false&apiKey=3702bc79d55f4f1099be2ceacd8db842';
    } else {
      message.error('Invalid username or password');
    }
  };

  return (
    <PageContainer>
      <Navbar />
      <div className="login-container">
        <Card style={{ width: '600px' }} className="login-card">
          <Form name="login" onFinish={onFinish}>
            <h1>Login to begin looking at all our recipes...</h1>

            <Form.Item name="username" rules={[{ required: true, message: 'Please enter your username!' }]}>
              <Input
                prefix={<UserOutlined />}
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Item>

            <Form.Item name="password" rules={[{ required: true, message: 'Please enter your password!' }]}>
              <Input.Password
                prefix={<LockOutlined />}
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
