
import React from 'react';
import { MessageCircle, Bell, BarChart, Calendar, Shield, Zap } from 'lucide-react';

export const Features = () => {
  const features = [
    {
      icon: MessageCircle,
      title: "Conversational AI",
      description: "Natural, context-aware patient interactions with dynamic symptom assessment and personalized responses.",
      color: "blue"
    },
    {
      icon: Bell,
      title: "Smart Reminders",
      description: "Automated medication, wound care, and activity reminders personalized to each patient's care plan.",
      color: "green"
    },
    {
      icon: BarChart,
      title: "Provider Dashboard",
      description: "Real-time patient monitoring with intelligent alerts and comprehensive analytics for better decisions.",
      color: "purple"
    },
    {
      icon: Calendar,
      title: "Care Plan Integration",
      description: "Seamless integration with existing systems for personalized follow-up protocols and care coordination.",
      color: "orange"
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with full healthcare compliance and data protection built-in.",
      color: "red"
    },
    {
      icon: Zap,
      title: "Real-time Processing",
      description: "Instant analysis and flagging of urgent issues with automated escalation to appropriate care teams.",
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
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive Feature Set
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to transform patient follow-up care, from AI-powered conversations to comprehensive provider analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            const Icon = feature.icon;
            
            return (
              <div 
                key={index}
                className={`bg-white rounded-xl p-6 shadow-sm border border-gray-100 ${colors.hover} transition-all duration-200 hover:shadow-lg group`}
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

        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
              <div className="font-semibold text-gray-900 mb-1">Patient Satisfaction</div>
              <div className="text-sm text-gray-600">Improved patient experience with 24/7 support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">90%</div>
              <div className="font-semibold text-gray-900 mb-1">Accuracy Rate</div>
              <div className="text-sm text-gray-600">In symptom assessment and triage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">45%</div>
              <div className="font-semibold text-gray-900 mb-1">Fewer Readmissions</div>
              <div className="text-sm text-gray-600">Early detection prevents complications</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
