
import React from 'react';
import { ArrowRight, Shield, Zap, Users } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-green-50 min-h-screen flex items-center relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full opacity-20"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-green-100 rounded-full opacity-20"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-purple-100 rounded-full opacity-30"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-blue-100 rounded-full opacity-25"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
              <span className="text-blue-600 block">The Future of</span>
              <span className="text-gray-900">Post-Op Care</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              FollowUp automates post-operative care monitoring, reducing provider workload while improving patient outcomes through intelligent engagement.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://calendly.com/followuphealthai/30min" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold flex items-center justify-center group shadow-lg"
            >
              Book Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Feature highlights */}
          <div className="flex justify-center space-x-8 mt-12">
            <div className="flex items-center space-x-2 text-green-600">
              <Zap className="h-5 w-5" />
              <span className="text-sm font-medium">Real-time Processing</span>
            </div>
            <div className="flex items-center space-x-2 text-purple-600">
              <Users className="h-5 w-5" />
              <span className="text-sm font-medium">Provider Focused</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
