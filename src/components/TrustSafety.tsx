import React from 'react';
import { Shield, UserCheck, Lock, Eye, AlertTriangle, Heart } from 'lucide-react';

const TrustSafety: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: 'Profile Verification',
      description: 'Every profile is manually verified with multiple documents to ensure authenticity and build trust.',
      color: 'blue'
    },
    {
      icon: UserCheck,
      title: 'Background Checks',
      description: 'Optional background verification services to give you peace of mind about your potential matches.',
      color: 'green'
    },
    {
      icon: Lock,
      title: 'Privacy Protection',
      description: 'Your personal information is encrypted and never shared without your explicit consent.',
      color: 'purple'
    },
    {
      icon: Eye,
      title: 'Photo Verification',
      description: 'AI-powered photo verification ensures that profile pictures are genuine and recent.',
      color: 'orange'
    },
    {
      icon: AlertTriangle,
      title: 'Report & Block',
      description: 'Easy-to-use reporting system to flag inappropriate behavior and block unwanted contacts.',
      color: 'red'
    },
    {
      icon: Heart,
      title: 'Safe Dating Tips',
      description: 'Expert advice and guidelines to help you navigate online dating safely and confidently.',
      color: 'pink'
    }
  ];

  const getIconColor = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: 'text-blue-600',
      green: 'text-green-600',
      purple: 'text-purple-600',
      orange: 'text-orange-600',
      red: 'text-red-600',
      pink: 'text-pink-600'
    };
    return colors[color] || 'text-gray-600';
  };

  const getBgColor = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: 'bg-blue-100',
      green: 'bg-green-100',
      purple: 'bg-purple-100',
      orange: 'bg-orange-100',
      red: 'bg-red-100',
      pink: 'bg-pink-100'
    };
    return colors[color] || 'bg-gray-100';
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Your Safety is Our Priority
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built comprehensive safety measures to ensure you can focus on finding love while we protect your privacy and security
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2 group"
              >
                <div className={`inline-flex p-4 rounded-2xl ${getBgColor(feature.color)} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className={`h-8 w-8 ${getIconColor(feature.color)}`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Trust Stats */}
        <div className="mt-16 bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-rose-600 mb-2">99.9%</div>
              <div className="text-gray-700 font-medium">Verified Profiles</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-600 mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Safety Monitoring</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-600 mb-2">256-bit</div>
              <div className="text-gray-700 font-medium">SSL Encryption</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-rose-600 mb-2">5 Star</div>
              <div className="text-gray-700 font-medium">Safety Rating</div>
            </div>
          </div>
        </div>

        {/* Safety Guidelines */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Safety Guidelines</h3>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Follow these simple guidelines to ensure a safe and positive experience on our platform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="font-bold mb-3">✓ Do's</h4>
              <ul className="space-y-2 text-blue-100">
                <li>• Keep personal information private initially</li>
                <li>• Meet in public places for first dates</li>
                <li>• Trust your instincts about people</li>
                <li>• Report suspicious behavior immediately</li>
                <li>• Use our in-app messaging system</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h4 className="font-bold mb-3">✗ Don'ts</h4>
              <ul className="space-y-2 text-blue-100">
                <li>• Don't share financial information</li>
                <li>• Don't send money to anyone</li>
                <li>• Don't share home address early</li>
                <li>• Don't ignore red flags</li>
                <li>• Don't meet in private locations initially</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSafety;