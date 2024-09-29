// import React from 'react';
// import { Layout, Row, Col, Typography, Divider, Space, Image } from 'antd';
// import { PhoneOutlined, MailOutlined } from '@ant-design/icons';
// import styles from './Footer.less';

// const { Footer } = Layout;
// const { Title, Text } = Typography;

// interface FooterProps {
//   contactInfo: {
//     address: string[];
//     phone: string[];
//     email: string;
//   };
//   socialIcons: string[];
// }

// const FooterComponent: React.FC = () => {
//   return (
//     <Footer className={styles.footer}>
//       <div className={styles.container}>
//         <Title level={3} className={styles.title}>GET IN TOUCH WITH US!</Title>
//         <Row gutter={[16, 16]}>
//           <Col span={6}>
//             <div className={styles.section}>
//               <Title level={4} className={styles.subTitle}>Services</Title>
//               <Text className={styles.text}>Web Applications</Text>
//               <Text className={styles.text}>Enterprise portals</Text>
//               <Text className={styles.text}>Mobile applications</Text>
//               <Text className={styles.text}>Migration/Integration</Text>
//               <Text className={styles.text}>Business Intelligence</Text>
//               <Text className={styles.text}>System Support</Text>
//             </div>
//           </Col>
//           <Col span={6}>
//             <div className={styles.section}>
//               <Title level={4} className={styles.subTitle}>Menu</Title>
//               <Text className={styles.text}>Home</Text>
//               <Text className={styles.text}>About</Text>
//               <Text className={styles.text}>Services</Text>
//               <Text className={styles.text}>Portfolio</Text>
//               <Text className={styles.text}>FAQS</Text>
//               <Text className={styles.text}>Contacts</Text>
//             </div>
//           </Col>
//           <Col span={6}>
//             <div className={styles.section}>
//               <Title level={4} className={styles.subTitle}>Contact</Title>
//               <div className={styles.contactInfo}>
//                 <PhoneOutlined className={styles.icon} />
//                 <Text className={styles.text}>+254 724 858 611</Text>
//                 <Text className={styles.text}>+254 738 055 312</Text>
//               </div>
//               <div className={styles.contactInfo}>
//                 <MailOutlined className={styles.icon} />
//                 <Text className={styles.text}>info@microvision.co.ke</Text>
//               </div>
//               <Text className={styles.text}>1st Floor Hill Gate Arcade, Limuru-Kiambu</Text>
//             </div>
//           </Col>
//           <Col span={6}>
//             <div className={styles.section}>
//               <Title level={4} className={styles.subTitle}>Social Links</Title>
//               <Text className={styles.text}>Facebook</Text>
//               <Text className={styles.text}>Twitter</Text>
//               <Text className={styles.text}>LinkedIn</Text>
//             </div>
//           </Col>
//         </Row>
//         <Row className={styles.bottomRow}>
//           <Col span={12}>
//             <Text className={styles.text}>Powered by Microvision. All Rights Reserved</Text>
//           </Col>
//           <Col span={12} className={styles.bottomLinks}>
//             <Text className={styles.text}>Privacy Policy</Text>
//             <Text className={styles.text}>Terms Of Use</Text>
//           </Col>
//         </Row>
//       </div>
//     </Footer>
//   );
// };

// export default FooterComponent;
import React from 'react';
import { Layout, Row, Col, Typography, Divider, Space, Image } from 'antd';
import { PhoneOutlined, MailOutlined } from '@ant-design/icons';
import styles from './Footer.less';
import footerLogo from '../../assets/Microvision/MicrovisonLogo.png'; // Import the image from the assets folder

// const { Footer } = Layout;
// const { Title, Text } = Typography;

// const FooterComponent: React.FC = () => {
//   return (
//     <Footer className={styles.footer}>
//       <div className={styles.container}>
//         <Row gutter={[16, 16]}>
//           <Col span={6}>
//             <div className={styles.logoSection}>
//               <Image src={footerLogo} preview={false} className={styles.logo} />
//               <Text className={styles.descriptionText}>
//                 We provide tailor-made solutions to enhance your business efficiency. Contact us for more information!
//               </Text>
//             </div>
//           </Col>
//           <Col span={6}>
//             <div className={styles.section}>
//               <Title level={4} className={styles.subTitle}>Menu</Title>
//               <a href="/" className={styles.text}>Home</a>
//               <a href="/about" className={styles.text}>About</a>
//               <a href="/services" className={styles.text}>Services</a>
//               <a href="/portfolio" className={styles.text}>Portfolio</a>
//               <a href="/faqs" className={styles.text}>FAQS</a>
//               <a href="/contacts" className={styles.text}>Contacts</a>
//             </div>
//           </Col>
//           <Col span={6}>
//             <div className={styles.section}>
//               <Title level={4} className={styles.subTitle}>FAQs</Title>
//               <a href="/faqs" className={styles.text}>General Questions</a>
//               <a href="/faqs#shipping" className={styles.text}>Shipping Info</a>
//               <a href="/faqs#returns" className={styles.text}>Returns Policy</a>
//               <a href="/faqs#payment" className={styles.text}>Payment Methods</a>
//             </div>
//           </Col>
//           <Col span={6}>
//             <div className={styles.section}>
//               <Title level={4} className={styles.subTitle}>Contact</Title>
//               <div className={styles.contactInfo}>
//                 <PhoneOutlined className={styles.icon} />
//                 <Text className={styles.text}>+254 724 858 611</Text>
//                 <Text className={styles.text}>+254 738 055 312</Text>
//               </div>
//               <div className={styles.contactInfo}>
//                 <MailOutlined className={styles.icon} />
//                 <Text className={styles.text}>info@microvision.co.ke</Text>
//               </div>
//               <Text className={styles.text}>1st Floor Hill Gate Arcade, Limuru-Kiambu</Text>
//             </div>
//           </Col>
//         </Row>
//         <Row className={styles.bottomRow}>
//           <Col span={12}>
//             <Text className={styles.text}>Powered by Microvision. All Rights Reserved</Text>
//           </Col>
//           <Col span={12} className={styles.bottomLinks}>
//             <a href="/privacy-policy" className={styles.text}>Privacy Policy</a>
//             <a href="/terms-of-use" className={styles.text}>Terms Of Use</a>
//           </Col>
//         </Row>
//       </div>
//     </Footer>
//   );
// };

// export default FooterComponent;
const { Footer } = Layout;
const { Title, Text } = Typography;

const FooterComponent: React.FC = () => {
  return (
    <Footer className={styles.footer}>
      <div className={styles.container}>
        <Row gutter={[16, 16]}>
          <Col span={6}>
            <div className={styles.logoSection}>
              <Image src={footerLogo} preview={false} className={styles.logo} />
              <Text className={styles.descriptionText}>
                We provide tailor-made solutions to enhance your business efficiency. Contact us for more information!
              </Text>
            </div>
          </Col>
          <Col span={6}>
            <div className={styles.section}>
              <Title level={4} className={styles.subTitle}>Menu</Title>
              <a href="/" className={styles.text}>Home</a>
              <a href="/about" className={styles.text}>About</a>
              <a href="/services" className={styles.text}>Services</a>
              <a href="/portfolio" className={styles.text}>Portfolio</a>
              <a href="/faqs" className={styles.text}>FAQS</a>
              <a href="/contacts" className={styles.text}>Contacts</a>
            </div>
          </Col>
          <Col span={6}>
            <div className={styles.section}>
              <Title level={4} className={styles.subTitle}>FAQs</Title>
              <a href="/faqs" className={styles.text}>General Questions</a>
              <a href="/faqs#shipping" className={styles.text}>Shipping Info</a>
              <a href="/faqs#returns" className={styles.text}>Returns Policy</a>
              <a href="/faqs#payment" className={styles.text}>Payment Methods</a>
            </div>
          </Col>
          <Col span={6}>
            <div className={styles.section}>
              <Title level={4} className={styles.subTitle}>Contact</Title>
              <div className={styles.contactInfo}>
                <PhoneOutlined className={styles.icon} />
                <Text className={styles.text}>+254 724 858 611</Text>
                <Text className={styles.text}>+254 738 055 312</Text>
              </div>
              <div className={styles.contactInfo}>
                <MailOutlined className={styles.icon} />
                <Text className={styles.text}>info@microvision.co.ke</Text>
              </div>
              <Text className={styles.text}>1st Floor Hill Gate Arcade, Limuru-Kiambu</Text>
            </div>
          </Col>
        </Row>
         {/* Social Media Links Section */}
         <div className={styles.socialMedia}>
          <Title level={4} className={styles.subTitle}>Follow Us</Title>
          <div className={styles.socialIcons}>
            <a href="https://www.facebook.com" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
              <Image src="/path/to/facebook-icon.png" preview={false} className={styles.iconImage} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
              <Image src="/path/to/instagram-icon.png" preview={false} className={styles.iconImage} alt="Instagram" />
            </a>
            <a href="https://www.linkedin.com" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
              <Image src="/path/to/linkedin-icon.png" preview={false} className={styles.iconImage} alt="LinkedIn" />
            </a>
            <a href="https://www.twitter.com" className={styles.socialIcon} target="_blank" rel="noopener noreferrer">
              <Image src="/path/to/twitter-icon.png" preview={false} className={styles.iconImage} alt="Twitter" />
            </a>
          </div>
        </div>  
        <Row className={styles.bottomRow}>
          <Col span={12}>
            <Text className={styles.text}>Powered by Microvision. All Rights Reserved</Text>
          </Col>
          <Col span={12} className={styles.bottomLinks}>
            <a href="/privacy-policy" className={styles.text}>Privacy Policy</a>
            <a href="/terms-of-use" className={styles.text}>Terms Of Use</a>
          </Col>
        </Row>
        
      </div>
    </Footer>
  );
};

export default FooterComponent;