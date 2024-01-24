import React from 'react';
import { Layout } from 'antd';
import './Guide.less'
const { Footer: AntFooter } = Layout;

function Footer() {
  const year = new Date().getFullYear();

  return <AntFooter>&copy; Copyright Recipes Corn {year}</AntFooter>;
}

export default Footer;
