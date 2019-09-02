import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Logo from './Logo';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import colors from './colorTheme';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: colors.p3,
    backgroundImage: 'url(images/splash-page.jpeg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    height: '100%'
  },
  container: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    position: 'absolute',
    bottom: '5rem',
    left: '50%',
    transform: 'translate(-50%)',
    textAlign: 'center'
  },
  logo: {
    display: 'block',
    width: '14rem',
    margin: '0 auto',
    padding: '3.2rem 0 0'
  },
  form: {
    textAlign: 'center'
  },
  aboutLink: {
    color: 'white',
    fontWeight: 'bold'
  },
  tcs: {
    display: 'block',
    color: 'white',
    fontWeight: 'bold'
  },
  disclaimer: {
    color: 'white'
  },
  signup: {
      backgroundColor: colors.g3,
      borderRadius: '1.4rem',
      color: 'white',
      textTransform: 'none',
      fontSize: '1.4rem',
      width: '100%',
      maxWidth: '12rem',
      display: 'block',
      margin: '2.4rem auto 1.6rem',
      padding: '0.8rem 0.2rem'
  },
  signIn: {
    backgroundColor: colors.g3,
    borderRadius: '1.2rem',
    color: 'white',
    textTransform: 'none',
    fontSize: '1rem',
    width: '100%',
    maxWidth: '6rem',
    fontWeight: 'normal',
    display: 'block',
    margin: '1.2rem auto 0',
    padding: '0.6rem 0.2rem'
}
}));



const Main = (props) => {
  const classes = useStyles();

  useEffect(()=>{
    if (localStorage.getItem('token')) {
      props.history.push('/profile')
    }
  });


  return (
    <div className={classes.main}>
      <CssBaseline />
      <Container maxWidth="xs">
        <Logo />
      </Container>
      <Container className={classes.container} component="main" maxWidth="xs">
          <form className={classes.form} noValidate>
            <Link className={classes.signup} component={RouterLink} to="/signup">
                Sign Up
            </Link>
          </form>

          <Link className={classes.aboutLink} 
          component={RouterLink} variant="body1"
          to="/about">
            About Female and More &gt;&gt;&gt;
          </Link>

          {
            // false && 
            <Link className={classes.signIn} component={RouterLink} to="/sign-in">
              Sign In
            </Link>
          }

          <p className={classes.disclaimer}>By creating an account I accept Female and More <Link to="/terms-and-conditions" className={classes.tcs} component={RouterLink}>Terms &amp; Conditions</Link></p>
      </Container>
    </div>
  );
}

export default Main;
