import React from 'react';
import { Image } from 'antd';
import gallery1 from '@/assets/gallery/gallery-1.jpg';
import gallery2 from '@/assets/gallery/gallery-2.jpg';
import gallery3 from '@/assets/gallery/gallery-3.jpg';
import gallery4 from '@/assets/gallery/gallery-4.jpg';
import gallery5 from '@/assets/gallery/gallery-5.jpg';
import gallery6 from '@/assets/gallery/gallery-6.jpg';
import gallery7 from '@/assets/gallery/gallery-7.jpg';
import gallery8 from '@/assets/gallery/gallery-8.jpg';
import gallery9 from '@/assets/gallery/gallery-9.jpg';
import gallery10 from '@/assets/gallery/gallery-10.jpg';
import gallery11 from '@/assets/gallery/gallery-11.jpg';
import gallery12 from '@/assets/gallery/gallery-12.jpg';
import styles from './Gallery.less'; 

const galleryImages = [
  gallery1, gallery2, gallery3, gallery4, gallery5,
  gallery6, gallery7, gallery8, gallery9, gallery10,
  gallery11, gallery12
];

const Gallery: React.FC = () => {
  return (
    <div className={styles.gallery}>
      {galleryImages.map((image, index) => (
        <figure key={index} className={styles['gallery-item']}>
          <Image src={image} alt={`Gallery ${index + 1}`} />
        </figure>
      ))}
    </div>
  );
};

export default Gallery;
