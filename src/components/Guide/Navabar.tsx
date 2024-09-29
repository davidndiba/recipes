import React from 'react';
import { Menu } from 'antd';
import { Link } from 'umi';
import { useMediaQuery } from 'react-responsive';
import styles from './NavbarStyles.less';

const Navbar: React.FC = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={require('../../assets/Microvision/MicrovisonLogo.png')} alt="Company Logo" className={styles.logo} />
      </div>
      <Menu
        mode={isMobile ? 'vertical' : 'horizontal'}
        className={styles.menu}
        selectable={false}
      >
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">About</Link>
        </Menu.Item>
        <Menu.Item key="services">
          <Link to="/services">Services</Link>
        </Menu.Item>
        <Menu.Item key="portfolio">
          <Link to="/portfolio">Portfolio</Link>
        </Menu.Item>
        <Menu.Item key="contacts">
          <Link to="/contact">Contact</Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Navbar;
