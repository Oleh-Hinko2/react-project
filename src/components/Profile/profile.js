import React from 'react';
import './profile.scss';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div className="profile">
      <ProfileInfo />
      <MyPosts />
    </div>
  );
}

export default Profile;
