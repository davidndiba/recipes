import React from 'react';
import './AboutUsLanding.less';
import backgroundImage from '../../assets/IMG-20240708-WA0049.jpg'; // Update the path as needed

const AboutUs = () => {
  return (
    <div 
      className="about-us-container" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* <h1 className="about-us-title">About Us</h1> */}
    </div>
  );
};

export default AboutUs;
