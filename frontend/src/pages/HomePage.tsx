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
      <Hero />
      <Partners />
      <Stats />
      <FeaturesPage />
      <IntegrationsPage />
      <Portfolio />
      <PricingPage />
      <About />
      <ContactPage />
    </>
  );
};
