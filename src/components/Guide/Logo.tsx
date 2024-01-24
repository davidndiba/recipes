import React from 'react';
import { Link } from 'umi';
import logo from '../../assets/favicon.png';
import styles from './Logo.less'; 

interface LogoProps {}
const Logo: React.FC<LogoProps> = () => {
  return (
    <Link to="/" className={styles.logo}>
      <img src={logo} alt="site-logo" className={`${styles['logo-img']}`} />
      <h1>
        Recipes<span className={`${styles.tag}`}>Corn</span>
      </h1>
    </Link>
  );
};

export default Logo;
