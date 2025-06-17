import React from 'react';
import { Check, Star, Crown, Sparkles } from 'lucide-react';

interface MembershipPlansProps {
  onSelectPlan: (plan: string) => void;
}

const MembershipPlans: React.FC<MembershipPlansProps> = ({ onSelectPlan }) => {
  const plans = [
    {
      id: 'free',
      name: 'Free',
      price: '₹0',
      period: 'Forever',
      description: 'Perfect for getting started',
      icon: Star,
      color: 'gray',
      features: [
        'Create your profile',
        'View up to 10 profiles daily',
        'Express interest to 5 profiles',
        'Basic search filters',
        'Send up to 3 messages'
      ],
      limitations: [
        'Limited profile views',
        'Basic matching algorithm',
        'No priority support'
      ]
    },
    {
      id: 'premium',
      name: 'Premium',
      price: '₹2,999',
      period: 'per month',
      description: 'Most popular choice',
      icon: Crown,
      color: 'rose',
      popular: true,
      features: [
        'Unlimited profile views',
        'Advanced search filters',
        'See who viewed your profile',
        'Unlimited messaging',
        'Priority customer support',
        'Profile boost (2x visibility)',
        'Video call feature',
        'Advanced matching algorithm'
      ]
    },
    {
      id: 'elite',
      name: 'Elite',
      price: '₹4,999',
      period: 'per month',
      description: 'For serious commitment seekers',
      icon: Sparkles,
      color: 'purple',
      features: [
        'Everything in Premium',
        'Dedicated relationship advisor',
        'Profile verification badge',
        'Background verification',
        'Exclusive elite member community',
        'Personal matchmaking assistance',
        'Wedding planning support',
        'Astrology compatibility matching'
      ]
    }
  ];

  const getIconColor = (color: string) => {
    switch (color) {
      case 'rose': return 'text-rose-600';
      case 'purple': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };

  const getBgColor = (color: string) => {
    switch (color) {
      case 'rose': return 'bg-rose-600';
      case 'purple': return 'bg-purple-600';
      default: return 'bg-gray-600';
    }
  };

  const getGradient = (color: string) => {
    switch (color) {
      case 'rose': return 'bg-gradient-to-br from-rose-50 to-pink-50';
      case 'purple': return 'bg-gradient-to-br from-purple-50 to-pink-50';
      default: return 'bg-gray-50';
    }
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Perfect Plan
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find the plan that matches your needs and start your journey to finding true love
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan) => {
            const IconComponent = plan.icon;
            return (
              <div
                key={plan.id}
                className={`relative rounded-2xl p-8 ${plan.popular ? 'ring-2 ring-rose-500 shadow-2xl scale-105' : 'shadow-lg hover:shadow-xl'} ${getGradient(plan.color)} transition-all duration-300 hover:-translate-y-2`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div className={`inline-flex p-3 rounded-full ${getGradient(plan.color)} border-2 border-white shadow-lg mb-4`}>
                    <IconComponent className={`h-8 w-8 ${getIconColor(plan.color)}`} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </div>

                {/* Pricing */}
                <div className="text-center mb-8">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    {plan.period && (
                      <span className="text-gray-600 ml-2">/{plan.period}</span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className={`p-1 rounded-full ${getBgColor(plan.color)} flex-shrink-0 mt-0.5`}>
                        <Check className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onSelectPlan(plan.id)}
                  className={`w-full py-4 rounded-xl font-semibold transition-all ${
                    plan.popular
                      ? 'bg-gradient-to-r from-rose-600 to-pink-600 text-white hover:from-rose-700 hover:to-pink-700 shadow-lg hover:shadow-xl'
                      : `border-2 border-${plan.color}-600 text-${plan.color}-600 hover:bg-${plan.color}-600 hover:text-white`
                  }`}
                >
                  {plan.id === 'free' ? 'Get Started Free' : 'Choose Plan'}
                </button>

                {plan.id !== 'free' && (
                  <p className="text-center text-gray-500 text-sm mt-4">
                    30-day money-back guarantee
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            All plans include our core features and 24/7 customer support
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>100% Privacy Protected</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Verified Profiles</span>
            </div>
            <div className="flex items-center space-x-2">
              <Check className="h-4 w-4 text-green-500" />
              <span>Cancel Anytime</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MembershipPlans;