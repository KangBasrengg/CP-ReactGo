import React from 'react';
import { Hero } from '../components/sections/Hero';
import { Partners } from '../components/sections/Partners';
import { Stats } from '../components/sections/Stats';
import { FeaturesPage } from './FeaturesPage';
import { IntegrationsPage } from './IntegrationsPage';
import { Portfolio } from '../components/sections/Portfolio';
import { PricingPage } from './PricingPage';
import { About } from '../components/sections/About';
import { ContactPage } from './ContactPage';

export const HomePage: React.FC = () => {
  return (
    <>
      <div className="section-photo">
        <Hero />
      </div>
      <div className="section-solid solid-fade-dark">
        <Partners />
      </div>
      <div className="section-photo photo-fade-dark">
        <Stats />
      </div>
      <div className="section-solid">
        <FeaturesPage />
      </div>
      <div className="section-photo">
        <IntegrationsPage />
      </div>
      <div className="section-solid">
        <Portfolio />
      </div>
      <div className="section-photo">
        <PricingPage />
      </div>
      <div className="section-solid">
        <About />
      </div>
      <div className="section-photo photo-fade-bottom">
        <ContactPage />
      </div>
    </>
  );
};
