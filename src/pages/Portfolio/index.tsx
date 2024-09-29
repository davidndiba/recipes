import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import Navbar from '../../components/Guide/Navabar';
// import RatingForm from '../../components/Guide/RatingForm';
import PortfolioSection from '@/components/Guide/PortfolioSection';
import PortfolioHome from '@/components/Guide/PortfolioHome'
// import MajorClients from '@/components/Guide/Clients';
import FooterComponent from '@/components/Guide/Footer';
const RateUs: React.FC = () => {
  return (
    <PageContainer>
      <Navbar />
      <PortfolioHome/>
      {/* <RatingForm /> */}
      {/* <MajorClients/> */}
      <PortfolioSection/>
      {/* <MajorClients/> */}
      <FooterComponent/>
    </PageContainer>
  );
};

export default RateUs;
