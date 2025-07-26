import React from 'react';
import { Clock, Phone, AlertTriangle, TrendingDown } from 'lucide-react';

export const Problem = () => {
  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            The Post-Surgery Follow-up Crisis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Healthcare providers are drowning in manual follow-up calls while patients struggle with inconsistent care
          </p>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 mb-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">20%</div>
              <div className="text-gray-700 text-sm">of patients experience a complication after surgery</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">$17B+</div>
              <div className="text-gray-700 text-sm">of added costs to US hospitals annually from preventable readmissions</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">$43K</div>
              <div className="text-gray-700 text-sm">in median hospitalization costs per patient</div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-2xl text-black max-w-4xl mx-auto leading-relaxed">
            We aim to completely redo post-op telehealth enabling complete automation so medical staff can do more.
          </p>
        </div>


      </div>
    </section>
  );
};