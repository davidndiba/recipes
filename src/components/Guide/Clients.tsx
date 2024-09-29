import React from 'react';
import { Row, Col, Card, Typography } from 'antd';
import './MajorClients.less';

const { Title, Paragraph } = Typography;

const clientsByIndustry = [
  {
    industry: "Transport",
    clients: [
      "Forward Travelers Sacco",
      "MVITA Ltd",
      "Links Solutions",
      "Benwanji Travelling Solutions",
    ],
  },
  {
    industry: "Hi-Tech/Information Technology",
    clients: [
      "Cloud Core Systems",
      "Intelligent Technologies",
      "NascenteQ",
      "M-pasha Ltd",
    ],
  },
  {
    industry: "Financial & Logistics",
    clients: [
      "Nairobi Stock Exchange",
      "Millennium Solutions Ltd",
      "Cure Kenya Transport Services",
    ],
  },
  {
    industry: "Research",
    clients: [
      "Gilead Foundation",
      "University of Texas Medical Branch",
      "AIDSRelief",
      "KEMRI",
      "Africa Resource Center",
    ],
  },
  {
    industry: "Sales and Distribution",
    clients: [
      "Diana Pastries",
      "Beauty Solutions Wholesalers",
      "Nyalenda Hardware Limited",
      "Winam Chemists Limited",
      "OctionX Uganda",
      "Soko Plus",
      "Steeltech Ltd",
    ],
  },
  {
    industry: "Government",
    clients: [
      "ICT Authority",
      "Kenyatta Youth Foundation",
      "National Leprosy and TB Programme",
      "Nanyuki Teaching & Referral Hospital",
    ],
  },
  {
    industry: "Education",
    clients: [
      "St Mary’s Girls High School, Sosio",
      "Good Shepherd Secondary School",
      "Damacrest Group of Schools",
      "Camp Brethren",
    ],
  },
  {
    industry: "Health",
    clients: [
      "Ministry Of Health Kenya",
      "John Paul II Huruma Hospital, Nanyuki",
      "AIC Kijabe Hospital",
      "Cure International, Kenya",
      "Jamii Medical Clinic",
    ],
  },
  {
    industry: "Hospitality & Entertainment",
    clients: [
      "Valley Park Falls Resort",
      "Bustani Homes Resort",
      "Shepherd Group of Hotels",
      "Pemak Resort Maasai Mara Hotel",
    ],
  },
];

const MajorClients: React.FC = () => {
  return (
    <div className="major-clients-section">
      <Title level={2} className="section-title">Major Clients by Industry</Title>
      <Row gutter={[24, 24]}>
        {clientsByIndustry.map((category, index) => (
          <Col xs={24} md={12} lg={8} key={index}>
            <Card className="industry-card" bordered={false}>
              <Title level={3} className="industry-title">{category.industry}</Title>
              {category.clients.map((client, i) => (
                <Paragraph key={i} className="client-name">{client}</Paragraph>
              ))}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MajorClients;
