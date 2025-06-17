import React from 'react';
import { Heart, Quote } from 'lucide-react';

const SuccessStories: React.FC = () => {
  const stories = [
    {
      id: 1,
      couple: "Rajesh & Meera",
      weddingDate: "March 2024",
      story: "We found each other through SoulMate and realized we shared the same values and dreams. Our families connected instantly, and now we're planning our future together.",
      photo: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Delhi, India"
    },
    {
      id: 2,
      couple: "Amit & Priya",
      weddingDate: "January 2024",
      story: "After talking for months, we knew we were meant to be. SoulMate helped us find not just love, but a best friend for life. Thank you for bringing us together!",
      photo: "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Mumbai, India"
    },
    {
      id: 3,
      couple: "Kavya & Arjun",
      weddingDate: "February 2024",
      story: "We were both busy professionals who had given up on finding love. SoulMate's matching algorithm brought us together, and we instantly clicked. Forever grateful!",
      photo: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600",
      location: "Bangalore, India"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real couples who found their perfect match through our platform
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl p-8 relative overflow-hidden group hover:shadow-xl transition-all duration-300">
              {/* Background Heart */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Heart className="h-16 w-16 text-rose-500" />
              </div>
              
              {/* Quote Icon */}
              <div className="absolute top-6 left-6">
                <Quote className="h-8 w-8 text-rose-500" />
              </div>

              {/* Story Content */}
              <div className="relative z-10 pt-8">
                <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                  "{story.story}"
                </p>

                {/* Couple Photo and Info */}
                <div className="flex items-center space-x-4">
                  <img
                    src={story.photo}
                    alt={story.couple}
                    className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-lg"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{story.couple}</h4>
                    <p className="text-rose-600 font-medium">{story.weddingDate}</p>
                    <p className="text-gray-500 text-sm">{story.location}</p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-rose-200 to-transparent rounded-full opacity-50 transform translate-x-16 translate-y-16"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Write Your Success Story?</h3>
            <p className="text-rose-100 mb-6">
              Join thousands of couples who found their perfect match through our platform
            </p>
            <button className="bg-white text-rose-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;