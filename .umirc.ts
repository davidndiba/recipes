import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {}, 
  request: {},
  layout: {
    title: 'RecipesCorn',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: 'Home',
      path: '/home',
      component: './Home',
    },
  
    {
      name: 'About',
      path: '/about',
      component: './About',
    },
    {
      name: 'Contact Us',
      path: '/contact',
      component: './Contact',
    },
    {
      name: 'Rate Us',
      path: '/rate',
      component: './Rate',
    },
    {
      name: 'Login',
      path: '/login',
      component: './Login',
    },
    
  ],
  npmClient: 'yarn',
});
