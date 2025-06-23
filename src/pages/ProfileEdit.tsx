import React, { useState } from 'react';
import { Camera, Upload, Eye, EyeOff, Trash2, Shield, CheckCircle } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';
import { useProfile } from '../contexts/ProfileContext';

const ProfileEdit: React.FC = () => {
  const { profile, updateProfile, uploadPhoto, togglePhotoVisibility, deletePhoto } = useProfile();
  const [activeTab, setActiveTab] = useState('basic');
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    religion: '',
    caste: '',
    education: '',
    profession: '',
    district: '',
    province: '',
    aboutMe: '',
    expectations: '',
    height: '',
    maritalStatus: '',
    motherTongue: '',
    income: ''
  });

  const districts = [
    'Colombo', 'Gampaha', 'Kalutara', 'Kandy', 'Matale', 'Nuwara Eliya',
    'Galle', 'Matara', 'Hambantota', 'Jaffna', 'Kilinochchi', 'Mannar',
    'Vavuniya', 'Mullaitivu', 'Batticaloa', 'Ampara', 'Trincomalee',
    'Kurunegala', 'Puttalam', 'Anuradhapura', 'Polonnaruwa', 'Badulla',
    'Moneragala', 'Ratnapura', 'Kegalle'
  ];

  const provinces = [
    'Western', 'Central', 'Southern', 'Northern', 'Eastern',
    'North Western', 'North Central', 'Uva', 'Sabaragamuwa'
  ];

  const religions = [
    'Buddhism', 'Christianity', 'Hinduism', 'Islam', 'Other'
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePhotoUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      try {
        await uploadPhoto(file, false); // Default to private
      } catch (error) {
        console.error('Photo upload failed:', error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleSave = () => {
    updateProfile(formData);
    alert('Profile updated successfully!');
  };

  const tabs = [
    { id: 'basic', label: 'Basic Info' },
    { id: 'personal', label: 'Personal Details' },
    { id: 'photos', label: 'Photos' },
    { id: 'about', label: 'About & Expectations' },
    { id: 'verification', label: 'ID Verification' }
  ];

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200">
          {/* Header */}
          <div className="px-6 py-4 border-b border-gray-200">
            <h1 className="text-2xl font-bold text-gray-900">Edit Profile</h1>
            <p className="text-gray-600 mt-1">Complete your profile to get better matches</p>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-rose-500 text-rose-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="p-6">
            {activeTab === 'basic' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                    <input
                      type="number"
                      value={formData.age}
                      onChange={(e) => handleInputChange('age', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="Enter your age"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                    <select
                      value={formData.gender}
                      onChange={(e) => handleInputChange('gender', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Religion</label>
                    <select
                      value={formData.religion}
                      onChange={(e) => handleInputChange('religion', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    >
                      <option value="">Select Religion</option>
                      {religions.map(religion => (
                        <option key={religion} value={religion}>{religion}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">District</label>
                    <select
                      value={formData.district}
                      onChange={(e) => handleInputChange('district', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    >
                      <option value="">Select District</option>
                      {districts.map(district => (
                        <option key={district} value={district}>{district}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Province</label>
                    <select
                      value={formData.province}
                      onChange={(e) => handleInputChange('province', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    >
                      <option value="">Select Province</option>
                      {provinces.map(province => (
                        <option key={province} value={province}>{province}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'personal' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Education</label>
                    <input
                      type="text"
                      value={formData.education}
                      onChange={(e) => handleInputChange('education', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="e.g., Bachelor's in Engineering"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Profession</label>
                    <input
                      type="text"
                      value={formData.profession}
                      onChange={(e) => handleInputChange('profession', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="e.g., Software Engineer"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Height</label>
                    <input
                      type="text"
                      value={formData.height}
                      onChange={(e) => handleInputChange('height', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                      placeholder="e.g., 5'6\""
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Marital Status</label>
                    <select
                      value={formData.maritalStatus}
                      onChange={(e) => handleInputChange('maritalStatus', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    >
                      <option value="">Select Status</option>
                      <option value="never-married">Never Married</option>
                      <option value="divorced">Divorced</option>
                      <option value="widowed">Widowed</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mother Tongue</label>
                    <select
                      value={formData.motherTongue}
                      onChange={(e) => handleInputChange('motherTongue', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    >
                      <option value="">Select Language</option>
                      <option value="sinhala">Sinhala</option>
                      <option value="tamil">Tamil</option>
                      <option value="english">English</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Annual Income</label>
                    <select
                      value={formData.income}
                      onChange={(e) => handleInputChange('income', e.target.value)}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    >
                      <option value="">Select Income Range</option>
                      <option value="below-500k">Below Rs. 500,000</option>
                      <option value="500k-1m">Rs. 500,000 - 1,000,000</option>
                      <option value="1m-2m">Rs. 1,000,000 - 2,000,000</option>
                      <option value="2m-5m">Rs. 2,000,000 - 5,000,000</option>
                      <option value="above-5m">Above Rs. 5,000,000</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'photos' && (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
                    <Camera className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Upload Photos</h3>
                    <p className="text-gray-600 mb-4">
                      Add photos to make your profile more attractive. All photos are blurred by default.
                    </p>
                    <label className="inline-flex items-center space-x-2 bg-rose-600 text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-rose-700 transition-colors">
                      <Upload className="h-5 w-5" />
                      <span>Choose Photos</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handlePhotoUpload}
                        className="hidden"
                        disabled={isUploading}
                      />
                    </label>
                  </div>
                </div>

                {profile?.photos && profile.photos.length > 0 && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Your Photos</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {profile.photos.map((photo) => (
                        <div key={photo.id} className="relative group">
                          <img
                            src={photo.url}
                            alt="Profile"
                            className={`w-full h-48 object-cover rounded-lg ${!photo.isPublic ? 'filter blur-sm' : ''}`}
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center space-x-2">
                            <button
                              onClick={() => togglePhotoVisibility(photo.id)}
                              className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                              title={photo.isPublic ? 'Make Private' : 'Make Public'}
                            >
                              {photo.isPublic ? (
                                <EyeOff className="h-4 w-4 text-gray-700" />
                              ) : (
                                <Eye className="h-4 w-4 text-gray-700" />
                              )}
                            </button>
                            <button
                              onClick={() => deletePhoto(photo.id)}
                              className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                              title="Delete Photo"
                            >
                              <Trash2 className="h-4 w-4 text-red-600" />
                            </button>
                          </div>
                          <div className="absolute top-2 right-2">
                            {photo.isPublic ? (
                              <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs">
                                Public
                              </div>
                            ) : (
                              <div className="bg-gray-500 text-white px-2 py-1 rounded-full text-xs">
                                Private
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === 'about' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">About Me</label>
                  <textarea
                    value={formData.aboutMe}
                    onChange={(e) => handleInputChange('aboutMe', e.target.value)}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="Tell others about yourself, your interests, values, and what makes you unique..."
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Partner Expectations</label>
                  <textarea
                    value={formData.expectations}
                    onChange={(e) => handleInputChange('expectations', e.target.value)}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                    placeholder="Describe what you're looking for in a life partner..."
                  />
                </div>
              </div>
            )}

            {activeTab === 'verification' && (
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <div className="flex items-start space-x-3">
                    <Shield className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="text-lg font-medium text-blue-900 mb-2">ID Verification</h3>
                      <p className="text-blue-700 mb-4">
                        Verify your identity to get a green "Verified" badge on your profile. 
                        This increases trust and helps you get more matches.
                      </p>
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-medium text-blue-900 mb-2">
                            Upload Government ID (NIC/Passport/Driving License)
                          </label>
                          <input
                            type="file"
                            accept="image/*,.pdf"
                            className="w-full px-4 py-3 rounded-lg border border-blue-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                          Submit for Verification
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-600" />
                    <div>
                      <h3 className="text-lg font-medium text-green-900">Verification Benefits</h3>
                      <ul className="text-green-700 mt-2 space-y-1">
                        <li>• Green "Verified" badge on your profile</li>
                        <li>• Higher visibility in search results</li>
                        <li>• Increased trust from other members</li>
                        <li>• Access to verified members only section</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-4">
            <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-gradient-to-r from-rose-600 to-pink-600 text-white rounded-lg font-medium hover:from-rose-700 hover:to-pink-700 transition-all"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProfileEdit;