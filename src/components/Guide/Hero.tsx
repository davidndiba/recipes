import React from 'react';
import { Link } from 'umi';
import { Button } from 'antd';
import heroImage from '@/assets/hero.png';
import customer1 from '@/assets/customers/customer-1.jpg';
import customer2 from '@/assets/customers/customer-2.jpg';
import customer3 from '@/assets/customers/customer-3.jpg';
import customer4 from '@/assets/customers/customer-4.jpg';
import customer5 from '@/assets/customers/customer-5.jpg';
import customer6 from '@/assets/customers/customer-6.jpg';
import styles from './Hero.less'; 

const Hero: React.FC = () => {
  return (
    <div className={styles.header}>
      <section className={styles.hero}>
        <div className={styles['hero-left']}>
          <h1 className={styles['hero-title']}>
            Cook, Share, Enjoy: Embrace the Joy of Cooking
          </h1>
          <p className={styles['hero-text']}>
            We Present Our Treasured Collection of Recipes From Across
            Generations and Continents with a hope to Ignite Your Imagination
            and Infuse Your Kitchen with the Timeless Magic of Cooking
          </p>
          <Link to="/login">
            <Button type="primary" className={styles['recipe-btn']}>
              Our Recipes &rarr;
            </Button>
          </Link>
          <div className={styles['hero-customers']}>
            <div className={styles['customers-imgs']}>
              <img src={customer1} alt="Customer" className={styles['customer-img']} />
              <img src={customer2} alt="Customer" className={styles['customer-img']} />
              <img src={customer3} alt="Customer" className={styles['customer-img']} />
              <img src={customer4} alt="Customer" className={styles['customer-img']} />
              <img src={customer5} alt="Customer" className={styles['customer-img']} />
              <img src={customer6} alt="Customer" className={styles['customer-img']} />
            </div>
            <p className={styles['customers-text']}>
              <span className={styles['customers-number']}>1000+</span> Happy Customers!
            </p>
          </div>
        </div>
        <div>
          <img src={heroImage} alt="Hero" className={styles['hero-img']} />
        </div>
      </section>
    </div>
  );
};

export default Hero;
