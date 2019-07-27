import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Logo from './Logo';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import colors from './colorTheme';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: colors.p3,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh'
  }
}));



const SignUp = () => {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <CssBaseline />
      <Container maxWidth="xs">
        <Logo />
      </Container>
    </div>
  );
}

export default SignUp;
