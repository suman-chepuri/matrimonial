import React from 'react';
import { Heart, MapPin, Briefcase, GraduationCap, Star } from 'lucide-react';

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

interface FeaturedProfilesProps {
  onProfileClick: (profile: Profile) => void;
}

const FeaturedProfiles: React.FC<FeaturedProfilesProps> = ({ onProfileClick }) => {
  const profiles: Profile[] = [
    {
      id: 1,
      name: "Priya Sharma",
      age: 26,
      location: "Mumbai, India",
      profession: "Software Engineer",
      education: "Computer Science",
      photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      isVerified: true,
      isOnline: true,
      rating: 4.9
    },
    {
      id: 2,
      name: "Arjun Patel",
      age: 29,
      location: "Delhi, India",
      profession: "Marketing Manager",
      education: "MBA",
      photo: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      isVerified: true,
      isOnline: false,
      rating: 4.8
    },
    {
      id: 3,
      name: "Ananya Singh",
      age: 24,
      location: "Bangalore, India",
      profession: "Doctor",
      education: "MBBS",
      photo: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      isVerified: true,
      isOnline: true,
      rating: 4.9
    },
    {
      id: 4,
      name: "Rohit Kumar",
      age: 31,
      location: "Pune, India",
      profession: "Business Analyst",
      education: "Engineering",
      photo: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400",
      isVerified: true,
      isOnline: true,
      rating: 4.7
    },
    {
      id: 5,
      name: "Kavya Reddy",
      age: 27,
      location: "Hyderabad, India",
      profession: "Teacher",
      education: "M.Ed",
      photo: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400",
      isVerified: true,
      isOnline: false,
      rating: 4.8
    },
    {
      id: 6,
      name: "Vikram Agarwal",
      age: 28,
      location: "Chennai, India",
      profession: "Architect",
      education: "B.Arch",
      photo: "https://images.pexels.com/photos/1484794/pexels-photo-1484794.jpeg?auto=compress&cs=tinysrgb&w=400",
      isVerified: true,
      isOnline: true,
      rating: 4.9
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Featured Profiles
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover verified profiles of people who are actively looking for their life partner
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              onClick={() => onProfileClick(profile)}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2 overflow-hidden group"
            >
              {/* Profile Image */}
              <div className="relative">
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {profile.isOnline && (
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>Online</span>
                  </div>
                )}
                {profile.isVerified && (
                  <div className="absolute top-4 right-4 bg-blue-500 text-white p-2 rounded-full">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
                <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-500 fill-current" />
                  <span className="text-sm font-medium">{profile.rating}</span>
                </div>
              </div>

              {/* Profile Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{profile.name}</h3>
                  <span className="text-gray-500 text-sm">{profile.age} years</span>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{profile.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <Briefcase className="h-4 w-4" />
                    <span className="text-sm">{profile.profession}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <GraduationCap className="h-4 w-4" />
                    <span className="text-sm">{profile.education}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-100">
                  <button className="flex items-center space-x-2 text-rose-600 hover:text-rose-700 font-medium transition-colors">
                    <Heart className="h-4 w-4" />
                    <span>Express Interest</span>
                  </button>
                  <button className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-rose-700 hover:to-pink-700 transition-all">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-rose-700 hover:to-pink-700 transition-all transform hover:scale-105">
            View All Profiles
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProfiles;