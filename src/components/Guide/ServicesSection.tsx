// import React from 'react';
// import { Row, Col, Typography } from 'antd';
// import ServiceCard from './ServiceCard';
// import styles from './ServicesSection.less'

// const { Title } = Typography;

// const servicesData = [
//   {
//     title: "Web Applications",
//     description: "We offer best practices in web development to ensure reliable and successful deliverables. We pay maximum attention to solution architecture.",
//   },
//   {
//     title: "Migration/Integration",
//     description: "Count on our certified technicians to perform a wide range of services from software imaging and hardware configuration to complex builds of rack servers and networks.",
//   },
//   {
//     title: "Enterprise Portals",
//     description: "We provide options to deploy solutions on shared and hosted models as a service leveraging Cloud Computing technology. Enabling integration with mobile applications.",
//   },
//   {
//     title: "System Support",
//     description: "Outsourced IT staffing, whether you're working on a special project and need some expertise or your company needs enterprise systems support, we are ready when you need us.",
//   },
//   {
//     title: "Mobile Applications",
//     description: "Mobile services provided by Microvision Software Technologies are designed to bring the company's mobile technology expertise to customers.",
//   },
//   {
//     title: "Business Intelligence",
//     description: "Convert raw data into meaningful, reliable, and consistent insights. We help our customers stay on top of the information while implementing strategies or evaluating business performance.",
//   }
// ];

// const ServicesSection: React.FC = () => {
//   return (
//     <section className="services-section">
//       <Title level={2} className="services-title">
//         Our Services
//       </Title>
//       <Row gutter={[16, 16]} className="services-row">
//         {servicesData.map((service, index) => (
//           <Col xs={24} md={8} key={index}>
//             <ServiceCard title={service.title} description={service.description} />
//           </Col>
//         ))}
//       </Row>
//     </section>
//   );
// };

// export default ServicesSection;
import React from 'react';
import { Row, Col, Typography } from 'antd';
import ServiceCard from './ServiceCard';
import styles from './ServicesSection.less'; 

const { Title } = Typography;

const servicesData = [
  {
    title: "Web Applications",
    description: "We offer best practices in web development to ensure reliable and successful deliverables. We pay maximum attention to solution architecture.",
  },
  {
    title: "Migration/Integration",
    description: "Count on our certified technicians to perform a wide range of services from software imaging and hardware configuration to complex builds of rack servers and networks.",
  },
  {
    title: "Enterprise Portals",
    description: "We provide options to deploy solutions on shared and hosted models as a service leveraging Cloud Computing technology. Enabling integration with mobile applications.",
  },
  {
    title: "System Support",
    description: "Outsourced IT staffing, whether you're working on a special project and need some expertise or your company needs enterprise systems support, we are ready when you need us.",
  },
  {
    title: "Mobile Applications",
    description: "Mobile services provided by Microvision Software Technologies are designed to bring the company's mobile technology expertise to customers.",
  },
  {
    title: "Business Intelligence",
    description: "Convert raw data into meaningful, reliable, and consistent insights. We help our customers stay on top of the information while implementing strategies or evaluating business performance.",
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className={styles.servicesSection}>  {/* Applying styles from CSS module */}
      <Title level={2} className={styles.servicesTitle}>
        Our Services
      </Title>
      <Row gutter={[16, 16]} className={styles.servicesRow}>
        {servicesData.map((service, index) => (
          <Col xs={24} md={8} key={index}>
            <ServiceCard title={service.title} description={service.description} />
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default ServicesSection;
