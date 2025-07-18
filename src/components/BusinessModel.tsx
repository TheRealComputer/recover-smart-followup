
import React, { useState } from 'react';
import { DollarSign, TrendingUp, Users, BarChart } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const BusinessModel = () => {
  const [patientCount, setPatientCount] = useState([50]);
  const [monthlyRatePerPatient, setMonthlyRatePerPatient] = useState([15]);
  const [currentCostPerPatient, setCurrentCostPerPatient] = useState([45]);

  const monthlyFollowUpCost = patientCount[0] * monthlyRatePerPatient[0];
  const currentMonthlyCost = patientCount[0] * currentCostPerPatient[0];
  const monthlyROI = currentMonthlyCost - monthlyFollowUpCost;
  const annualROI = monthlyROI * 12;

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

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Revenue Model</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg shrink-0">
                  <DollarSign className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Per-Patient Monthly Pricing</h4>
                  <p className="text-gray-600">Simple monthly rate per patient enrolled, scaling with your patient volume</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-lg shrink-0">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Volume Discounts</h4>
                  <p className="text-gray-600">Tiered pricing with lower per-patient rates for larger health systems</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-lg shrink-0">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Enterprise Packages</h4>
                  <p className="text-gray-600">Custom pricing for large health systems with additional features and support</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h4 className="text-xl font-semibold text-gray-900 mb-6">Interactive ROI Calculator</h4>
            
            <div className="space-y-6">
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Number of patients: {patientCount[0].toLocaleString()}
                </Label>
                <Slider
                  value={patientCount}
                  onValueChange={setPatientCount}
                  max={200}
                  min={10}
                  step={10}
                  className="w-full"
                />
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  FollowUp monthly rate per patient: ${monthlyRatePerPatient[0]}
                </Label>
                <Slider
                  value={monthlyRatePerPatient}
                  onValueChange={setMonthlyRatePerPatient}
                  max={50}
                  min={5}
                  step={1}
                  className="w-full"
                />
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Current monthly cost per patient (staff time): ${currentCostPerPatient[0]}
                </Label>
                <Slider
                  value={currentCostPerPatient}
                  onValueChange={setCurrentCostPerPatient}
                  max={100}
                  min={20}
                  step={5}
                  className="w-full"
                />
              </div>

              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Current monthly cost:</span>
                  <span className="font-semibold text-red-600">${currentMonthlyCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">FollowUp monthly cost:</span>
                  <span className="font-semibold text-blue-600">${monthlyFollowUpCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 pt-4 border-t">
                  <span className="text-gray-900 font-semibold text-lg">Monthly Savings:</span>
                  <span className={`font-bold text-xl ${monthlyROI > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {monthlyROI > 0 ? '+' : ''}${monthlyROI.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-900 font-semibold text-lg">Annual Savings:</span>
                  <span className={`font-bold text-xl ${annualROI > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {annualROI > 0 ? '+' : ''}${annualROI.toLocaleString()}
                  </span>
                </div>
                <div className="text-center pt-2">
                  <span className={`text-sm font-medium ${monthlyROI > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {monthlyROI > 0 
                      ? `${Math.round((monthlyROI / monthlyFollowUpCost) * 100)}% cost reduction`
                      : 'Adjust parameters to see positive savings'
                    }
                  </span>
                </div>
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
