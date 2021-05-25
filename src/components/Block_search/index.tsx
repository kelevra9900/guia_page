import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { withRouter } from 'next/router'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { StarsRounded } from '@material-ui/icons';

import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Box} from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import { BabelLoading } from 'react-loadingg';

import { categorias, subCategories, paises, estados } from '../../data/';
import axios from 'axios';

function BlockSearch (){
    const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        flexGrow: 1,
        margin: 70,
      },
      card: {
        maxWidth: 300,
        minWidth: 300,
        maxHeight: 450,
        minHeight: 450,
        marginTop: '10px',
        marginLeft: '10px',
        transition: theme.transitions.create(
          ['background', 'background-color'],
          {
            duration: theme.transitions.duration.complex,
          }
        ),
      },
      avatar: {
        backgroundColor: '#3f695b',
      },
      media: {
        height: 140,
      },
      formControl: {
        margin: theme.spacing(1),
      },
      overlay: {
        top: '20px',
        left: '20px',
        color: 'black',
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
        display: '-webkit-box',
        boxOrient: 'vertical',
        lineClamp: 7,
        wordBreak: 'break-all',
        overflow: 'hidden',
      },
    })
  );
  const classes = useStyles();

    const router = useRouter();
    const { busqueda } = router.query;
    const animatedComponents = makeAnimated();

    const [state, setState] = useState([]);
    const [cobertura, setCobertura] = useState<any>({
        Local: false,
        Nacional: false,
        Internacional: false,
      });

    const [ loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        axios
        .get(`https://admin.guiainternacional.com/api/busqueda/${busqueda}`)
        .then((res: any) => {
            setState(res.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log('ERROR', error);
            setLoading(false);
          return null;
        });
    }, [router.query.busqueda])

    const handleChangeCobertura = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCobertura({ ...state, [event.target.name]: event.target.checked });
        if(event.target.checked){
          setLoading(true);
          filter(event.target.name);
        }else{
          axios.get(`https://admin.guiainternacional.com/api/busqueda/${busqueda}`).then((res:any) => {
            const response = res.data;
            setState(response);
          });
        }
      };

  //Cobertura petición
  const filter = (params:string) => {
    axios.get(`https://admin.guiainternacional.com/api/busqueda/${busqueda}?cobertura_mercado=${params}`).then((res:any) => {
      const response = res.data;
      setState(response);
      setLoading(false);
    });
  }

  // Cambio por país
  const handleSelectChangeCountry = (inputValue:any) => {
    const filterArray= state.filter((pais:any)=>pais.pais_empresa === inputValue.label);
    if(filterArray.length > 0){
      setState(filterArray)
    }else{
      axios.get(`https://admin.guiainternacional.com/api/busqueda/${busqueda}`).then((res:any) => {
        const response = res.data;
        setState(response);
      });
    }
  }

  //Cambio por estado
  const handleSelectChangeState = (inputValue:any) => {
    const filterArray= state.filter((pais:any)=>pais.estado === inputValue.label);
    if(filterArray.length > 0){
      setState(filterArray)
    }else{
      axios.get(`https://admin.guiainternacional.com/api/busqueda/${busqueda}`).then((res:any) => {
        const response = res.data;
        setState(response);
      });
    }
  }

  const handleSelectChangeCategorie = (inputValue:any) => {
    if(inputValue.length > 0){
      axios.get(`https://admin.guiainternacional.com/api/search/${inputValue[0].id}`).then((res:any) => {
        const response = res.data;
        setState(response);
      });
    }else{
      axios.get(`https://admin.guiainternacional.com/api/busqueda/${busqueda}`).then((res:any) => {
        const response = res.data;
        setState(response);
      });
    }
  }

  const handleSelectChangeSubcategorie = (inputValue:any) => {
    console.log('INFO', inputValue)
    if(inputValue.id != null){
      axios.get(`https://admin.guiainternacional.com/api/query/${inputValue.id}`).then((res:any) => {
        console.log('DATA RESPONSE', res);
        const response = res.data;
        setState(response);
      });
    }else{
      axios.get(`https://admin.guiainternacional.com/api/busqueda/${busqueda}`).then((res:any) => {
        const response = res.data;
        setState(response);
      });
    }
  }



  const { Local, Nacional, Internacional } = cobertura;

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={3} sm={3}>
            <Select
            options={categorias}
            closeMenuOnSelect={false}
            components={animatedComponents}
            placeholder="Selecciona una categoría"
            onChange={handleSelectChangeCategorie}
            isMulti
          />
        <br></br>
            <Select options={subCategories} placeholder="Subcategoría" onChange={handleSelectChangeSubcategorie} />
          <br></br>

          <div>
            <FormControl component="fieldset" className={classes.formControl}>
              <FormLabel component="legend">Cobertura</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Local}
                      onChange={handleChangeCobertura}
                      name="Local"
                      style={{color: '#0D386C'}}
                    />
                  }
                  label="Local"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Nacional}
                      onChange={handleChangeCobertura}
                      name="Nacional"
                      style={{color: '#0D386C'}}
                    />
                  }
                  label="Nacional"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={Internacional}
                      onChange={handleChangeCobertura}
                      name="Internacional"
                      style={{color: '#0D386C'}}
                    />
                  }
                  label="Internacional"
                />
              </FormGroup>
            </FormControl>
          </div>

          <div style={{marginTop: '18px'}}>
          <Select
            placeholder="Pais" 
            options={paises}
            components={animatedComponents}
            onChange={handleSelectChangeCountry}
          />
          </div>
          
          <div style={{marginTop: '18px'}}>
          <Select
            placeholder="Estado" 
            onChange={handleSelectChangeState}
            options={estados}
            components={animatedComponents}
          />
          </div>
        </Grid>

        <Grid item xs={9} sm={9} spacing={2}>
          <Grid container item xs={12} spacing={3}>
          {loading ? <BabelLoading /> :  state.length > 0 && state.map((result: any, index: number) => (
              <Card className={classes.card} key={`cards-${index}`}>
                <CardActionArea>
                  {result.metodo_pago != 'Gratis' && (
                    <div className={classes.recommended}>
                      <StarsRounded style={{color: '#0D386C'}} />
                    </div>
                  )}
                  <div className={classes.cobertura}>
                    <p>{result.cobertura_mercado}</p>
                  </div>
                  <CardMedia
                    className={classes.media}
                    image="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAJFBMVEXw8PDZ2dnb29vs7Ozu7u7a2trk5OTh4eHn5+ff39/m5ubW1tZgd3wLAAADEUlEQVR4nO2d7XaCMAxAgZaPsvd/38nUUdq0eATElHvPfjhFpHehSYq6qgIAAAAAAAAAAAAAAAAAAAAAAAAAAAD4UszP2ZizFVSmPhsc4AAHOMABDnCAAxzgAAc4wIEqB4f3ygocVPZYKg0OjgYHOJjAAQ4mVDswY+9c3w122ysqdjC49rFF0216RbUOrPNrm3bY8IpaHdgm2GpDKCh1ECnYIkGpAxcpqOu3TwedDgZBQe3W923FDKLTgRQGdT2u7rsTPal0kFhiWA+EVhyfSged7GC1ohxlTyod9AkHawc/nULCzKnSgTwdrGaGv5m0je9X6SAuDl5ycFcX1xEqHaTiIH/wjx23UX5U6SAxH/zk+8fns/rwAZUOxBJJPNXF/YZjVOlA6BbEP/CCOXjC/KjSgXwytNljt+28ZbChTgdWcpBvHP26qlk+pNPBVPGFNPkZcXH6LJOoUgdxudzkj3wpbRkIWh2EU8KKgrCkWLSYah1Ugx/d+ZQQZ9PF/KnXwS2+HwvLTb961FFl6UvT7OCWH8wwDi8csomur/sD1e3gVYR6wiuULuHAtOE+az8/XsKBWFbO+fESDiQFXiBcwUFi+dE9C8sLOEh0mXNxfQEHQm9xOQep1ceCHQxBD51YdCrYwdRFLJuH1AJsqQ7Ge9z7EpJhUKaDuZP0JCTDoEQHxh/tv4TMO8CLc2CDevg5MaYuTRbowEQJ8C7BSt1SmQ6kavhPQiYMCnMgj3RMl8nFOUgOtEu+WaM0Bzad/br0Q0U4sM/3mGXHWbAD0zc33LSenA33gh14l5DfV6DbwYZxl+Ig3QVdxsFunwHV6yBb9lzEwdupsBwHuQbgIg52SgmaHeyVEhQ72PdrAVQ62C8l6HWwrwKVDrrmiZt+3P3GfPPxy+Om87dt5nv/n9Zc6ZrrKjjAwQQOcDCBAxxMKHBgzbFEH4b4QgfN0Shw8HFwgAMc4AAHOMABDnCAAxzg4IsdxJ/H/Czf8L+J2sOb5Tz575L4kISzOVsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQJJfX084wDL8aVYAAAAASUVORK5CYII="
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      className={classes.headerText}
                    >
                      {result.nombre_empresa}
                    </Typography>
                    <Box className={classes.customBox}>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      className={classes.overlay}
                    >
                      {result.descripcion_breve}
                    </Typography>
                    </Box>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={(e) => {
                    //   openWeb(result.sitio_web);
                    }}
                  >
                    Sitio web
                  </Button>
                </CardActions>
              </Card>
            ),)}
            
          </Grid>
        </Grid>

      </Grid>
    </div>
  );
};
export default withRouter(BlockSearch);
