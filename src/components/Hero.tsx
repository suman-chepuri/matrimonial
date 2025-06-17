import React from 'react';
import { Search, Heart, Users, Shield } from 'lucide-react';

interface HeroProps {
  onGetStarted: () => void;
}

const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <section className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Find Your
              <span className="bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent block">
                Perfect Match
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl">
              Join millions of people who have found their life partner through our trusted matrimonial platform. 
              Your journey to happiness starts here.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 mb-10">
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600">2M+</div>
                <div className="text-gray-600">Happy Couples</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600">50M+</div>
                <div className="text-gray-600">Registered Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-rose-600">180+</div>
                <div className="text-gray-600">Countries</div>
              </div>
            </div>

            <button
              onClick={onGetStarted}
              className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-rose-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Start Your Journey
            </button>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <img
                src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Happy couple"
                className="w-full h-96 object-cover rounded-xl"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white p-3 rounded-full shadow-lg">
                <Heart className="h-6 w-6 fill-current" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-gray-700">2,847 online now</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center justify-center space-x-3 p-6 bg-white/60 backdrop-blur-sm rounded-xl">
            <Shield className="h-8 w-8 text-rose-600" />
            <div>
              <div className="font-semibold text-gray-900">100% Verified</div>
              <div className="text-gray-600">Profiles & Photos</div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3 p-6 bg-white/60 backdrop-blur-sm rounded-xl">
            <Users className="h-8 w-8 text-rose-600" />
            <div>
              <div className="font-semibold text-gray-900">Smart Matching</div>
              <div className="text-gray-600">AI-Powered Algorithm</div>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-3 p-6 bg-white/60 backdrop-blur-sm rounded-xl">
            <Heart className="h-8 w-8 text-rose-600" />
            <div>
              <div className="font-semibold text-gray-900">Success Stories</div>
              <div className="text-gray-600">Thousands Daily</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;