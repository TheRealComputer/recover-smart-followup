
import React from 'react';
import { AlertTriangle, Clock, Phone, FileText } from 'lucide-react';

export const ProblemSection = () => {
  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Current State of Patient Follow-Up
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Healthcare providers face unprecedented challenges in managing post-operative and general patient follow-up care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-200">
            <div className="bg-red-100 p-3 rounded-lg w-fit mb-4">
              <Clock className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Labor Intensive</h3>
            <p className="text-gray-600 text-sm">
              Staff spend hours on repetitive follow-up calls, taking time away from critical patient care.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-200">
            <div className="bg-orange-100 p-3 rounded-lg w-fit mb-4">
              <FileText className="h-8 w-8 text-orange-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Poor Tracking</h3>
            <p className="text-gray-600 text-sm">
              Inconsistent documentation and fragmented follow-up processes lead to gaps in care.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-200">
            <div className="bg-yellow-100 p-3 rounded-lg w-fit mb-4">
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Reactive Care</h3>
            <p className="text-gray-600 text-sm">
              Issues are often identified too late, leading to complications and emergency visits.
            </p>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-shadow duration-200">
            <div className="bg-purple-100 p-3 rounded-lg w-fit mb-4">
              <Phone className="h-8 w-8 text-purple-600" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Patient Confusion</h3>
            <p className="text-gray-600 text-sm">
              Patients struggle to understand post-procedure instructions and recognize concerning symptoms.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600">$2.4B</div>
              <div className="text-gray-600">Annual cost of preventable readmissions</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">40%</div>
              <div className="text-gray-600">Of follow-up calls are unnecessary</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">65%</div>
              <div className="text-gray-600">Patient adherence to post-op instructions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
