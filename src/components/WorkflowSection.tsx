import React from 'react';
import { 
  MessageSquare, 
  AlertTriangle, 
  BarChart, 
  Database,
  Clock,
  Brain,
  Smartphone
} from 'lucide-react';

export const WorkflowSection = () => {
  const coreFeatures = [
    {
      icon: MessageSquare,
      title: "AI Check-ins",
      description: "Daily virtual check-ins to track recovery.",
      color: "blue"
    },
    {
      icon: AlertTriangle,
      title: "Smart Triage",
      description: "Early detection and escalation of urgent issues.",
      color: "green"
    },
    {
      icon: BarChart,
      title: "Provider Dashboard",
      description: "Real-time updates with patient summaries.",
      color: "purple"
    },
    {
      icon: Database,
      title: "Seamless EMR Integration",
      description: "Connects with existing healthcare systems.",
      color: "blue"
    }
  ];

  return (
    <section id="solution" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How FollowUp Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete automated workflow that transforms patient follow-up
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="grid grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
          {coreFeatures.map((feature, index) => {
            const Icon = feature.icon;
            const bgColor = feature.color === 'blue' ? 'bg-blue-100' : 
                           feature.color === 'green' ? 'bg-green-100' : 'bg-purple-100';
            const textColor = feature.color === 'blue' ? 'text-blue-600' : 
                             feature.color === 'green' ? 'text-green-600' : 'text-purple-600';
            
            return (
              <div key={index} className="text-center p-4">
                <div className={`${bgColor} w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className={`h-8 w-8 ${textColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Summary Bar */}
        <div className="bg-gradient-to-r from-blue-100 via-green-100 to-purple-100 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-gray-800 text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold mb-2">Automated</div>
              <p className="text-gray-700">24/7 patient monitoring</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center justify-center mb-4">
                <Brain className="h-8 w-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold mb-2">Intelligent</div>
              <p className="text-gray-700">AI-powered assessment</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6">
              <div className="flex items-center justify-center mb-4">
                <Smartphone className="h-8 w-8 text-purple-600" />
              </div>
              <div className="text-2xl font-bold mb-2">Connected</div>
              <p className="text-gray-700">Seamless care coordination</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};