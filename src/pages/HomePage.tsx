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
      <div className="section-photo no-top-fade">
        <Hero />
        <Partners />
        <Stats />
      </div>
      <div className="section-solid solid-fade-dark">
        <FeaturesPage />
      </div>
      <div className="section-photo photo-sky-top">
        <IntegrationsPage />
      </div>
      <div className="section-solid solid-fade-dark">
        <Portfolio />
      </div>
      <div className="section-photo photo-sky-top">
        <PricingPage />
      </div>
      <div className="section-solid solid-fade-dark">
        <About />
      </div>
      <div className="section-photo photo-sky-top fade-to-footer">
        <ContactPage />
      </div>
    </>
  );
};

