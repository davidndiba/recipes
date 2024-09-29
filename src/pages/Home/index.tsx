import React from 'react';
import  Features  from '../../components/Guide/Features';
import Footer from '../../components/Guide/Footer';
import Hero from '../../components/Guide/Hero'
import Navbar from '@/components/Guide/Navabar';
import Company1Logos from '@/components/Guide/Company1logos'
import AboutHome from '@/components/Guide/AboutHome'
import WhyChooseUs from '@/components/Guide/WhyChooseUs';
import Reviews from '@/components/Guide/Reviews'
import ContactInfo from '@/components/Guide/ContactInfo'
import ContactHome from '@/components/Guide/ContactHome'
import MajorClients from '@/components/Guide/Clients';

const Home: React.FC = () => {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <Company1Logos/>
      <AboutHome/>
      <WhyChooseUs/>
      <Reviews/>
      <ContactHome/>
      <MajorClients/>
      <ContactInfo/>
      <Footer/>
    </div>
  )
}

export default Home ;