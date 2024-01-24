import React from 'react';
import { Typography } from 'antd';
import Gallery from './Gallery';

const { Title } = Typography;

function Featured() {
  return (
    <div className="featured">
      <Title level={3} className="subheading">
        Features
      </Title>
      <Title level={2} className="heading">
        Choose from over 100+ recipes
      </Title>
      <Gallery />
    </div>
  );
}

export default Featured;
