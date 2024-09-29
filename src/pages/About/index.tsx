import React from 'react';
import Navbar from '@/components/Guide/Navabar';
import FooterComponent from '@/components/Guide/Footer';
import AboutUsLanding from  '@/components/Guide/AboutUsLanding'
import AboutUsA from '@/components/Guide/AboutUsA'
import QuickFacts from '@/components/Guide/QuickFacts'
import WhyChooseUs from '@/components/Guide/WhyChooseUsA';
import ServicesSection from '@/components/Guide/ServicesSection';
const About: React.FC = () => {
  return(
    <div>
      <Navbar/>
      <AboutUsLanding/>
      <AboutUsA/>
      <QuickFacts/>
      <WhyChooseUs/>
      <ServicesSection/>
      <FooterComponent/>
    </div>
  )
}

export default About ;