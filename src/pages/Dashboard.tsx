import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Users, MessageCircle, Settings, Edit, Search, Crown, Shield, Eye, Star } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import DashboardLayout from '../components/DashboardLayout';

const Dashboard: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const stats = [
    { icon: Eye, label: 'Profile Views', value: '127', color: 'blue' },
    { icon: Heart, label: 'Interests Received', value: '23', color: 'rose' },
    { icon: MessageCircle, label: 'Messages', value: '8', color: 'green' },
    { icon: Users, label: 'Matches', value: '45', color: 'purple' }
  ];

  const recentActivity = [
    { type: 'view', message: 'Priya from Colombo viewed your profile', time: '2 hours ago' },
    { type: 'interest', message: 'You received interest from Kavya in Kandy', time: '5 hours ago' },
    { type: 'message', message: 'New message from Anjali', time: '1 day ago' },
    { type: 'match', message: 'New match found in Galle district', time: '2 days ago' }
  ];

  const quickActions = [
    { icon: Edit, label: 'Edit Profile', action: () => navigate('/profile/edit'), color: 'blue' },
    { icon: Search, label: 'Search Matches', action: () => navigate('/search'), color: 'green' },
    { icon: MessageCircle, label: 'Messages', action: () => navigate('/chat'), color: 'purple' },
    { icon: Crown, label: 'Upgrade Plan', action: () => navigate('/subscription'), color: 'yellow' }
  ];

  const getIconColor = (color: string) => {
    const colors: { [key: string]: string } = {
      blue: 'text-blue-600 bg-blue-100',
      rose: 'text-rose-600 bg-rose-100',
      green: 'text-green-600 bg-green-100',
      purple: 'text-purple-600 bg-purple-100',
      yellow: 'text-yellow-600 bg-yellow-100'
    };
    return colors[color] || 'text-gray-600 bg-gray-100';
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-2xl p-8 text-white">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name}!</h1>
              <p className="text-rose-100 text-lg">
                Your journey to finding the perfect life partner continues here.
              </p>
            </div>
            <div className="flex items-center space-x-2">
              {user?.isVerified && (
                <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-1">
                  <Shield className="h-4 w-4" />
                  <span className="text-sm font-medium">Verified</span>
                </div>
              )}
              {user?.isPremium && (
                <div className="bg-yellow-500 text-yellow-900 px-3 py-1 rounded-full flex items-center space-x-1">
                  <Crown className="h-4 w-4" />
                  <span className="text-sm font-medium">Premium</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                    <p className="text-3xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${getIconColor(stat.color)}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <button
                  key={index}
                  onClick={action.action}
                  className="flex items-center space-x-3 p-4 rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all group"
                >
                  <div className={`p-2 rounded-lg ${getIconColor(action.color)} group-hover:scale-110 transition-transform`}>
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <span className="font-medium text-gray-700 group-hover:text-gray-900">{action.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="p-2 rounded-full bg-rose-100">
                  {activity.type === 'view' && <Eye className="h-4 w-4 text-rose-600" />}
                  {activity.type === 'interest' && <Heart className="h-4 w-4 text-rose-600" />}
                  {activity.type === 'message' && <MessageCircle className="h-4 w-4 text-rose-600" />}
                  {activity.type === 'match' && <Star className="h-4 w-4 text-rose-600" />}
                </div>
                <div className="flex-1">
                  <p className="text-gray-900 font-medium">{activity.message}</p>
                  <p className="text-gray-500 text-sm mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Completion */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Profile Completion</h2>
            <span className="text-2xl font-bold text-rose-600">75%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3 mb-4">
            <div className="bg-gradient-to-r from-rose-600 to-pink-600 h-3 rounded-full" style={{ width: '75%' }}></div>
          </div>
          <p className="text-gray-600 mb-4">
            Complete your profile to get better matches and increase your visibility.
          </p>
          <button
            onClick={() => navigate('/profile/edit')}
            className="bg-gradient-to-r from-rose-600 to-pink-600 text-white px-6 py-2 rounded-lg font-medium hover:from-rose-700 hover:to-pink-700 transition-all"
          >
            Complete Profile
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;