import React from 'react';
import Grid from '@material-ui/core/Grid';
import Select from 'react-select';
import { InputLabel } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import makeAnimated from 'react-select/animated';

import { Box } from './profile.style';
import cobertura from '../../data/';

import Card from '../../components/ProfileSection/Card/Card';
import CardHeader from '../../components/ProfileSection/Card/CardHeader';
import CardBody from '../../components/ProfileSection/Card/CardBody';
import Input from '../../components/Input';
import GridContainer from '../../components/ProfileSection/Grid/GridContainer';
import GridItem from '../../components/ProfileSection/Grid/GridItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    content: {
      marginTop: '120px',
      marginLeft: '50px',
      marginRight: '50px',
    },
  })
);

const ProfileContainer = () => {
  const animatedComponents = makeAnimated();
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Grid xs={12}>
        <Card>
          <CardHeader color="primary">
            <h4>EDITA TU CUENTA</h4>
            <p>Completa tu información</p>
          </CardHeader>
          <CardBody>
            <InputLabel style={{ color: '#AAAAAA' }}>
              Información de contacto
            </InputLabel>
            <GridContainer>
              <GridItem xs={12} sm={12} md={5}>
                <Box>
                  <Input
                    label="Nombre de contacto"
                    inputType="text"
                    required
                    isMaterial
                    onChange={(value) => {
                      console.log('Valor', value);
                    }}
                  />
                </Box>
              </GridItem>

              <GridItem xs={12} sm={12} md={3}>
                <Box>
                  <Input
                    label="Puesto"
                    inputType="text"
                    required
                    isMaterial
                    onChange={(value) => {
                      console.log('Valor', value);
                    }}
                  />
                </Box>
              </GridItem>

              <GridItem xs={12} sm={12} md={4}>
                <Box>
                  <Input
                    label="Correo"
                    inputType="email"
                    required
                    isMaterial
                    onChange={(value) => {
                      console.log('Valor', value);
                    }}
                  />
                </Box>
              </GridItem>
            </GridContainer>
            <Box>
              <InputLabel style={{ color: '#565656' }}>
                Información de la empresa *
              </InputLabel>
            </Box>

            <Box>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <Input
                    required
                    label="Nombre de la empresa"
                    isMaterial
                    inputType="text"
                    onChange={(value) => {
                      console.log('value');
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Input
                    required
                    label="Sitio Web"
                    isMaterial
                    inputType="text"
                    onChange={(value) => {
                      console.log('value');
                    }}
                  />
                </GridItem>
              </GridContainer>
            </Box>

            <Box>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <Box>
                    <Input
                      label="Telefono principal"
                      required
                      isMaterial
                      onChange={(value) => {
                        console.log('Value', value);
                      }}
                    />
                  </Box>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Box>
                    <Input
                      label="Telefono secundario"
                      isMaterial
                      onChange={(value) => {
                        console.log('Value', value);
                      }}
                    />
                  </Box>
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                  <Box>
                    <Input
                      label="Dirección"
                      isMaterial
                      required
                      onChange={(value) => console.log('VALOR', value)}
                    />
                  </Box>
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                  <Box>
                    <Input
                      label="Pais"
                      isMaterial
                      required
                      onChange={(value) => {
                        console.log('vaor', value);
                      }}
                    />
                  </Box>
                </GridItem>

                <GridItem xs={12} sm={12} md={4}>
                  <Box>
                    <Select
                      options={cobertura}
                      closeMenuOnSelect
                      components={animatedComponents}
                      placeholder="Cobertura"
                      onChange={(value) => {
                        console.log('Value', value);
                      }}
                    />
                  </Box>
                </GridItem>
              </GridContainer>
            </Box>
          </CardBody>
        </Card>
      </Grid>
    </div>
  );
};

export default ProfileContainer;
