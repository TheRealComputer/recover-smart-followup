import React from 'react';
import { Play, Smartphone, Monitor, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Demo = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            See FollowUp in Action
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience how our platform transforms patient care from the first day post-surgery
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Smartphone className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Patient Mobile Experience</h3>
                <p className="text-gray-600">
                  Patients receive personalized check-ins on their phones, making it easy to report symptoms and track recovery progress.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <MessageSquare className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Intelligent Conversations</h3>
                <p className="text-gray-600">
                  Our AI asks the right questions at the right time, adapting to each patient's specific procedure and recovery timeline.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Monitor className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Provider Dashboard</h3>
                <p className="text-gray-600">
                  Healthcare teams get real-time insights with urgent issues flagged immediately and routine updates summarized.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                <Play className="h-4 w-4 mr-2" />
                Watch Demo Video
              </Button>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 text-white">
            <div className="bg-gray-800 rounded-lg p-6 mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 rounded-full p-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-blue-300">FollowUp AI</p>
                    <p className="text-gray-300">Good morning, Sarah! How are you feeling 3 days after your knee surgery?</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 justify-end">
                  <div>
                    <p className="text-green-300 text-right">Sarah</p>
                    <p className="text-gray-300 text-right">Much better! Pain is down to a 3/10</p>
                  </div>
                  <div className="bg-green-600 rounded-full p-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-600 rounded-full p-1">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-blue-300">FollowUp AI</p>
                    <p className="text-gray-300">That's great progress! Are you able to do the physical therapy exercises we discussed?</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-400 text-sm">Live patient conversation</p>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-200 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">
              Join leading healthcare providers who are already transforming their post-surgery care
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                Request Demo
              </Button>
              <Button size="lg" variant="outline">
                Start Free Trial
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};