import React from 'react';
import { Heart, Menu, X, Search, Bell, MessageCircle } from 'lucide-react';

interface HeaderProps {
  onAuthClick: (mode: 'login' | 'register') => void;
}

const Header: React.FC<HeaderProps> = ({ onAuthClick }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-rose-600 to-pink-600 p-2 rounded-lg">
              <Heart className="h-6 w-6 text-white fill-current" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
              SoulMate
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
              Browse Profiles
            </a>
            <a href="#" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
              Search
            </a>
            <a href="#" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
              Success Stories
            </a>
            <a href="#" className="text-gray-700 hover:text-rose-600 font-medium transition-colors">
              Help
            </a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={() => onAuthClick('login')}
              className="text-gray-700 hover:text-rose-600 font-medium transition-colors"
            >
              Login
            </button>
            <button
              onClick={() => onAuthClick('register')}
              className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-2 rounded-full font-medium hover:from-rose-700 hover:to-pink-700 transition-all transform hover:scale-105"
            >
              Join Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-100 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-rose-600 font-medium">
                Browse Profiles
              </a>
              <a href="#" className="text-gray-700 hover:text-rose-600 font-medium">
                Search
              </a>
              <a href="#" className="text-gray-700 hover:text-rose-600 font-medium">
                Success Stories
              </a>
              <a href="#" className="text-gray-700 hover:text-rose-600 font-medium">
                Help
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-100">
                <button
                  onClick={() => onAuthClick('login')}
                  className="text-left text-gray-700 hover:text-rose-600 font-medium"
                >
                  Login
                </button>
                <button
                  onClick={() => onAuthClick('register')}
                  className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-2 rounded-full font-medium text-center"
                >
                  Join Free
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;