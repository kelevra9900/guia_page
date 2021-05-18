import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import {
  fade,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import logo from '../../assets/images/site_logo_white.png';
import Logo from '../../components/UI/Logo';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      margin: 'auto',
      right: '0',
      left: '0',
      width: '50%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(30),
        width: '50%',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '55ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    logoStyle: {
      display: 'block',
      maxWidth: '10%',
      height: 'auto',
    },
  })
);

function Header({ logoStyle }: any) {
  const router = useRouter();

  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [
    mobileMoreAnchorEl,
    setMobileMoreAnchorEl,
  ] = useState<null | HTMLElement>(null);
  const [ query, setQuery ] = useState<string>('');
  //STATE si el usuario ha iniciado sesión
  const [ isLoggedIn, setLogin ] = useState(false);
  const [ userLoggedIn, setUser ] = useState();

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  useEffect(() => {
    const usuario = localStorage.getItem('usuario');
    if(usuario){
      const user = JSON.parse(usuario);
      setLogin(true);
      setUser(user);
    }
  }, [])

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = () => {
    // handleOpenModal()
  };

  const handleClickOpen = () => {
    // setOpen(true);
    if(isLoggedIn){
      router.push('/profile');
    }else{
      router.push('/auth/login');
    }
  };

  const handleSearch = (e: any) => {
    e.preventDefault();
    router.push({
      pathname: `/busqueda/${query}`,
    });
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Mi cuenta</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleClickOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          {/* <AccountCircle /> */}
          <p>Acceso</p>
        </IconButton>
        <p>Perfil</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" style={{ background: '#0c386d' }}>
        <Toolbar>
          {/* Logo aquí */}
          <Logo href="/" title="logo" logoSrc={logo} logoStyle={logoStyle} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <form onSubmit={(e: any) => handleSearch(e)}>
              <InputBase
                onChange={(value) => setQuery(value.target.value)}
                placeholder="Encuentra una empresa o servicio..."
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ 'aria-label': 'search' }}
              />
            </form>
          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleClickOpen}
              color="inherit"
            >
              {/* <AccountCircle /> */}
              {isLoggedIn ? (
                <b style={{ color: '#fff', fontSize: '14px' }}>
                Mi cuenta
                </b>
              ) : (
                <b style={{ color: '#fff', fontSize: '14px' }}>
                  Acceso a empresas
                </b>
              )}
              
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="ver más"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

Header.propTypes = {
  logoStyle: PropTypes.object,
};

Header.defaultProps = {
  logoStyle: {
    width: '178px',
    mb: '150px',
  },
};

export default Header;
