import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import Navbar from '../../components/Guide/Navabar';
// import ContactInfo from '@/components/Guide/ContactInfo';
import ContactInfo from '@/components/Guide/ContactInfo'
const ContactUs: React.FC = () => {
  return (
    <PageContainer>
      <Navbar />
      <ContactInfo/>
     
    </PageContainer>
  );
};

export default ContactUs;
