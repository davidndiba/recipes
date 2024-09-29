// src/pages/Contact.tsx

import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import Navbar from '../../components/Guide/Navabar';
import ContactLayout from '../../components/Guide/ContactLayout';

const Contact: React.FC = () => {
  return (
    <PageContainer>
      <Navbar />
      <ContactLayout />
    </PageContainer>
  );
};

export default Contact;
