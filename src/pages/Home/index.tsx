import React from 'react';
import  Features  from '../../components/Guide/Features';
import Footer from '../../components/Guide/Footer';
import Hero from '../../components/Guide/Hero'
import Navbar from '@/components/Guide/Navabar';

const Home: React.FC = () => {
  return(
    <div>
      <Navbar/>
      <Hero/>
      <Features/>
      <Footer/>
    </div>
  )
}

export default Home ;