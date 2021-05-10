import React from 'react';
import Head from '../containers/Head';

import ProfileContainer from '../containers/Profile';
import withAuth from '../components/withPrivateRoute';


const Profile = () => {
  return (
    <div style={{backgroundColor: '#efefef'}}>
      <Head />
      <ProfileContainer />
    </div>
  );
};

export default Profile;
