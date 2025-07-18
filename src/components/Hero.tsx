
import React from 'react';
import { ArrowRight, Shield, Zap, Users } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            
            <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight max-w-4xl mx-auto">
              Your AI teammate for
              <span className="text-blue-600 block">patient follow-up</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              FollowUp automates post-operative care monitoring, reducing provider workload by 70% while improving patient outcomes through intelligent 24/7 engagement.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold flex items-center justify-center group">
              Book Demo
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-16 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">70%</div>
              <div className="text-sm text-gray-600">Less workload</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">24/7</div>
              <div className="text-sm text-gray-600">AI monitoring</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900">5M+</div>
              <div className="text-sm text-gray-600">Procedures/year</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
