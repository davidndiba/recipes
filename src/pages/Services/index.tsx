import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import Navbar from '../../components/Guide/Navabar';
// import RatingForm from '../../components/Guide/RatingForm';
import ServicesHome from '@/components/Guide/ServicesHome'
const RateUs: React.FC = () => {
  return (
    <PageContainer>
      <Navbar />
      <ServicesHome/>
    </PageContainer>
  );
};

export default RateUs;
