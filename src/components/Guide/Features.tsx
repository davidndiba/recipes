import React from 'react';
import { Typography } from 'antd';
import Gallery from './Gallery';
import './Guide.less';
import styles from './Features.less';


const { Title } = Typography;

function Featured() {
  return (
    <div className={styles.featured}>
      <Title level={3} className={styles.subheading}>
        Features
      </Title>
      <Title level={2} className={styles.heading}>
        Choose from over 100+ recipes
      </Title>
      <Gallery />
    </div>
  );
}

export default Featured;
