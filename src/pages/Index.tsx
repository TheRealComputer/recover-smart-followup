
import React from 'react';
import { Hero } from '@/components/Hero';
import { Problem } from '@/components/Problem';
import { WorkflowSection } from '@/components/WorkflowSection';
import { CompetitiveAdvantage } from '@/components/CompetitiveAdvantage';
import { Demo } from '@/components/Demo';
import { Contact } from '@/components/Contact';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Problem />
      <WorkflowSection />
      <CompetitiveAdvantage />
      <Demo />
      <Contact />
    </div>
  );
};

export default Index;
