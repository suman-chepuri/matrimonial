import React, { createContext, useContext, useState } from 'react';

interface Profile {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female';
  religion: string;
  caste?: string;
  education: string;
  profession: string;
  district: string;
  province: string;
  aboutMe: string;
  expectations: string;
  photos: Array<{
    id: string;
    url: string;
    isPublic: boolean;
    isProfilePicture: boolean;
  }>;
  isIdVerified: boolean;
  lastActive: Date;
  interests: number;
  matches: number;
}

interface ProfileContextType {
  profile: Profile | null;
  updateProfile: (data: Partial<Profile>) => void;
  uploadPhoto: (file: File, isPublic: boolean) => Promise<string>;
  togglePhotoVisibility: (photoId: string) => void;
  deletePhoto: (photoId: string) => void;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (context === undefined) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};

export const ProfileProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<Profile | null>(null);

  const updateProfile = (data: Partial<Profile>) => {
    if (profile) {
      const updatedProfile = { ...profile, ...data };
      setProfile(updatedProfile);
      localStorage.setItem('profile', JSON.stringify(updatedProfile));
    }
  };

  const uploadPhoto = async (file: File, isPublic: boolean): Promise<string> => {
    // Simulate file upload
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const photoId = Date.now().toString();
    const photoUrl = URL.createObjectURL(file);
    
    if (profile) {
      const newPhoto = {
        id: photoId,
        url: photoUrl,
        isPublic,
        isProfilePicture: profile.photos.length === 0
      };
      
      const updatedProfile = {
        ...profile,
        photos: [...profile.photos, newPhoto]
      };
      
      setProfile(updatedProfile);
      localStorage.setItem('profile', JSON.stringify(updatedProfile));
    }
    
    return photoUrl;
  };

  const togglePhotoVisibility = (photoId: string) => {
    if (profile) {
      const updatedPhotos = profile.photos.map(photo =>
        photo.id === photoId ? { ...photo, isPublic: !photo.isPublic } : photo
      );
      
      const updatedProfile = { ...profile, photos: updatedPhotos };
      setProfile(updatedProfile);
      localStorage.setItem('profile', JSON.stringify(updatedProfile));
    }
  };

  const deletePhoto = (photoId: string) => {
    if (profile) {
      const updatedPhotos = profile.photos.filter(photo => photo.id !== photoId);
      const updatedProfile = { ...profile, photos: updatedPhotos };
      setProfile(updatedProfile);
      localStorage.setItem('profile', JSON.stringify(updatedProfile));
    }
  };

  return (
    <ProfileContext.Provider value={{
      profile,
      updateProfile,
      uploadPhoto,
      togglePhotoVisibility,
      deletePhoto
    }}>
      {children}
    </ProfileContext.Provider>
  );
};