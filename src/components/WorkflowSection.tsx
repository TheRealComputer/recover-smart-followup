import React from 'react';
import { 
  MessageSquare, 
  Database, 
  AlertTriangle, 
  FileText,
  ArrowDown,
  Smartphone,
  Brain,
  Clock
} from 'lucide-react';

export const WorkflowSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How FollowUp Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A complete automated workflow that transforms patient follow-up from manual burden to intelligent automation
          </p>
        </div>

        <div className="grid lg:grid-cols-7 gap-8 items-center">
          {/* Step 1 */}
          <div className="text-center group">
            <div className="relative">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                <Database className="h-8 w-8 text-blue-600" />
              </div>
              <div className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                1
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">EMR Integration</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Automatically pulls patient procedures, medications, and care plans from Epic, Cerner, or any FHIR-compliant EMR
            </p>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex items-center justify-center">
            <ArrowDown className="h-6 w-6 text-gray-400 rotate-90" />
          </div>

          {/* Step 2 */}
          <div className="text-center group">
            <div className="relative">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors">
                <MessageSquare className="h-8 w-8 text-green-600" />
              </div>
              <div className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                2
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Conversations</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Personalized AI conducts daily check-ins via mobile app, assessing symptoms, medication adherence, and recovery progress
            </p>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex items-center justify-center">
            <ArrowDown className="h-6 w-6 text-gray-400 rotate-90" />
          </div>

          {/* Step 3 */}
          <div className="text-center group">
            <div className="relative">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-red-200 transition-colors">
                <AlertTriangle className="h-8 w-8 text-red-600" />
              </div>
              <div className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                3
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Triage</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              AI identifies urgent issues in real-time and automatically escalates to providers while routine responses are handled automatically
            </p>
          </div>

          {/* Arrow */}
          <div className="hidden lg:flex items-center justify-center">
            <ArrowDown className="h-6 w-6 text-gray-400 rotate-90" />
          </div>

          {/* Step 4 */}
          <div className="text-center group">
            <div className="relative">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-200 transition-colors">
                <FileText className="h-8 w-8 text-purple-600" />
              </div>
              <div className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                4
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Clinical Documentation</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Every interaction becomes a structured SOAP note ready for EMR integration
            </p>
          </div>
        </div>


        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mt-16">
          <div className="grid md:grid-cols-3 gap-8 text-white text-center">
            <div>
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold mb-2">70% Less Time</div>
              <p className="opacity-90">Spent on follow-up calls</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Brain className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold mb-2">90% Accuracy</div>
              <p className="opacity-90">In symptom assessment</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Smartphone className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold mb-2">24/7 Monitoring</div>
              <p className="opacity-90">Patient engagement</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};