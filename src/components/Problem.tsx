import React from 'react';
import { Clock, Phone, AlertTriangle, TrendingDown } from 'lucide-react';

export const Problem = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Post-Surgery Follow-up Crisis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Healthcare providers are drowning in manual follow-up calls while patients struggle with inconsistent care
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="bg-red-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Time Consuming</h3>
            <p className="text-gray-600 text-sm">
              Nurses spend hours daily on routine follow-up calls
            </p>
          </div>

          <div className="text-center">
            <div className="bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Phone className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Inconsistent Care</h3>
            <p className="text-gray-600 text-sm">
              Patients receive different levels of follow-up attention
            </p>
          </div>

          <div className="text-center">
            <div className="bg-yellow-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Missed Issues</h3>
            <p className="text-gray-600 text-sm">
              Critical symptoms go undetected between scheduled calls
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <TrendingDown className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Poor Outcomes</h3>
            <p className="text-gray-600 text-sm">
              Higher readmission rates and patient dissatisfaction
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 mt-12 border border-gray-200">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">30%</div>
              <div className="font-semibold text-gray-900 mb-1">Readmission Rate</div>
              <div className="text-sm text-gray-600">For post-surgical patients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">60%</div>
              <div className="font-semibold text-gray-900 mb-1">Staff Time</div>
              <div className="text-sm text-gray-600">Spent on manual follow-ups</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">40%</div>
              <div className="font-semibold text-gray-900 mb-1">Patient Anxiety</div>
              <div className="text-sm text-gray-600">Due to inconsistent communication</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};