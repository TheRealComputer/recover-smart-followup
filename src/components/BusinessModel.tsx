
import React, { useState } from 'react';
import { DollarSign, TrendingUp, Users, BarChart } from 'lucide-react';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const BusinessModel = () => {
  const [annualCalls, setAnnualCalls] = useState([10000]);
  const [costPerCall, setCostPerCall] = useState([25]);
  const [aiReduction, setAiReduction] = useState([70]);
  const [platformCost, setPlatformCost] = useState(75000);

  const currentAnnualCost = annualCalls[0] * costPerCall[0];
  const reductionAmount = (currentAnnualCost * aiReduction[0]) / 100;
  const annualROI = reductionAmount - platformCost;

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

          <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
            <h4 className="text-xl font-semibold text-gray-900 mb-6">Interactive ROI Calculator</h4>
            
            <div className="space-y-6">
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Annual follow-up calls: {annualCalls[0].toLocaleString()}
                </Label>
                <Slider
                  value={annualCalls}
                  onValueChange={setAnnualCalls}
                  max={50000}
                  min={1000}
                  step={1000}
                  className="w-full"
                />
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Cost per call (staff time): ${costPerCall[0]}
                </Label>
                <Slider
                  value={costPerCall}
                  onValueChange={setCostPerCall}
                  max={100}
                  min={10}
                  step={5}
                  className="w-full"
                />
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">
                  Cost reduction with AI: {aiReduction[0]}%
                </Label>
                <Slider
                  value={aiReduction}
                  onValueChange={setAiReduction}
                  max={90}
                  min={50}
                  step={5}
                  className="w-full"
                />
              </div>

              <div>
                <Label htmlFor="platform-cost" className="text-sm font-medium text-gray-700 mb-2 block">
                  Annual FollowUp platform cost:
                </Label>
                <Input
                  id="platform-cost"
                  type="number"
                  value={platformCost}
                  onChange={(e) => setPlatformCost(Number(e.target.value))}
                  className="w-full"
                />
              </div>

              <div className="border-t pt-4 space-y-3">
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Current annual cost:</span>
                  <span className="font-semibold text-red-600">${currentAnnualCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Annual savings with AI:</span>
                  <span className="font-semibold text-green-600">${reductionAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Platform cost:</span>
                  <span className="font-semibold text-blue-600">-${platformCost.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center py-2 pt-4 border-t">
                  <span className="text-gray-900 font-semibold text-lg">Net Annual ROI:</span>
                  <span className={`font-bold text-xl ${annualROI > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {annualROI > 0 ? '+' : ''}${annualROI.toLocaleString()}
                  </span>
                </div>
                <div className="text-center pt-2">
                  <span className={`text-sm font-medium ${annualROI > 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {annualROI > 0 
                      ? `${Math.round((annualROI / platformCost) * 100)}% return on investment`
                      : 'Adjust parameters to see positive ROI'
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
