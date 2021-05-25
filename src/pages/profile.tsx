import React from 'react';
import Head from '@containers/Head';

import ProfileContainer from '@containers/Profile';
import withAuth from '@components/withPrivateRoute';
import Header from '@components/Header';


const Profile = () => {
  return (
    <div style={{backgroundColor: '#efefef'}}>
      <Head />
      <Header />
      <ProfileContainer />
    </div>
  );
};

export default withAuth(Profile);
