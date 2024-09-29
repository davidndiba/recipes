import React from 'react';
import { Button } from 'antd';
import styles from './Contact.less';

const ContactSupport = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Have Any Questions?</h1>
        <p className={styles.subtitle}>Contact Our Online Technical Support.</p>
        <Button className={styles.contactButton}>Contact</Button>
      </div>
    </div>
  );
};

export default ContactSupport;
