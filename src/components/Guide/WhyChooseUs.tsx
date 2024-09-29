// import React, { useState } from 'react';
// import { Modal, Card, Typography, Row, Col } from 'antd';
// import ProCard from '@ant-design/pro-card';
// import styles from './WhyChooseUs.less';

// const { Title, Text } = Typography;

// const items = [
//   {
//     title: 'Global Research',
//     description: 'Lorem ipsum dolor sit amet conirtur. Blandit sed in non suspendisse mi. Tristique vitae aliquam donec non ullamcorper aliquam.',
//     // imgSrc: require('../../assets/WhatsApp Image 2024-07-07 at 18.53.43.jpeg')
//   },
//   {
//     title: 'Creative Ideas',
//     description: 'Lorem ipsum dolor sit amet contetur. Blandit sed in non suspendisse mi. Tristique vitae aliquam donec non ullamcorper aliquam.',
//     // imgSrc: require('../../assets/WhatsApp Image 2024-07-07 at 18.53.44 (1).jpeg')
//   },
//   {
//     title: 'Pro Management',
//     description: 'Lorem ipsum dolor sit amet conseur. Blandit sed in non suspendisse mi. Tristique vitae aliquam donec non ullamcorper aliquam.',
//     // imgSrc: require('../../assets/WhatsApp Image 2024-07-07 at 18.53.45 (1).jpeg')
//   }
// ];

// const WhyChooseUs: React.FC = () => {
//   const [visible, setVisible] = useState(false);
//   const [selectedItem, setSelectedItem] = useState(null);

//   const showModal = (item) => {
//     setSelectedItem(item);
//     setVisible(true);
//   };

//   const handleOk = () => {
//     setVisible(false);
//   };

//   const handleCancel = () => {
//     setVisible(false);
//   };

//   return (
//     <ProCard title="Why Choose Us?" className={styles.proCard}>
//       <Row gutter={[16, 16]} className={styles.itemsContainer}>
//         {items.map((item, index) => (
//           <Col key={index} span={8}>
//             <Card
//               hoverable
//               className={styles.card}
//               cover={<img src={item.imgSrc} alt={item.title} className={styles.image} />}
//               onClick={() => showModal(item)}
//             >
//               <Card.Meta
//                 title={<Title level={4} className={styles.title}>{item.title}</Title>}
//                 description={<Text className={styles.description}>{item.description}</Text>}
//               />
//             </Card>
//           </Col>
//         ))}
//       </Row>
//       <Modal visible={visible} onOk={handleOk} onCancel={handleCancel} footer={null}>
//         {selectedItem && (
//           <div className={styles.modalContent}>
//             <img src={selectedItem.imgSrc} alt={selectedItem.title} className={styles.modalImage} />
//             <Title level={3} className={styles.modalTitle}>{selectedItem.title}</Title>
//             <Text className={styles.modalDescription}>{selectedItem.description}</Text>
//           </div>
//         )}
//       </Modal>
//     </ProCard>
//   );
// };

// export default WhyChooseUs;
import React, { useState } from 'react';
import { Modal, Card, Typography, Row, Col } from 'antd';
import ProCard from '@ant-design/pro-card';
import styles from './WhyChooseUs.less';

const { Title, Text } = Typography;

const items = [
  {
    title: 'Legal Form of Business',
    description: [
      'Microvision Innovations Ltd, headquartered in Nairobi, specializes in:',
      '• Data visualization & Analytics',
      '• ERP (Enterprise Resource Planning)',
      '• CRM (Customer Relationship Management)',
      '• Web technologies',
      '• Mobile applications technologies',
      '• System integration'
    ],
  },
  {
    title: 'References & Certification',
    description: [
      '• In 2014, defined specifications for Bulk PRSP™ and Bulk SMS Services.',
      '• In 2013, certified by University of Texas Medical Branch for a TB Treatment Quality Assessment Tool.',
      '• In 2010, received an award from AIC Kijabe Hospital Ethics and Managing board for an EMR for HIV care and research work.'
    ],
  },
  {
    title: 'Standard Industrial and Classification Codes',
    description: [
      'Primary SIC/NIAC Codes:',
      '• 7371541511: Software analysis and design services',
      '• 7373: Systems integration design consulting services',
      'Secondary SIC/NIAC Codes:',
      '• 7379541519: Other computer related services',
      '• 7376541513: Facility management and operations services, computer systems and data processing'
    ],
  }
];

const WhyChooseUs: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const showModal = (item) => {
    setSelectedItem(item);
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <ProCard title="Why Choose Us?" className={styles.proCard}>
      <Row gutter={[16, 16]} className={styles.itemsContainer}>
        {items.map((item, index) => (
          <Col key={index} span={8}>
            <Card
              hoverable
              className={styles.card}
              onClick={() => showModal(item)}
            >
              <Card.Meta
                title={<Title level={4} className={styles.title}>{item.title}</Title>}
                description={
                  <ul className={styles.descriptionList}>
                    {item.description.map((desc, i) => (
                      <li key={i} className={styles.descriptionItem}>{desc}</li>
                    ))}
                  </ul>
                }
              />
            </Card>
          </Col>
        ))}
      </Row>
      <Modal visible={visible} onOk={handleOk} onCancel={handleCancel} footer={null}>
        {selectedItem && (
          <div className={styles.modalContent}>
            <Title level={3} className={styles.modalTitle}>{selectedItem.title}</Title>
            <ul className={styles.modalDescriptionList}>
              {selectedItem.description.map((desc, i) => (
                <li key={i} className={styles.modalDescriptionItem}>{desc}</li>
              ))}
            </ul>
          </div>
        )}
      </Modal>
    </ProCard>
  );
};

export default WhyChooseUs;
