// import React from 'react';
// import { Link, useLocation } from 'umi';
// import { Menu } from 'antd';
// import Logo from './Logo';
// import
// const Navbar: React.FC = () => {
//   const location = useLocation();

//   const menuItems = [
//     { path: '/about', label: 'About' },
//     { path: '/rate-us', label: 'Rate us' },
//     { path: '/contact', label: 'Contact' },
//     { path: '/login', label: 'Login', className: 'login' },
//   ];

//   return (
//     <div>
//       <Logo />
//       <Menu
//         mode="horizontal"
//         selectedKeys={[location.pathname]}
//         className="nav-links"
//       >
//         {menuItems.map((item) => (
//           <Menu.Item key={item.path} className={item.className}>
//             <Link to={item.path}>{item.label}</Link>
//           </Menu.Item>
//         ))}
//       </Menu>
//     </div>
//   );
// };

// export default Navbar;
// Navbar.tsx
import React from 'react';
import { Link, useLocation } from 'umi';
import { Menu } from 'antd';
import Logo from './Logo';
import './Guide.less';

const Navbar: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/about', label: 'About' },
    { path: '/rate-us', label: 'Rate us' },
    { path: '/contact', label: 'Contact' },
    { path: '/login', label: 'Login', className: 'login' },
  ];

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <Logo />
      </div>
      <div className="menu-container">
        <Menu mode="horizontal" selectedKeys={[location.pathname]} className="nav-links">
          {menuItems.map((item) => (
            <Menu.Item key={item.path} className={item.className}>
              <Link to={item.path}>{item.label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
