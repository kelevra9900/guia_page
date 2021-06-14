import React, { Fragment, useEffect, useState } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

import { useForm } from "react-hook-form";
import { InputLabel, TextField, FormControl, Card, CardActionArea, CardMedia, Typography, CardContent, MenuItem } from '@material-ui/core';
import Select from 'react-select';

import { StarsRounded } from '@material-ui/icons';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';
const Fade = require('react-reveal/Fade');

import { Box, ContainerButton } from './profile.style';
import { categorias, subCategories, coberturaInfo } from '../../data/';
import Button from '@material-ui/core/Button';

import GridContainer from '@components/ProfileSection/Grid/GridContainer';
import GridItem from '@components/ProfileSection/Grid/GridItem';
import { IRegistro } from 'src/interfaces/revista';

import axios from 'axios';
import CardHeader from '@components/ProfileSection/Card/CardHeader';
import CardBody from '@components/ProfileSection/Card/CardBody';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    content: {
      marginLeft: '50px',
      marginRight: '50px',
      backgroundColor: '#efefef',
      paddingTop: '60px',
      paddingBottom: '60px',
    },
    card: {
      maxWidth: 300,
      minWidth: 300,
      maxHeight: 450,
      minHeight: 450,
      marginTop: '10px',
      marginLeft: '10px',
      transition: theme.transitions.create(['background', 'background-color'], {
        duration: theme.transitions.duration.complex,
      }),
    },
    media: {
      height: 140,
    },
    headerText: {
      fontSize: '21px',
    },
    recommended: {
      position: 'absolute',
      left: '270px',
      top: '5px',
    },
    cobertura: {
      position: 'absolute',
      left: '10px',
      backgroundColor: '#3f3f3f',
      color: '#fff',
      width: '90px',
      textAlign: 'center',
      fontSize: '10px',
      marginTop: '10px',
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(33, 33, 33, .3)',
    },
    customBox: {
      display: "-webkit-box",
      boxOrient: "vertical",
      lineClamp: 7,
      wordBreak: "break-all",
      overflow: "hidden"
    },
    containerDiv:{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    marginBox: {
      margin: theme.spacing(1),
      width: '100%', 
      paddingLeft: '30px', 
      paddingRight: '30px'
    },
    input: {
      width: '100%'
    }
  })
);
interface IUser {
  api_token: '';
  created_at: '';
  id: number;
  nombre: '';
  updated_at: '';
  username: '';
}

const ProfileContainer = () => {
  const classes = useStyles();
  const [state, setState] = useState<any | null>(null);
  const [usr, setUsr] = useState<IUser>({
    api_token: '',
    created_at: '',
    id: 0,
    nombre: '',
    updated_at: '',
    username: '',
  });
  // const [loading, setLoading] = useState(false);

  // const [selectedOption, setSelectedOption] = React.useState('1');

  const [profileState, profilesetstate] = useState({
    show: false,
  });

  const { register, handleSubmit, control, watch, formState: { errors } } = useForm<IRegistro>();


  // const handleControlledDropzonChangeStatus = (status: StatusValue, allFiles: IFileWithMeta[], setFiles: Function) => {
  //   setTimeout(() => {
  //     if(['done', 'removed'].includes(status)){
  //       setFiles([...allFiles]);
  //     }
  //   }, 0);
  // }

  const onSubmit = (data:any) =>  {
    console.log('SUBMIT DATA IN FORM', data)
  }

  useEffect(() => {
    checkData();
  }, []);

  //** Functions **//
  const showOptions = () => {
    profilesetstate((prevState) => ({
      ...profileState,
      show: !prevState.show,
    }));
  };
  

  const getUploadParams = ({ meta, file }: any) => {
    return { url: 'https://httpbin.org/post' };
  };

  const handleChangeStatus = ({ meta, file }: any, status: any) => {
    setState({
      ...state,
      logo: file,
      preview: meta.previewUrl,
    });
  };

  // const changeOptionRegister = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log('information', event.target.value);
  //   setSelectedOption(event.target.value);
  // };

  //Check data if exist registration
  const checkData = async () => {
    const res = localStorage.getItem('usuario');
    if (res) {
      try {
        const user = JSON.parse(res);
        setUsr(user);
        await axios.get(
          `https://admin.guiainternacional.com/api/perfil/${user.id}`
        );
      } catch (e: any) {
        console.log('ERROR--->', e);
      }
    }
  };

  return (
    <div className={classes.content} style={{ backgroundColor: '#efefef' }}>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
              <h4>EDITA TU CUENTA</h4>
            </CardHeader>
            <CardBody>
              <form onSubmit={handleSubmit(onSubmit)} method="POST">
                <InputLabel style={{ color: '#AAAAAA' }}>
                  Información de contacto
                </InputLabel>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={5}>
                    <Box>
                      <TextField
                        variant="standard"
                        margin="normal"
                        required
                        fullWidth
                        value={usr?.nombre || ''}
                        id="nombre_contacto"
                        label="Nombre de contacto"
                        autoComplete="nombre_contacto"
                        autoFocus
                        style={{ color: '#0d386c' }}
                        {...register('nombre_contacto')}
                      />
                    </Box>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={3}>
                    <Box>
                      <TextField
                        variant="standard"
                        margin="normal"
                        required
                        fullWidth
                        id="puesto_contacto"
                        label="Puesto"
                        autoComplete="puesto_contacto"
                        autoFocus
                        style={{ color: '#0d386c' }}
                        {...register('puesto_contacto')}
                      />
                    </Box>
                  </GridItem>

                  <GridItem xs={12} sm={12} md={4}>
                    <Box>
                      <TextField
                        variant="standard"
                        margin="normal"
                        required
                        fullWidth
                        value={usr?.username || ''}
                        id="correo_contacto"
                        label="Correo"
                        autoComplete="correo_contacto"
                        autoFocus
                        style={{ color: '#0d386c' }}
                        {...register('correo_contacto')}
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
                      <TextField
                        variant="standard"
                        margin="normal"
                        required
                        fullWidth
                        id="nombre_responsable"
                        label="Nombre del responsable"
                        autoComplete="nombre_responsable"
                        autoFocus
                        style={{ color: '#0d386c' }}
                        {...register('nombre_responsable')}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <TextField
                        variant="standard"
                        margin="normal"
                        required
                        fullWidth
                        id="correo_responsable"
                        label="Correo del responsable"
                        autoComplete="correo_responsable"
                        autoFocus
                        type="email"
                        style={{ color: '#0d386c' }}
                        {...register('correo_responsable')}
                      />
                    </GridItem>
                  </GridContainer>
                </Box>

                <Box>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <TextField
                        variant="standard"
                        margin="normal"
                        required
                        fullWidth
                        id="nombre_empresa"
                        label="Nombre de la empresa"
                        autoComplete="nombre_empresa"
                        autoFocus
                        style={{ color: '#0d386c' }}
                        {...register('nombre_empresa')}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <TextField
                        variant="standard"
                        margin="normal"
                        required
                        fullWidth
                        id="sitio_web"
                        label="Sitio Web"
                        placeholder="https://"
                        autoComplete="sitio_web"
                        autoFocus
                        style={{ color: '#0d386c' }}
                        {...register('sitio_web')}
                      />
                    </GridItem>
                  </GridContainer>
                </Box>

                <Box>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <Box>
                        <TextField
                          variant="standard"
                          margin="normal"
                          required
                          fullWidth
                          id="telefono_principal"
                          label="Telefono principal"
                          autoComplete="telefono_principal"
                          autoFocus
                          style={{ color: '#0d386c' }}
                          {...register('telefono_principal')}
                        />
                      </Box>
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <Box>
                        <TextField
                          variant="standard"
                          margin="normal"
                          fullWidth
                          id="telefono_secundario"
                          label="Telefono principal"
                          autoComplete="telefono_secundario"
                          autoFocus
                          style={{ color: '#0d386c' }}
                          {...register('telefono_secundario')}
                        />
                      </Box>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                      <Box>
                        <TextField
                          variant="standard"
                          margin="normal"
                          fullWidth
                          required
                          id="direccion"
                          label="Dirección"
                          autoComplete="direccion"
                          autoFocus
                          style={{ color: '#0d386c' }}
                          {...register('direccion')}
                        />
                      </Box>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                      <Box>
                        <TextField
                          variant="standard"
                          margin="normal"
                          fullWidth
                          required
                          id="pais_empresa"
                          label="Pais"
                          autoComplete="pais_empresa"
                          autoFocus
                          style={{ color: '#0d386c' }}
                          {...register('pais_empresa')}
                        />
                      </Box>
                    </GridItem>

                    <GridItem xs={12} sm={12} md={4}>
                      <Box>
                        <div style={{ paddingTop: '32px' }}>
                          <Select 
                            options={coberturaInfo}
                            placeholder="Cobertura"
                          />
                        </div>
                      </Box>
                    </GridItem>
                  </GridContainer>
                  <br></br>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <Select 
                        options={categorias}
                        placeholder="Categorías"

                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <Select 
                        options={subCategories}
                        placeholder="Subcategorias"
                        
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
                        <TextField
                          variant="standard"
                          margin="normal"
                          fullWidth
                          required
                          id="descripcion_breve"
                          autoComplete="descripcion_breve"
                          autoFocus
                          style={{ color: '#0d386c' }}
                          multiline
                          {...register('descripcion_breve')}
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
                        <TextField
                          variant="standard"
                          margin="normal"
                          fullWidth
                          required
                          id="descripcion_completa"
                          autoComplete="descripcion_completa"
                          autoFocus
                          style={{ color: '#0d386c' }}
                          multiline
                          {...register('descripcion_completa')}
                        />
                      </Box>
                    </GridItem>
                  </GridContainer>
                  <Button
                    variant="contained"
                    type="submit"
                    style={{ backgroundColor: '#0d386c', color: '#fff' }}
                  >
                    Actualiza tu perfil
                  </Button>
                </Box>
              </form>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader color="primary">
              <p>Edita tu logotipo</p>
            </CardHeader>
            <Dropzone
              getUploadParams={getUploadParams}
              maxFiles={1}
              multiple={false}
              onChangeStatus={handleChangeStatus}
              
              // PreviewComponent={Preview}
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
            <CardBody profile className={classes.containerDiv}>

              <Button
                color="primary"
                variant="contained"
                style={{ backgroundColor: '#0d386c' }}
                onClick={showOptions}
              >
                Cambiar tipo de mención
              </Button>
            </CardBody>
            {!profileState.show ? (
              <div></div>
            ) : (
              <Fragment>
                <Fade>
                  <br></br>
                  {/* <FormControl className={classes.marginBox} variant="outlined">
                    <Select
                      defaultValue='Gratis'
                      name="mention"
                      style={{marginLeft: '5vh', marginRight: '5vh', maxHeight: '40px'}}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                    </FormControl> */}
                  <br></br>
                  <div className={classes.containerDiv}>
                  <br></br>
                  <Card className={classes.card}>
                    <CardActionArea>

                      <div className={classes.recommended}>
                        <StarsRounded style={{color: '#0D386C'}} />
                      </div>

                    <div className={classes.cobertura}>
                      <p>Cobertura</p>
                    </div>

                    <CardMedia
                      className={classes.media}
                      image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAJFBMVEXw8PDZ2dnb29vs7Ozu7u7a2trk5OTh4eHn5+ff39/m5ubW1tZgd3wLAAADEUlEQVR4nO2d7XaCMAxAgZaPsvd/38nUUdq0eATElHvPfjhFpHehSYq6qgIAAAAAAAAAAAAAAAAAAAAAAAAAAAD4UszP2ZizFVSmPhsc4AAHOMABDnCAAxzgAAc4wIEqB4f3ygocVPZYKg0OjgYHOJjAAQ4mVDswY+9c3w122ysqdjC49rFF0216RbUOrPNrm3bY8IpaHdgm2GpDKCh1ECnYIkGpAxcpqOu3TwedDgZBQe3W923FDKLTgRQGdT2u7rsTPal0kFhiWA+EVhyfSged7GC1ohxlTyod9AkHawc/nULCzKnSgTwdrGaGv5m0je9X6SAuDl5ycFcX1xEqHaTiIH/wjx23UX5U6SAxH/zk+8fns/rwAZUOxBJJPNXF/YZjVOlA6BbEP/CCOXjC/KjSgXwytNljt+28ZbChTgdWcpBvHP26qlk+pNPBVPGFNPkZcXH6LJOoUgdxudzkj3wpbRkIWh2EU8KKgrCkWLSYah1Ugx/d+ZQQZ9PF/KnXwS2+HwvLTb961FFl6UvT7OCWH8wwDi8csomur/sD1e3gVYR6wiuULuHAtOE+az8/XsKBWFbO+fESDiQFXiBcwUFi+dE9C8sLOEh0mXNxfQEHQm9xOQep1ceCHQxBD51YdCrYwdRFLJuH1AJsqQ7Ge9z7EpJhUKaDuZP0JCTDoEQHxh/tv4TMO8CLc2CDevg5MaYuTRbowEQJ8C7BSt1SmQ6kavhPQiYMCnMgj3RMl8nFOUgOtEu+WaM0Bzad/br0Q0U4sM/3mGXHWbAD0zc33LSenA33gh14l5DfV6DbwYZxl+Ig3QVdxsFunwHV6yBb9lzEwdupsBwHuQbgIg52SgmaHeyVEhQ72PdrAVQ62C8l6HWwrwKVDrrmiZt+3P3GfPPxy+Om87dt5nv/n9Zc6ZrrKjjAwQQOcDCBAxxMKHBgzbFEH4b4QgfN0Shw8HFwgAMc4AAHOMABDnCAAxzg4IsdxJ/H/Czf8L+J2sOb5Tz575L4kISzOVsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQJJfX084wDL8aVYAAAAASUVORK5CYII="
                      title="Logo"
                    />
                    <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.headerText}
                    >
                      nombre empresa
                    </Typography>
                    <Box className={classes.customBox}>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      descripcion breve
                    </Typography>
                    </Box>
                  </CardContent>
                    </CardActionArea>
                  </Card>

                  </div>
                  <br></br>


                  <Fragment>
                    <div className={classes.containerDiv}>
                      <p>Selecciona tu método de pago</p>
                    </div>
                    <ContainerButton>
                      <PayPalButton
                        style={{
                          layout: 'vertical',
                          color: 'blue',
                          shape: 'rect',
                          label: 'paypal',
                          tagline: false,
                        }}
                        amount="0.01"
                        options={{
                          clientId:
                            // "AX60sotQhwHpPDAYdDfhoo5UyKpGAajfF5ixrQXW4tfveD49JTq6QXWYvJtZbwWPXbHyqeeoN7g-MvuN",
                            'AX_AXIUPQeisxAtfFuwBqxNgxw7rd5WsnDvG7GKqkR7wheSuvf9WEyxwzV3EUMErCY6ABk7noTHUNsjn',
                        }}
                      />
                    </ContainerButton>
                  </Fragment>
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
