import React from 'react';
import { 
  MessageSquare, 
  Database, 
  AlertTriangle, 
  FileText,
  MessageCircle, 
  Bell, 
  BarChart, 
  Calendar, 
  Shield, 
  Zap,
  Clock,
  Brain,
  Smartphone
} from 'lucide-react';

export const WorkflowSection = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Conversational AI",
      description: "Natural patient interactions with dynamic symptom assessment and personalized responses.",
      color: "blue"
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Automated medication and care reminders personalized to each patient's plan.",
      color: "green"
    },
    {
      icon: BarChart,
      title: "Provider Dashboard",
      description: "Real-time monitoring with intelligent alerts and comprehensive analytics.",
      color: "purple"
    },
    {
      icon: Calendar,
      title: "Care Plan Integration",
      description: "Seamless integration with existing systems for personalized protocols.",
      color: "orange"
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with full healthcare compliance built-in.",
      color: "red"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Instant analysis and flagging of urgent issues with automated escalation.",
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; hover: string } } = {
      blue: { bg: "bg-blue-100", text: "text-blue-600", hover: "hover:bg-blue-50" },
      green: { bg: "bg-green-100", text: "text-green-600", hover: "hover:bg-green-50" },
      purple: { bg: "bg-purple-100", text: "text-purple-600", hover: "hover:bg-purple-50" },
      orange: { bg: "bg-orange-100", text: "text-orange-600", hover: "hover:bg-orange-50" },
      red: { bg: "bg-red-100", text: "text-red-600", hover: "hover:bg-red-50" },
      indigo: { bg: "bg-indigo-100", text: "text-indigo-600", hover: "hover:bg-indigo-50" }
    };
    return colorMap[color];
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How FollowUp Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete automated workflow that transforms patient follow-up
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-12 max-w-5xl mx-auto mb-20">
          {/* Step 1 */}
          <div className="text-center group">
            <div className="bg-blue-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-100 transition-all duration-300">
              <Database className="h-10 w-10 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">EMR Integration</h3>
            <p className="text-gray-600 text-sm">
              Connects with existing systems
            </p>
          </div>

          {/* Step 2 */}
          <div className="text-center group">
            <div className="bg-green-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-100 transition-all duration-300">
              <MessageSquare className="h-10 w-10 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">AI Check-ins</h3>
            <p className="text-gray-600 text-sm">
              Daily symptom assessments
            </p>
          </div>

          {/* Step 3 */}
          <div className="text-center group">
            <div className="bg-amber-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-100 transition-all duration-300">
              <AlertTriangle className="h-10 w-10 text-amber-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Smart Triage</h3>
            <p className="text-gray-600 text-sm">
              Automatic escalation of urgent issues
            </p>
          </div>

          {/* Step 4 */}
          <div className="text-center group">
            <div className="bg-purple-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-100 transition-all duration-300">
              <FileText className="h-10 w-10 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3>
            <p className="text-gray-600 text-sm">
              Structured SOAP notes
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Feature Set
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const colors = getColorClasses(feature.color);
              const Icon = feature.icon;
              
              return (
                <div 
                  key={index}
                  className={`bg-gray-50 rounded-xl p-6 shadow-sm border border-gray-100 ${colors.hover} transition-all duration-200 hover:shadow-lg group`}
                >
                  <div className={`${colors.bg} p-3 rounded-lg w-fit mb-4 group-hover:scale-110 transition-transform duration-200`}>
                    <Icon className={`h-8 w-8 ${colors.text}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-white text-center">
            <div>
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold mb-2">Automated</div>
              <p className="opacity-90">24/7 patient monitoring</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Brain className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold mb-2">Intelligent</div>
              <p className="opacity-90">AI-powered assessment</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Smartphone className="h-8 w-8" />
              </div>
              <div className="text-2xl font-bold mb-2">Connected</div>
              <p className="opacity-90">Seamless care coordination</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};