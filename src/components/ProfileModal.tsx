import React from 'react';
import { X, MapPin, Briefcase, GraduationCap, Heart, MessageCircle, Phone, Star, Calendar, Users } from 'lucide-react';

interface Profile {
  id: number;
  name: string;
  age: number;
  location: string;
  profession: string;
  education: string;
  photo: string;
  isVerified: boolean;
  isOnline: boolean;
  rating: number;
}

interface ProfileModalProps {
  profile: Profile;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ profile, onClose }) => {
  const additionalPhotos = [
    "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400"
  ];

  const hobbies = ["Reading", "Traveling", "Cooking", "Music", "Photography"];
  const languages = ["English", "Hindi", "Marathi"];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-full h-64 object-cover rounded-t-2xl"
          />
          <div className="absolute top-4 right-4">
            <button
              onClick={onClose}
              className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
            >
              <X className="h-6 w-6 text-gray-700" />
            </button>
          </div>
          {profile.isOnline && (
            <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span>Online</span>
            </div>
          )}
          {profile.isVerified && (
            <div className="absolute bottom-4 right-4 bg-blue-500 text-white p-2 rounded-full">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          )}
        </div>

        <div className="p-8">
          {/* Basic Info */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{profile.name}</h2>
              <div className="flex items-center space-x-4 text-gray-600">
                <span className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{profile.age} years old</span>
                </span>
                <span className="flex items-center space-x-1">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span>{profile.rating}</span>
                </span>
              </div>
            </div>
            <div className="flex space-x-3">
              <button className="bg-gradient-to-r from-rose-600 to-pink-600 text-white p-3 rounded-full hover:from-rose-700 hover:to-pink-700 transition-all">
                <Heart className="h-6 w-6" />
              </button>
              <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                <MessageCircle className="h-6 w-6" />
              </button>
              <button className="bg-green-600 text-white p-3 rounded-full hover:bg-green-700 transition-colors">
                <Phone className="h-6 w-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">About Me</h3>
                <p className="text-gray-600 leading-relaxed">
                  I'm a passionate {profile.profession.toLowerCase()} who believes in living life to the fullest. 
                  I value honesty, kindness, and a good sense of humor. I'm looking for someone who shares 
                  similar values and is ready to build a beautiful life together. Family means everything 
                  to me, and I hope to find someone who feels the same way.
                </p>
              </div>

              {/* Photos */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">More Photos</h3>
                <div className="grid grid-cols-3 gap-4">
                  {additionalPhotos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`${profile.name} photo ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg hover:opacity-75 transition-opacity cursor-pointer"
                    />
                  ))}
                </div>
              </div>

              {/* Hobbies & Interests */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Hobbies & Interests</h3>
                <div className="flex flex-wrap gap-2">
                  {hobbies.map((hobby, index) => (
                    <span
                      key={index}
                      className="bg-rose-100 text-rose-800 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {hobby}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Basic Details */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Basic Details</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">{profile.location}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Briefcase className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">{profile.profession}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="h-5 w-5 text-gray-500" />
                    <span className="text-gray-700">{profile.education}</span>
                  </div>
                </div>
              </div>

              {/* Personal Details */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Personal Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Height:</span>
                    <span className="text-gray-700">5'6"</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Religion:</span>
                    <span className="text-gray-700">Hindu</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Caste:</span>
                    <span className="text-gray-700">Brahmin</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Mother Tongue:</span>
                    <span className="text-gray-700">Hindi</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Marital Status:</span>
                    <span className="text-gray-700">Never Married</span>
                  </div>
                </div>
              </div>

              {/* Languages */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((language, index) => (
                    <span
                      key={index}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>

              {/* Family Details */}
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Family Details</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Father:</span>
                    <span className="text-gray-700">Business</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Mother:</span>
                    <span className="text-gray-700">Homemaker</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Siblings:</span>
                    <span className="text-gray-700">1 Sister</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Family Type:</span>
                    <span className="text-gray-700">Nuclear</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center space-x-4 mt-8 pt-8 border-t border-gray-200">
            <button className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold hover:from-rose-700 hover:to-pink-700 transition-all transform hover:scale-105 flex items-center space-x-2">
              <Heart className="h-5 w-5" />
              <span>Express Interest</span>
            </button>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2">
              <MessageCircle className="h-5 w-5" />
              <span>Send Message</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileModal;