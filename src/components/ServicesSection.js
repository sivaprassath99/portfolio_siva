import React from 'react';
import { DiCode, DiPython, DiGoogleAnalytics } from 'react-icons/di';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import ServicesSectionItem from './ServicesSectionItem';

const ServicesItemsStyles = styled.div`
  padding: 10rem 0;
  .services__allItems {
    display: flex;
    gap: 10rem;
    justify-content: space-between;
    margin-top: 5rem;
  }
  @media only screen and (max-width: 768px) {
    .services__allItems {
      flex-direction: column;
      max-width: 350px;
      margin: 0 auto;
      margin-top: 5rem;
      gap: 5rem;
    }
  }
`;

export default function ServicesSection() {
  return (
    <ServicesItemsStyles>
      <div className="container">
        <SectionTitle subheading="Skills" heading="Technology I'm good at" />
        <div className="services__allItems">
          <ServicesSectionItem
            // icon={<MdDesktopMac />}
            icon={<DiPython />}
            title="Python"
            desc="I do develop AI and machine learning. Python is my Favorite Language❤️."
          />
          <ServicesSectionItem
            icon={<DiCode />}
            title="Web dev"
            desc="I also develop the websites. I create using React, HTML, CSS, JS."
          />
          <ServicesSectionItem
            icon={<DiGoogleAnalytics />}
            title="Data Analytics"
            desc="I make data analysis, which helps in better understandment of the challenges. "
          />
        </div>
      </div>
    </ServicesItemsStyles>
  );
}
