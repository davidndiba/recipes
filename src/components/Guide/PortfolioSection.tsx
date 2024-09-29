import React, { useState } from 'react';
import PortfolioItem from './PortfolioItem1';
// import Pagination from './Pagination';
import { Col, Row, Pagination } from 'antd';

interface PortfolioData {
  image: string;
  title: string;
  client: string;
  description: string;
  link?: string;
}

const portfolioData: PortfolioData[] = [
  // Your portfolio data here
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9e2902ae869f2034538a19739dfe83b18fc797a4b070710909fe920f0960c62?placeholderIfAbsent=true&apiKey=51690fefe889414fb28463c4962255b7",
    title: "Signal POS",
    client: "John Paul Huruma Hospital",
    description: "Modern and highly capable VAT ready POS software from Microvision Innovations Ltd Ltd. The web/cloud based retail store management POS software includes some of the best features to manage and operate single and multi-location retail stores. Microvision has managed Signal POS for over 7yrs implementing it in over 73 business establishments",
    link: "http://microvision.co.ke/posv3/public/"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9cf11dc02d41926c68b7332d83c33705d60787d0874014aed4a2e9eb4f361b35?placeholderIfAbsent=true&apiKey=51690fefe889414fb28463c4962255b7",
    title: "Vision HMIS",
    client: "Wholesale, Retailers & Hotels",
    description: "A hospital information management system (ERP) that is developed and is supported by Microvision Innovations Ltd. Designed for the hospital, clinic, dispensary or a group of clinics and provides end to end management of hospital services health records management,human resources, financial account and procurement. A demo version can be accessed through the microvision development server",
     link: "http://microvision.co.ke/cliniq/public"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9497d46f1a897691be376454efea644289780e8bdc5a640794ea4c3da67d722?placeholderIfAbsent=true&apiKey=51690fefe889414fb28463c4962255b7",
    title: "CliniQ EMR",
    client: "Skymed Clinics",
    description: "An electronic health records management system CliniQ EMR is coupled with records, pharmacy and laboratory modules. Its enables management of clinical schedules and appointments, triaging and queue management. In consultation , medical personnel can save clinical notes for patient files and retrieve them easily."
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9e2902ae869f2034538a19739dfe83b18fc797a4b070710909fe920f0960c62?placeholderIfAbsent=true&apiKey=51690fefe889414fb28463c4962255b7",
    title: "SINFA Uganda",
    client: "John Paul Huruma Hospital",
    description: "An adaptation from the Sokopepe Project to Uganda’s OctionX project. The Ugandan adaptation included online auctions, client rating and order delivery in the online market.The portal has been customized for Ugandan business models and a new user interface design for the SINFA Uganda Non-profit Organization. The octionX platform was built to exact specification requested by the client and we continue to provide support and upgrades for the project whenever necessary. A version 3.0.2 upgrade is already under development on:",
    link: "https://kenya.cure.org/"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9cf11dc02d41926c68b7332d83c33705d60787d0874014aed4a2e9eb4f361b35?placeholderIfAbsent=true&apiKey=51690fefe889414fb28463c4962255b7",
    title: "Vision Smart School ERP (Modern and Complete School Automation Software)",
    client: "Wholesale, Retailers & Hotels",
    description: "Suites to almost every school or educational institution from student admission to student leaving, from fees collection to exam results. It includes 25+ modules with 8 inbuilt users (Super Admin, Admin,Accountant, Teacher, Receptionist, Librarian, Parent and Student) panel.:",
     link: "http://microvision.co.ke/smart_school_src/site/login"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9497d46f1a897691be376454efea644289780e8bdc5a640794ea4c3da67d722?placeholderIfAbsent=true&apiKey=51690fefe889414fb28463c4962255b7",
    title: "CliniQ EMR",
    client: "Skymed Clinics",
    description: "An electronic health records management system CliniQ EMR is coupled with records, pharmacy and laboratory modules. Its enables management of clinical schedules and appointments, triaging and queue management. In consultation , medical personnel can save clinical notes for patient files and retrieve them easily."
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9e2902ae869f2034538a19739dfe83b18fc797a4b070710909fe920f0960c62?placeholderIfAbsent=true&apiKey=51690fefe889414fb28463c4962255b7",
    title: "Vision Payroll Web ERP",
    client: "John Paul Huruma Hospital",
    description: "A payroll and accounting software currently at V3.0 the Vision Payroll WebERP is designed for Kenya and countries with similar Tax Setup. though it can be easily customised to suite any particular need.",
    link: "https://kenya.cure.org/"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9cf11dc02d41926c68b7332d83c33705d60787d0874014aed4a2e9eb4f361b35?placeholderIfAbsent=true&apiKey=51690fefe889414fb28463c4962255b7",
    title: "Single Point Of Sale Sytem",
    client: "Wholesale, Retailers & Hotels",
    description: "Our conventional point of sale system with online support and mobile devices compatibility, can be customized to any business setup. Signal POS has the ability to conduct VAT Computation with E-signer integration, mobile money payments and tracking."
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9497d46f1a897691be376454efea644289780e8bdc5a640794ea4c3da67d722?placeholderIfAbsent=true&apiKey=51690fefe889414fb28463c4962255b7",
    title: "CliniQ EMR",
    client: "Skymed Clinics",
    description: "An electronic health records management system CliniQ EMR is coupled with records, pharmacy and laboratory modules. Its enables management of clinical schedules and appointments, triaging and queue management. In consultation , medical personnel can save clinical notes for patient files and retrieve them easily."
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9e2902ae869f2034538a19739dfe83b18fc797a4b070710909fe920f0960c62?placeholderIfAbsent=true&apiKey=51690fefe889414fb28463c4962255b7",
    title: "Vision Payroll Web ERP",
    client: "John Paul Huruma Hospital",
    description: "A payroll and accounting software currently at V3.0 the Vision Payroll WebERP is designed for Kenya and countries with similar Tax Setup. though it can be easily customised to suite any particular need.",
    link: "https://kenya.cure.org/"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9cf11dc02d41926c68b7332d83c33705d60787d0874014aed4a2e9eb4f361b35?placeholderIfAbsent=true&apiKey=51690fefe889414fb28463c4962255b7",
    title: "Single Point Of Sale Sytem",
    client: "Wholesale, Retailers & Hotels",
    description: "Our conventional point of sale system with online support and mobile devices compatibility, can be customized to any business setup. Signal POS has the ability to conduct VAT Computation with E-signer integration, mobile money payments and tracking."
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9497d46f1a897691be376454efea644289780e8bdc5a640794ea4c3da67d722?placeholderIfAbsent=true&apiKey=51690fefe889414fb28463c4962255b7",
    title: "CliniQ EMR",
    client: "Skymed Clinics",
    description: "An electronic health records management system CliniQ EMR is coupled with records, pharmacy and laboratory modules. Its enables management of clinical schedules and appointments, triaging and queue management. In consultation , medical personnel can save clinical notes for patient files and retrieve them easily."
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/f9e2902ae869f2034538a19739dfe83b18fc797a4b070710909fe920f0960c62?placeholderIfAbsent=true&apiKey=51690fefe889414fb28463c4962255b7",
    title: "Vision Payroll Web ERP",
    client: "John Paul Huruma Hospital",
    description: "A payroll and accounting software currently at V3.0 the Vision Payroll WebERP is designed for Kenya and countries with similar Tax Setup. though it can be easily customised to suite any particular need.",
    link: "https://kenya.cure.org/"
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9cf11dc02d41926c68b7332d83c33705d60787d0874014aed4a2e9eb4f361b35?placeholderIfAbsent=true&apiKey=51690fefe889414fb28463c4962255b7",
    title: "Single Point Of Sale Sytem",
    client: "Wholesale, Retailers & Hotels",
    description: "Our conventional point of sale system with online support and mobile devices compatibility, can be customized to any business setup. Signal POS has the ability to conduct VAT Computation with E-signer integration, mobile money payments and tracking."
  },
  {
    image: "https://cdn.builder.io/api/v1/image/assets/TEMP/c9497d46f1a897691be376454efea644289780e8bdc5a640794ea4c3da67d722?placeholderIfAbsent=true&apiKey=51690fefe889414fb28463c4962255b7",
    title: "CliniQ EMR",
    client: "Skymed Clinics",
    description: "An electronic health records management system CliniQ EMR is coupled with records, pharmacy and laboratory modules. Its enables management of clinical schedules and appointments, triaging and queue management. In consultation , medical personnel can save clinical notes for patient files and retrieve them easily."
  },
  // Add more items as needed
];

const ITEMS_PER_ROW = 2;
const ROWS_PER_PAGE = 3;
const ITEMS_PER_PAGE = ITEMS_PER_ROW * ROWS_PER_PAGE;

const PortfolioSection: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalItems = portfolioData.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const paginatedData = portfolioData.slice(startIndex, endIndex);

  return (
    <section style={{ padding: '24px' }}>
      <header style={{ textAlign: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '32px', fontWeight: '500' }}>Our Portfolio</h1>
      </header>
      <main>
        <Row gutter={16}>
          {paginatedData.map((item, index) => (
            <Col key={index} span={12}>
              <PortfolioItem {...item} />
            </Col>
          ))}
        </Row>
      </main>
      <footer style={{ textAlign: 'center', marginTop: '24px' }}>
        <Pagination
          current={currentPage}
          pageSize={ITEMS_PER_PAGE}
          total={totalItems}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </footer>
    </section>
  );
};

export default PortfolioSection;
