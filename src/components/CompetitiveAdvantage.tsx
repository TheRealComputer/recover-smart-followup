import React from 'react';
import { Shield, Zap, Users, CheckCircle, X, AlertTriangle } from 'lucide-react';

export const CompetitiveAdvantage = () => {
  const competitors = [
    {
      name: "FollowUp AI",
      features: {
        "Patient Symptom Check-Ins": "full",
        "Conversational Triage Engine": "full",
        "Structured Provider Summaries": "full",
        "EMR Integration Readiness": "full",
        "Covers General Post-Op Care": "full"
      },
      isUs: true
    },
    {
      name: "PostOp.ai",
      features: {
        "Patient Symptom Check-Ins": "full",
        "Conversational Triage Engine": "partial",
        "Structured Provider Summaries": "partial",
        "EMR Integration Readiness": "partial",
        "Covers General Post-Op Care": "partial"
      }
    },
    {
      name: "Memora",
      features: {
        "Patient Symptom Check-Ins": "full",
        "Conversational Triage Engine": "full",
        "Structured Provider Summaries": "partial",
        "EMR Integration Readiness": "full",
        "Covers General Post-Op Care": "partial"
      }
    },
    {
      name: "Gyant",
      features: {
        "Patient Symptom Check-Ins": "partial",
        "Conversational Triage Engine": "full",
        "Structured Provider Summaries": "partial",
        "EMR Integration Readiness": "full",
        "Covers General Post-Op Care": "partial"
      }
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Competitive Landscape
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            While others offer adjacent solutions, we've built the only platform specifically designed for comprehensive post-op care and provider triage
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature/Company</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">FollowUp AI</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">PostOp.ai</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Memora</th>
                  <th className="px-6 py-4 text-center text-sm font-semibold text-gray-900">Gyant</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(competitors[0].features).map((feature) => (
                  <tr key={feature} className="border-b border-gray-200">
                    <td className="px-6 py-4 font-medium text-gray-900">{feature}</td>
                    {competitors.map((competitor, index) => (
                      <td key={index} className="px-6 py-4 text-center">
                        {competitor.features[feature] === "full" ? (
                          <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                        ) : competitor.features[feature] === "partial" ? (
                          <AlertTriangle className="h-5 w-5 text-orange-500 mx-auto" />
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


      </div>
    </section>
  );
};