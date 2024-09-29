import React from 'react';
import { Carousel, Card } from 'antd';
import styles from './Reviews.less';

// Import images from your assets folder
import img1 from '../../assets/IMG-20240807-WA0019.jpg'; 
import img2 from '../../assets/customers/customer-2.jpg';
import img3 from '../../assets/customers/customer-3.jpg';
import img4 from '../../assets/customers/customer-4.jpg';
import img5 from '../../assets/customers/customer-5.jpg';
import img6 from '../../assets/customers/customer-6.jpg';

const testimonials = [
  {
    imgSrc: img1,
    title: 'John Doe',
    testimonial: 'Great work! Highly satisfied with the services.',
  },
  {
    imgSrc: img2,
    title: 'Jane Smith',
    testimonial: 'Professional and timely delivery. Highly recommended!',
  },
  {
    imgSrc: img3,
    title: 'Alice Johnson',
    testimonial: 'Amazing experience! Will definitely work with them again.',
  },
  {
    imgSrc: img4,
    title: 'Michael Brown',
    testimonial: 'Top-notch quality and attention to detail. Excellent!',
  },
  {
    imgSrc: img5,
    title: 'Emily Davis',
    testimonial: 'Outstanding work! Very happy with the results.',
  },
  {
    imgSrc: img6,
    title: 'David Wilson',
    testimonial: 'Great collaboration and results. Fantastic team!',
  },
];

const TestimonialCarousel = () => {
  return (
    <div className={styles.container}>
      <Carousel
        dots={true}
        slidesToShow={3}
        slidesToScroll={1}
        autoplay
        autoplaySpeed={20000} // 20 seconds before moving to the next slide
        speed={1000} // Speed of the transition between slides
      >
        {testimonials.map((testimonial, index) => (
          <Card key={index} className={styles.card}>
            <div className={styles.imageWrapper}>
              <img
                src={testimonial.imgSrc}
                alt={testimonial.title}
                className={styles.roundedImage}
              />
            </div>
            <h3 className={styles.title}>{testimonial.title}</h3>
            <p className={styles.testimonial}>{testimonial.testimonial}</p>
          </Card>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
