
import React from 'react';
import { Hero } from '@/components/Hero';
import { WorkflowSection } from '@/components/WorkflowSection';
import { SolutionSection } from '@/components/SolutionSection';
import { CompetitiveAdvantage } from '@/components/CompetitiveAdvantage';

import { BusinessModel } from '@/components/BusinessModel';
import { Features } from '@/components/Features';
import { Contact } from '@/components/Contact';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <WorkflowSection />
      <SolutionSection />
      <CompetitiveAdvantage />
      <Features />
      <BusinessModel />
      <Contact />
    </div>
  );
};

export default Index;
