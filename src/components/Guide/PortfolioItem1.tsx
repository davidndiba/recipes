// import React from 'react';

// interface PortfolioItemProps {
//   image: string;
//   title: string;
//   client: string;
//   description: string;
//   link?: string;
// }

// const PortfolioItem: React.FC<PortfolioItemProps> = ({ image, title, client, description, link }) => {
//   return (
//     <article className="flex flex-col w-6/12 max-md:w-full">
//       <div className="flex flex-col items-start p-6 border-2 border-cyan-800 bg-stone-900 rounded-lg max-md:p-4 max-md:mt-10">
//         <img loading="lazy" src={image} alt={title} className="object-contain max-w-full aspect-[1.9] w-[262px]" />
//         <h2 className="mt-4 text-2xl text-cyan-800 max-md:text-xl">{title}</h2>
//         <h3 className="text-xl text-lime-700 max-md:text-lg">Client: {client}</h3>
//         <p className="text-lg text-black max-md:text-base">
//           {description}
//           {link && (
//             <>
//               {" "}
//               <a href={link} className="font-bold underline" target="_blank" rel="noopener noreferrer">
//                 View
//               </a>
//             </>
//           )}
//         </p>
//       </div>
//     </article>
//   );
// };

// export default PortfolioItem;
import React from 'react';
import { Card } from 'antd';

interface PortfolioItemProps {
  image: string;
  title: string;
  client: string;
  description: string;
  link?: string;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ image, title, client, description, link }) => {
  return (
    <Card
      cover={<img alt={title} src={image} style={{ objectFit: 'cover', height: '200px' }} />}
      title={title}
      extra={link ? <a href={link} target="_blank" rel="noopener noreferrer">View</a> : null}
    >
      <p><strong>Client:</strong> {client}</p>
      <p>{description}</p>
    </Card>
  );
};

export default PortfolioItem;
