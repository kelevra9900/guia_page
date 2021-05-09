import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '../../components/ProfileSection/Card/Card';
import CardHeader from '../../components/ProfileSection/Card/CardHeader';
import CardBody from '../../components/ProfileSection/Card/CardBody';
import { Input, InputLabel } from '@material-ui/core';

const ProfileContainer = () => {
  return(
    <Grid xs={12} sm={12} md={8} item={true}>
      <Card>
        <CardHeader color="primary">
          <h4>EDITA TU CUENTA</h4>
          <p>Completa tu información</p>
        </CardHeader>
        <CardBody>
          <InputLabel style={{color: "#AAAAAA"}}>
            Información de contacto
          </InputLabel>
          <Grid>
            <Grid xs={12} sm={12} md={5} item={true}>
              <Input 
                aria-label="Nombre completo"
                required
                onChange={(value) => {
                  console.log('Valor del input')
                }}
              />
            </Grid>
          </Grid>
        </CardBody>
      </Card>
    </Grid>
  );
};

export default ProfileContainer;
