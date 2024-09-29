import React from 'react';
import { Typography } from 'antd';
import ContactForm from './ContactForm';
import Map from './Map';
import Footer from './Footer';
import './Guide.less'
const { Title } = Typography;

function ContactLayout() {
  return (
    <>
      <div className="contact-page">
        <div className="contact-heading">
          <Title  className="subheading_1">
            Contact
          </Title>
          <Title  className="heading-mg-btm">
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
