import React from 'react';
import { Link } from 'umi';
import logo11 from '../../assets/Microvision/MicrovisonLogo.png';
import styles from './Logo.less';

interface LogoProps {}

const Logo: React.FC<LogoProps> = () => {
  return (
    <Link to="/" className={styles.logo}>
      <img src={logo11} alt="site-logo" className={styles['logo-img']} />
    </Link>
  );
};

export default Logo;
