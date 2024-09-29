import React from 'react';
import { Row, Col, Card } from 'antd';
import styles from './company1logosstyles.less';
import image1 from '../../assets/Microvision/CCNA CERTIFICATE.png';
import image2 from '../../assets/Microvision/Java-Logo.png';
import image3 from '../../assets/Microvision/MICROSOFT.jpg';
import image4 from '../../assets/Microvision/PHPMYSQL.png';
import image5 from '../../assets/Microvision/SAPBUSINESSOBJEST.png';
import image6 from '../../assets/Microvision/STATA.png';
// import image7 from '../../assets/Microvision/SPSS.svg';

const imageData = [
  { src: image1, aspectRatio: "1.6", width: "200px" },
  { src: image2, aspectRatio: "1.38", width: "200px" },
  { src: image3, aspectRatio: "1.79", width: "200px" },
  { src: image4, aspectRatio: "3.06", width: "300px", containerWidth: "360px" },
  { src: image5, aspectRatio: "1.28", width: "200px" },
  { src: image6, aspectRatio: "1.28", width: "200px" },
  // { src: image7, aspectRatio: "1.28", width: "200px" }
//   { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/da39f770c4ffc515a6e98f9aec65d580e35d62255dfd3468f4366c3492af1382?", aspectRatio: "3.45", width: "200px", isStretched: true }
];

const ImageGallery = () => {
  return (
    <div className={styles.galleryContainer}>
      <Row gutter={[16, 16]} justify="center">
        {imageData.map((image, index) => (
          <Col key={index} xs={24} sm={12} md={8} lg={6} xl={4}>
            <Card
              hoverable
              cover={<img src={image.src} alt={`Gallery Image ${index + 1}`} className={styles.galleryImage} />}
              className={styles.galleryCard}
            >
              {/* Optional: You can add a title or description inside the Card */}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ImageGallery;
