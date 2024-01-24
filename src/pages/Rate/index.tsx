// src/pages/RateUs.tsx

import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import Navbar from '../../components/Guide/Navabar';
import RatingForm from '../../components/Guide/RatingForm';

const RateUs: React.FC = () => {
  return (
    <PageContainer>
      <Navbar />
      <RatingForm />
    </PageContainer>
  );
};

export default RateUs;
