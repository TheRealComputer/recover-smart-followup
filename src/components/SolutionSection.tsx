
import React from 'react';
import { Brain, Smartphone, Database, Shield } from 'lucide-react';

export const SolutionSection = () => {
  return (
    <section id="solution" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Solution: AI That Actually Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built the first AI platform that meaningfully automates patient follow-up. Here's what makes us different from every other healthcare AI company.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg shrink-0">
                <Smartphone className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Conversational AI That Patients Trust</h3>
                <p className="text-gray-600">
                  Unlike generic chatbots, our AI understands medical context. It conducts symptom assessments, medication adherence checks, and provides personalized education - reducing 90% of routine follow-up calls.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg shrink-0">
                <Database className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Deep EMR Integration</h3>
                <p className="text-gray-600">
                  We plug directly into Epic, Cerner, and other major EMRs. The AI knows each patient's procedure, medications, and risk factors - enabling truly personalized follow-up protocols.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-red-100 p-3 rounded-lg shrink-0">
                <Brain className="h-8 w-8 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Clinical Triage</h3>
                <p className="text-gray-600">
                  Our AI identifies urgent issues in real-time and escalates appropriately. This prevents complications while eliminating the need for nurses to manually review every patient interaction.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg shrink-0">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Structured Clinical Notes</h3>
                <p className="text-gray-600">
                  Every patient interaction becomes a structured clinical summary. Doctors get SOAP notes ready for billing and continuity of care - saving hours per week.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="font-medium text-gray-900">Real-time Monitoring</span>
                </div>
                <p className="text-sm text-gray-600">Patient reported pain level: 3/10 (improving)</p>
                <p className="text-sm text-gray-600">Medication adherence: 95%</p>
                <p className="text-sm text-gray-600">Next check-in: Tomorrow 9:00 AM</p>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <span className="font-medium text-gray-900">Automated Alert</span>
                </div>
                <p className="text-sm text-gray-600">Patient reports increased swelling - flagged for review</p>
                <button className="text-blue-600 text-sm font-medium mt-2">Review Patient →</button>
              </div>

              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="font-medium text-gray-900">SOAP Summary</span>
                </div>
                <p className="text-sm text-gray-600">Generated clinical summary ready for review</p>
                <button className="text-blue-600 text-sm font-medium mt-2">View Summary →</button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Why This Is a Billion-Dollar Opportunity</h3>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            We're not just another healthcare AI company. We've solved the fundamental problem of making AI actually useful in clinical workflows - and hospitals will pay premium prices for this solution.
          </p>
        </div>
      </div>
    </section>
  );
};
