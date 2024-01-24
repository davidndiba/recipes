import React from 'react';
import { Typography } from 'antd';
import ContactForm from './ContactForm';
import Map from './Map';
import Footer from './Footer';

const { Title } = Typography;

function ContactLayout() {
  return (
    <>
      <div className="contact-page">
        <div className="contact-heading">
          <Title level={3} className="subheading">
            Contact
          </Title>
          <Title level={2} className="heading mg-btm">
            Got any questions?
          </Title>
        </div>
        <div className="contact">
          <ContactForm />
          <Map />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactLayout;
