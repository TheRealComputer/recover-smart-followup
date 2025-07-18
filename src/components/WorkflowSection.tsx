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

        <div className="grid lg:grid-cols-4 gap-12 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="text-center group">
            <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-all duration-300">
              <Database className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">EMR Integration</h3>
            <p className="text-gray-600 text-sm">
              Connects with your existing systems to access patient data
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center group">
            <div className="bg-green-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-all duration-300">
              <MessageSquare className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Check-ins</h3>
            <p className="text-gray-600 text-sm">
              Daily conversations assess symptoms and medication adherence
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center group">
            <div className="bg-amber-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-100 transition-all duration-300">
              <AlertTriangle className="h-10 w-10 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Triage</h3>
            <p className="text-gray-600 text-sm">
              Identifies urgent issues and escalates to providers automatically
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center group">
            <div className="bg-purple-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-100 transition-all duration-300">
              <FileText className="h-10 w-10 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3>
            <p className="text-gray-600 text-sm">
              Creates structured SOAP notes for EMR integration
            </p>
          </div>
        </div>


        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mt-16">
          <div className="grid md:grid-cols-3 gap-8 text-white text-center">
            <div>
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold mb-2">Automated</div>
              <p className="opacity-90">24/7 patient monitoring</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Brain className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold mb-2">Intelligent</div>
              <p className="opacity-90">AI-powered symptom assessment</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Smartphone className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold mb-2">Connected</div>
              <p className="opacity-90">Seamless care coordination</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};