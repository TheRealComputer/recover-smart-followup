
import React from 'react';
import { Mail, Phone, Calendar, ArrowRight } from 'lucide-react';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Get Started
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join leading healthcare providers who are revolutionizing patient care with AI-powered follow-up solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Started Today</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Calendar className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Schedule a Demo</div>
                    <div className="text-gray-600">See the platform in action with your use cases</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Phone className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Pilot Program</div>
                    <div className="text-gray-600">Start with a small patient group to prove ROI</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Mail className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Custom Integration</div>
                    <div className="text-gray-600">Seamless setup with your existing EMR system</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="font-semibold text-gray-900 mb-3">Typical Implementation Timeline</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Week 1-2:</span>
                  <span className="font-medium">EMR integration & setup</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Week 3-4:</span>
                  <span className="font-medium">Staff training & pilot launch</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Week 5-8:</span>
                  <span className="font-medium">Full deployment & optimization</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="your.email@hospital.com"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Organization</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Hospital or clinic name"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Patient Volume</label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                  <option>Select patient volume</option>
                  <option>Under 1,000 per month</option>
                  <option>1,000 - 5,000 per month</option>
                  <option>5,000 - 10,000 per month</option>
                  <option>Over 10,000 per month</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea 
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Tell us about your follow-up challenges..."
                ></textarea>
              </div>
              
              <button className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold flex items-center justify-center group">
                Request Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join the Healthcare AI Revolution</h3>
            <p className="text-lg text-gray-600 mb-6">
              Over 50+ healthcare organizations are already transforming patient care with our platform
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <span>✓ EMR Integration Ready</span>
              <span>✓ 24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
