// import React from 'react';
// import { Button } from 'antd';
// import './PortfolioHome.less'; // Import custom CSS for additional styling

// interface BackgroundSectionProps {
//   backgroundImage: string;
// }

// const BackgroundSection: React.FC<BackgroundSectionProps> = ({ backgroundImage }) => {
//   return (
//     <section className="background-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
//       <div className="content">
//         <h1 className="text">We Tailor Customized Software Solutions For Our Clients.</h1>
//         <Button className="explore-button" type="default">Explore</Button>
//       </div>
//     </section>
//   );
// };

// export default BackgroundSection;
import React from 'react';
import { Button } from 'antd';
import './PortfolioHome.less'; // Import custom CSS for additional styling
import backgroundImage from '../../assets/IMG-20240807-WA0017.jpg'; // Adjust the path according to your project structure

const BackgroundSection: React.FC = () => {
  return (
    <section className="background-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content">
        <h1 className="text">We Tailor Customized Software Solutions For Our Clients.</h1>
        <Button className="explore-button" type="default">Explore</Button>
      </div>
    </section>
  );
};

export default BackgroundSection;
