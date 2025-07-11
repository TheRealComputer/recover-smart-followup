
import React from 'react';
import { Cloud, Smartphone, Brain, Database, Shield, Zap } from 'lucide-react';

export const TechStack = () => {
  return (
    <section id="tech" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Enterprise-Grade Technology Stack
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built with cutting-edge technologies to ensure scalability, security, and seamless integration with existing healthcare systems.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-3 rounded-lg shrink-0">
                <Cloud className="h-8 w-8 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Serverless AWS Backend</h3>
                <p className="text-gray-600">
                  Lambda, API Gateway, DynamoDB, and SNS provide compliance-grade, scalable infrastructure with automatic scaling and high availability.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg shrink-0">
                <Smartphone className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">React Native Mobile</h3>
                <p className="text-gray-600">
                  Cross-platform patient app with future flexibility to switch to SMS-first or PWA deployment as needed.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg shrink-0">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">LLaMA 3 AI Models</h3>
                <p className="text-gray-600">
                  Advanced agentic conversational models with specialized extraction models for accurate symptom assessment and documentation.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg shrink-0">
                <Database className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">FHIR Integration</h3>
                <p className="text-gray-600">
                  Standard-compliant EMR interoperability with Epic, Cerner, and Athena systems for seamless data exchange.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Architecture Benefits</h3>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Shield className="h-6 w-6 text-green-600" />
                <span className="text-gray-700">HIPAA-compliant security by design</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Zap className="h-6 w-6 text-blue-600" />
                <span className="text-gray-700">Auto-scaling to handle patient load</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Database className="h-6 w-6 text-purple-600" />
                <span className="text-gray-700">Real-time data processing & analytics</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Cloud className="h-6 w-6 text-orange-600" />
                <span className="text-gray-700">99.9% uptime with disaster recovery</span>
              </div>
            </div>

            <div className="mt-8 p-4 bg-white rounded-lg border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">EMR Compatibility</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-2 bg-blue-50 rounded">
                  <div className="font-medium text-blue-900">Epic</div>
                </div>
                <div className="p-2 bg-green-50 rounded">
                  <div className="font-medium text-green-900">Cerner</div>
                </div>
                <div className="p-2 bg-purple-50 rounded">
                  <div className="font-medium text-purple-900">Athena</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
