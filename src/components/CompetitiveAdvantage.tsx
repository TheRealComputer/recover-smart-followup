import React from 'react';
import { Shield, Zap, Users, CheckCircle, X } from 'lucide-react';

export const CompetitiveAdvantage = () => {
  const competitors = [
    {
      name: "Generic Chatbots",
      features: {
        "Medical Context": false,
        "EMR Integration": false,
        "Clinical Triage": false,
        "SOAP Documentation": false,
        "Real-time Alerts": false
      }
    },
    {
      name: "Basic Reminder Apps",
      features: {
        "Medical Context": false,
        "EMR Integration": false,
        "Clinical Triage": false,
        "SOAP Documentation": false,
        "Real-time Alerts": false
      }
    },
    {
      name: "Call Center Solutions",
      features: {
        "Medical Context": true,
        "EMR Integration": false,
        "Clinical Triage": true,
        "SOAP Documentation": false,
        "Real-time Alerts": false
      }
    },
    {
      name: "FollowUp",
      features: {
        "Medical Context": true,
        "EMR Integration": true,
        "Clinical Triage": true,
        "SOAP Documentation": true,
        "Real-time Alerts": true
      },
      isUs: true
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why FollowUp Beats Every Alternative
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While others offer generic solutions, we've built the only platform specifically designed for clinical follow-up workflows
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Solution</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Medical Context</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">EMR Integration</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Clinical Triage</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">SOAP Documentation</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Real-time Alerts</th>
                </tr>
              </thead>
              <tbody>
                {competitors.map((competitor, index) => (
                  <tr key={index} className={competitor.isUs ? "bg-blue-50 border-2 border-blue-200" : "border-b border-gray-200"}>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <span className={`font-medium ${competitor.isUs ? "text-blue-900" : "text-gray-900"}`}>
                          {competitor.name}
                        </span>
                        {competitor.isUs && (
                          <span className="ml-2 bg-blue-600 text-white px-2 py-1 text-xs rounded-full">That's us!</span>
                        )}
                      </div>
                    </td>
                    {Object.entries(competitor.features).map(([feature, hasFeature]) => (
                      <td key={feature} className="px-6 py-4 text-center">
                        {hasFeature ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <X className="h-5 w-5 text-red-400 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Medical-Grade AI</h3>
            <p className="text-gray-600 text-sm">
              Purpose-built for healthcare, understanding medical context and clinical protocols
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Zap className="h-6 w-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">True Integration</h3>
            <p className="text-gray-600 text-sm">
              Direct EMR integration means personalized care plans, not one-size-fits-all reminders
            </p>
          </div>

          <div className="text-center p-6 bg-white rounded-xl shadow-sm">
            <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Clinical Workflow</h3>
            <p className="text-gray-600 text-sm">
              Built for healthcare providers, not general wellness apps - every feature serves clinical needs
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};