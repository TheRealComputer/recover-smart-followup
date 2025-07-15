
import React from 'react';
import { ArrowRight, Shield, Zap, Users } from 'lucide-react';

export const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-blue-600 font-medium">
                <Shield className="h-5 w-5" />
                <span>Next-Generation Healthcare AI</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                The $50B Problem in
                <span className="text-blue-600 block">Patient Follow-Up</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                We're building the AI platform that automates post-operative care, reducing hospital costs by 70% while improving patient outcomes. The market is massive, the problem is urgent.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold flex items-center justify-center group">
                Schedule Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 font-semibold">
                View Case Studies
              </button>
            </div>

            <div className="flex items-center space-x-8 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">$50B</div>
                <div className="text-sm text-gray-600">Market Size</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">70%</div>
                <div className="text-sm text-gray-600">Cost Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">5M+</div>
                <div className="text-sm text-gray-600">Procedures/Year</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Patient Check-In</div>
                    <div className="text-sm text-gray-500">AI-powered symptom assessment</div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                  <div className="text-sm text-gray-600">
                    <strong>AI Assistant:</strong> "How are you feeling today after your procedure?"
                  </div>
                  <div className="text-sm text-blue-600">
                    <strong>Patient:</strong> "I have some mild pain at the incision site."
                  </div>
                  <div className="text-sm text-gray-600">
                    <strong>AI Assistant:</strong> "Can you rate the pain from 1-10?"
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Zap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Real-time Analysis</div>
                    <div className="text-sm text-green-600">✓ Normal recovery pattern detected</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-200 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-indigo-200 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
