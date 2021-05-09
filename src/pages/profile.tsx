import React, { Component } from 'react';
import ProfileContainer from '../containers/Profile';
import withAuth from '../components/withPrivateRoute';


const Profile = () => {
  return (
    <div>
      <ProfileContainer />
    </div>
  );
};

export default Profile;
