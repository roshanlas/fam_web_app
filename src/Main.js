import React from 'react';
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
    height: '100vh'
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
  signup: {
      backgroundColor: colors.g3,
      borderRadius: '1.4rem',
      color: 'white',
      textTransform: 'none',
      fontSize: '1.2rem',
      maxWidth: '12rem',
      fontWeight: 'bold',
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



const Main = () => {
  const classes = useStyles();
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

          <Link className={classes.aboutLink} component="button" variant="body1">
            About Female and More &gt;&gt;&gt;
          </Link>

          <Link className={classes.signIn} component="button">
            Sign In
          </Link>
      </Container>
    </div>
  );
}

export default Main;
