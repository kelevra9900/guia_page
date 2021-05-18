import React, { useState } from 'react';
import { useRouter } from "next/router";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import { Alert } from '@material-ui/lab';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { BabelLoading } from 'react-loadingg';

import axios from 'axios';


const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#fff',
        borderRadius: '10px'
    },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#0d386c',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  copy: {
    margin: theme.spacing(3, 0, 2),
  }
}));

export default function LoginModal() {
  const router = useRouter();
  const classes = useStyles();
  const [ errorState , setErrorState] = useState(false)
  const [ loading, setLoading ] = useState(false);

  const handleForm = async (event:any) => {
    setErrorState(false);
    setLoading(true);
    event.preventDefault()
    const username = event.target.email.value;
    const pass = event.target.password.value
    try{
      const res = await axios.post('https://admin.guiainternacional.com/api/login', {
        username: username,
        password: pass
      })
      
      if(res.data.message === 200){
        localStorage.setItem("usuario", JSON.stringify(res.data.data));
        router.push("/profile");
        setLoading(false)
      }
    }catch(e:any){
      setErrorState(true);
      setLoading(false)
    }
  }

  return (
    <Container component="main" maxWidth="xs" className={classes.root}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar sesión
        </Typography>
        <form className={classes.form} onSubmit={handleForm} method="POST">
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Usuario"
            name="email"
            autoComplete="email"
            autoFocus
            style={{color: '#0d386c'}}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            
            autoComplete="current-password"
            style={{color: '#0d386c'}}
          />
          <FormControlLabel
            control={<Checkbox value="remember" style={{color: '#0d386c'}} />}
            label="Recordar navegador"
          />

          {
            errorState && (
              <Alert severity="error">Por favor ingresa de nuevo tus credenciales!</Alert>
            )
          }
         

          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{backgroundColor: '#0d386c', color: '#ffff'}}
            className={classes.submit}
          >
            {loading && (
              <BabelLoading color={'#ffff'} />
            )}
            Iniciar sesión 
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Olvidarte tu contraseña?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"No tienes una cuenta?"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Typography variant="body2" color="textSecondary" align="center" className={classes.copy}>
            {'Copyright © '}
            <Link color="inherit">
            Seguridad en América
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
      </Box>
    </Container>
  );
}