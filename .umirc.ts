// import { defineConfig } from '@umijs/max';

// export default defineConfig({
//   antd: {},
//   access: {},
//   model: {},
//   initialState: {},
//   request: {},
//   layout: {
//     title: '@umijs/max',
//   },
//   routes: [
//     {
//       path: '/',
//       redirect: '/home',
//     },
//     {
//       name: '首页',
//       path: '/home',
//       component: './Home',
//     },
//     {
//       name: '权限演示',
//       path: '/access',
//       component: './Access',
//     },
//     {
//       name: ' CRUD 示例',
//       path: '/table',
//       component: './Table',
//     },
//   ],
//   npmClient: 'yarn',
// });

import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {}, 
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
      name: 'CRUD 示例',
      path: '/table',
      component: './Table',
    },
    {
      name: '登录',
      path: '/login',
      component: './Login',
    },
    {
      name: '登录',
      path: '/about',
      component: './About',
    },
    {
      name: '登录',
      path: '/contact',
      component: './Contact',
    },
    {
      name: '登录',
      path: '/rate',
      component: './Rate',
    },
    
  ],
  npmClient: 'yarn',
});
