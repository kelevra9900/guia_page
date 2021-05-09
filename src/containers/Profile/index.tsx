import React, { useState, useEffect, Fragment } from 'react';
import { Card } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import { Contain } from './profile.style';

const ProfileContainer = () => {
  return (
    <Contain>
      <Grid container spacing={6} xs={12} sm={12}>
        <Grid item xs={8}>
          <Card>
            <p>prueba</p>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <p>prueba</p>
          </Card>
        </Grid>
      </Grid>
    </Contain>
  );
};

export default ProfileContainer;
