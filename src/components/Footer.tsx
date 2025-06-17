import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-rose-600 to-pink-600 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white fill-current" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                SoulMate
              </span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              India's most trusted matrimonial platform helping millions find their perfect life partner with verified profiles and advanced matching technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Browse Profiles</a></li>
              <li><a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Membership Plans</a></li>
              <li><a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Safety Guidelines</a></li>
              <li><a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Mobile App</a></li>
              <li><a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Wedding Services</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Refund Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-rose-400 transition-colors">Report Profile</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-rose-400 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>123 Love Lane</p>
                  <p>Mumbai, Maharashtra 400001</p>
                  <p>India</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-rose-400 flex-shrink-0" />
                <a href="tel:+911234567890" className="text-gray-400 hover:text-rose-400 transition-colors">
                  +91 12345 67890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-rose-400 flex-shrink-0" />
                <a href="mailto:support@soulmate.com" className="text-gray-400 hover:text-rose-400 transition-colors">
                  support@soulmate.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* App Download Section */}
        <div className="py-8 border-t border-gray-800">
          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold mb-4">Download Our Mobile App</h3>
            <p className="text-gray-400 mb-6">Find your perfect match on the go with our mobile app</p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a href="#" className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>
              <a href="#" className="inline-flex items-center space-x-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors">
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2024 SoulMate. All rights reserved.
            </div>
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-rose-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-rose-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-rose-400 transition-colors">Cookies</a>
              <a href="#" className="hover:text-rose-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;