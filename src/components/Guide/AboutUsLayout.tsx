// src/components/AboutUsLayout.tsx
import React from 'react';
import { PageContainer } from '@ant-design/pro-layout';
import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

const AboutUsLayout: React.FC = () => {
  return (
    <PageContainer>
      <div>
        <img
          id="imgchef1"
          src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80"
          alt="Chef 1"
        />
      </div>
      <div>
        <Title level={2}>History</Title>
        <Paragraph id="chef1con">
          RecipiesCorn is a growing entity that was formed during the Covid-19 pandemic. It has become known after many
          people realized that they did not know how to cook a good variety of meals while caged up in the homes for
          their own safety. What started as a joke on a video call amongst our founders turned out to be the go-to
          webpage for many foodies in the country. Slowly but surely, other chefs took it upon themselves to write
          their knowledge together, and it was all compiled here for you.
        </Paragraph>
      </div>
      <div>
        <Title level={2}>Founders</Title>
        <Paragraph id="chef2con">
          The founders are well-renowned chefs that have been in the cooking industry for about 12 years each. In the
          midst of the pandemic, they felt the desire to go get food outside their homes and decided to make a change.
          With over a decade of experience, it's safe to say that they had a good audience. To their own surprise, they
          were shocked by their growth with RecipiesCorn.
          <p id="quote">"We did not expect this much recognition and growth within the first three years" - Chef Moringa
            once tweeted</p>
          From their hearts and minds, they are thankful for your support and hope you enjoy every meal you make.
        </Paragraph>
      </div>
      <div>
        <img
          id="imgchef2"
          src="https://images.unsplash.com/photo-1488905971602-47901d26961b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80"
          alt="Chef 2"
        />
      </div>
    </PageContainer>
  );
};

export default AboutUsLayout;
