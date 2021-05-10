import React, { Fragment, useState } from 'react';
const Fade = require('react-reveal/Fade');
import Select from 'react-select';
import { InputLabel, Radio } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import makeAnimated from 'react-select/animated';
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';

import { Box } from './profile.style';
import cobertura, { categorias, subCategories } from '../../data/';

import Card from '../../components/ProfileSection/Card/Card';
import CardHeader from '../../components/ProfileSection/Card/CardHeader';
import CardBody from '../../components/ProfileSection/Card/CardBody';
import Input from '../../components/Input';
import GridContainer from '../../components/ProfileSection/Grid/GridContainer';
import GridItem from '../../components/ProfileSection/Grid/GridItem';
import { IRegistro } from '../../interfaces/revista';
import Button from '../../components/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    content: {
      marginLeft: '50px',
      marginRight: '50px',
    },
  })
);

const ProfileContainer = () => {
  const animatedComponents = makeAnimated();
  const classes = useStyles();

  const [state, setstate] = useState<IRegistro | null>();

  const [selectedOption, setSelectedOption] = React.useState('1');

  const [profileState, profilesetstate] = useState({
    show: false,
  });


  //** Functions **//
  const showOptions = () => {
    profilesetstate((prevState) => ({
      ...profileState,
      show: !prevState.show,
    }));
  }

  const changeOptionRegister = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value);
    console.log('información del radio', selectedOption);
  }

  return (
    <div className={classes.content}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4>EDITA TU CUENTA</h4>
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
                <br></br>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={6}>
                    <Select
                      options={categorias}
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      placeholder="Selecciona una categoría"
                      onChange={(value) => {
                        console.log('value', value);
                      }}
                      isMulti
                    />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={6}>
                    <Select
                      options={subCategories.filter((data) => {
                        if (state?.categorias[0] != null) {
                          return (
                            data.categoria ==
                            state?.categorias[0].value.toString()
                          );
                        }
                      })}
                      closeMenuOnSelect={false}
                      components={animatedComponents}
                      onChange={(value) => console.log('value', value)}
                      isDisabled={state?.categorias != null ? false : true}
                      isMulti
                    />
                  </GridItem>
                </GridContainer>
                <br></br>
                <br></br>
                <br></br>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <InputLabel style={{ color: '#565656' }}>
                      Descripción breve de la empresa *
                    </InputLabel>
                    <Box>
                      <Input
                        isMaterial
                        inputType="textarea"
                        onChange={(value) => console.log('info', value)}
                      />
                    </Box>
                  </GridItem>
                </GridContainer>
                <br></br>
                <br></br>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <InputLabel style={{ color: '#565656' }}>
                      Descripción completa
                    </InputLabel>
                    <Box>
                      <Input
                        isMaterial
                        inputType="textarea"
                        onChange={(value) => console.log('INFO', value)}
                      />
                    </Box>
                  </GridItem>
                </GridContainer>
              </Box>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card profile>
            <CardHeader color="primary">
              <p>Edita tu logotipo</p>
            </CardHeader>
            <Dropzone
              maxFiles={1}
              multiple={false}
              inputContent="Arrastra o selecciona tu logo"
              styles={{
                inputLabel: {
                  fontSize: '15px',
                  color: '#1c4374',
                },
                dropzone: {
                  width: 280,
                  height: 150,
                  borderRadius: 10,
                  borderColor: '#ededed',
                  marginTop: 30,
                },
                dropzoneActive: { borderColor: 'green' },
              }}
            />
            <br></br>
            <div id="toast"></div>
            <CardBody profile>
              <Fade>
                <p>Prueba</p>
              </Fade>

              <Button color="primary" onClick={showOptions} >Cambiar tipo de mención</Button>
            </CardBody>
            {!profileState.show? (
              <div></div>
            ) : (
              <Fragment>
               <Fade>
                <Box>
                  <Radio checked={selectedOption === '1'} onChange={changeOptionRegister} value='1' name="option-register" inputProps={{'aria-label': '1'}} size="small" />
                  <Radio checked={selectedOption === '2'} onChange={changeOptionRegister} value='2' name="option-register" inputProps={{'aria-label': '2'}} size="small" />
                  <Radio checked={selectedOption === '3'} onChange={changeOptionRegister} value='3' name="option-register" inputProps={{'aria-label': '3'}} size="small" />
                </Box>

                <p>Vista previa</p>
               </Fade>
              </Fragment>
            )}
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
};

export default ProfileContainer;
