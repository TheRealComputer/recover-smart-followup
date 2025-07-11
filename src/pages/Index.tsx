
import React from 'react';
import { Hero } from '@/components/Hero';
import { ProblemSection } from '@/components/ProblemSection';
import { SolutionSection } from '@/components/SolutionSection';
import { TechStack } from '@/components/TechStack';
import { BusinessModel } from '@/components/BusinessModel';
import { Features } from '@/components/Features';
import { Contact } from '@/components/Contact';
import { Navigation } from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <Features />
      <TechStack />
      <BusinessModel />
      <Contact />
    </div>
  );
};

export default Index;
