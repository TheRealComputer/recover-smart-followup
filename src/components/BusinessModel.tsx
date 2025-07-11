
import React from 'react';
import { DollarSign, TrendingUp, Users, BarChart } from 'lucide-react';

export const BusinessModel = () => {
  return (
    <section id="business" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Scalable Business Model
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed for hospital systems and large clinic groups with flexible licensing that grows with your organization.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Revenue Model</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg shrink-0">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">SaaS Licensing</h4>
                  <p className="text-gray-600">Monthly or annual subscriptions based on patient volume and feature tiers</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg shrink-0">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Per-Patient Model</h4>
                  <p className="text-gray-600">Pay per patient enrolled, aligning costs with actual usage and outcomes</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg shrink-0">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Enterprise Packages</h4>
                  <p className="text-gray-600">Custom pricing for large health systems with volume discounts</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
            <h4 className="text-xl font-semibold text-gray-900 mb-6">ROI Calculator</h4>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Annual follow-up calls:</span>
                <span className="font-semibold">10,000</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Cost per call (staff time):</span>
                <span className="font-semibold">$25</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">Current annual cost:</span>
                <span className="font-semibold text-red-600">$250,000</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100">
                <span className="text-gray-600">70% reduction with AI:</span>
                <span className="font-semibold text-green-600">$175,000 saved</span>
              </div>
              <div className="flex justify-between items-center py-2 pt-4">
                <span className="text-gray-900 font-semibold">Annual ROI:</span>
                <span className="font-bold text-green-600 text-xl">$150,000+</span>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Future Growth Opportunities</h3>
              <ul className="space-y-2 text-lg opacity-90">
                <li>• Predictive risk scoring models</li>
                <li>• Billing optimization modules</li>
                <li>• Patient engagement analytics</li>
                <li>• Population health insights</li>
              </ul>
            </div>
            <div className="text-center">
              <BarChart className="h-16 w-16 mx-auto mb-4 opacity-80" />
              <div className="text-3xl font-bold mb-2">Data Layer</div>
              <p className="text-lg opacity-90">Creates sticky platform for additional modules</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
