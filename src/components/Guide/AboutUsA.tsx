import React from 'react';
import './AboutUsA.less'; // Import your styles

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>
      <div className="about-us-content">
        <p className="about-us-description">
          Microvision Software Technologies stands at the forefront of innovation, offering top-notch software development and IT solutions. Our expertise spans across financial services, healthcare, education, and more, ensuring customized, high-quality solutions that drive business success. With a commitment to excellence and a client-centric approach, we transform ideas into impactful digital experiences, empowering businesses to thrive in the modern landscape.
        </p>
        <button className="about-us-button">Get a Service</button>
      </div>
    </div>
  );
};

export default AboutUs;
