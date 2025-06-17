import React, { useState } from 'react';
import { Search, MapPin, Calendar, Heart, Filter } from 'lucide-react';

const SearchSection: React.FC = () => {
  const [searchForm, setSearchForm] = useState({
    lookingFor: 'bride',
    ageFrom: '18',
    ageTo: '35',
    religion: '',
    location: '',
    education: ''
  });

  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setSearchForm(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Find Your Perfect Match
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Use our advanced search to find someone who matches your preferences and values
          </p>
        </div>

        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-8 shadow-lg">
          <form className="space-y-6">
            {/* Basic Search Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Looking for
                </label>
                <select
                  value={searchForm.lookingFor}
                  onChange={(e) => handleInputChange('lookingFor', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                >
                  <option value="bride">Bride</option>
                  <option value="groom">Groom</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Age Range
                </label>
                <div className="flex space-x-2">
                  <select
                    value={searchForm.ageFrom}
                    onChange={(e) => handleInputChange('ageFrom', e.target.value)}
                    className="flex-1 px-3 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                  >
                    {Array.from({ length: 50 }, (_, i) => i + 18).map(age => (
                      <option key={age} value={age}>{age}</option>
                    ))}
                  </select>
                  <span className="flex items-center text-gray-500">to</span>
                  <select
                    value={searchForm.ageTo}
                    onChange={(e) => handleInputChange('ageTo', e.target.value)}
                    className="flex-1 px-3 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                  >
                    {Array.from({ length: 50 }, (_, i) => i + 18).map(age => (
                      <option key={age} value={age}>{age}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Religion
                </label>
                <select
                  value={searchForm.religion}
                  onChange={(e) => handleInputChange('religion', e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                >
                  <option value="">Any Religion</option>
                  <option value="hindu">Hindu</option>
                  <option value="muslim">Muslim</option>
                  <option value="christian">Christian</option>
                  <option value="sikh">Sikh</option>
                  <option value="buddhist">Buddhist</option>
                  <option value="jain">Jain</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Location
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchForm.location}
                    onChange={(e) => handleInputChange('location', e.target.value)}
                    placeholder="City, State, Country"
                    className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Advanced Search Toggle */}
            <div className="flex justify-center">
              <button
                type="button"
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="flex items-center space-x-2 text-rose-600 hover:text-rose-700 font-medium transition-colors"
              >
                <Filter className="h-4 w-4" />
                <span>{showAdvanced ? 'Hide' : 'Show'} Advanced Filters</span>
              </button>
            </div>

            {/* Advanced Filters */}
            {showAdvanced && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Education
                  </label>
                  <select
                    value={searchForm.education}
                    onChange={(e) => handleInputChange('education', e.target.value)}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all"
                  >
                    <option value="">Any Education</option>
                    <option value="high-school">High School</option>
                    <option value="bachelors">Bachelor's Degree</option>
                    <option value="masters">Master's Degree</option>
                    <option value="phd">PhD</option>
                    <option value="professional">Professional Degree</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Profession
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all">
                    <option value="">Any Profession</option>
                    <option value="software">Software/IT</option>
                    <option value="doctor">Doctor</option>
                    <option value="engineer">Engineer</option>
                    <option value="teacher">Teacher</option>
                    <option value="business">Business</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Annual Income
                  </label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all">
                    <option value="">Any Income</option>
                    <option value="0-5">₹0 - ₹5 Lakh</option>
                    <option value="5-10">₹5 - ₹10 Lakh</option>
                    <option value="10-20">₹10 - ₹20 Lakh</option>
                    <option value="20-50">₹20 - ₹50 Lakh</option>
                    <option value="50+">₹50+ Lakh</option>
                  </select>
                </div>
              </div>
            )}

            {/* Search Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:from-rose-700 hover:to-pink-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center space-x-2"
              >
                <Search className="h-5 w-5" />
                <span>Search Matches</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchSection;