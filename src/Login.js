import React, { useState, useContext, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Logo from './Logo';
import { AppContext } from './App';
import { BackButton } from './Heading';
import colors from './colorTheme';
import { makeStyles } from '@material-ui/core/styles';

console.log('process', process.env.REACT_APP_API_URL)

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: colors.p3,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    minHeight: '100vh'
  },
  header: {
    position: 'relative',
  },
  inputField: {
    display: 'block',
    backgroundColor: colors.gray4,
    border: `0.1rem solid ${colors.green}`,
    borderRadius: '1.6rem',
    padding: '0.8rem 1.2rem',
    margin: '0 0 1.2rem',
    fontSize: '1.4rem',
    width: '100%',
    '&:focus': {
      outline: 'none'
    }
  },
  error: {
    borderColor: 'red'
  },
  errorMsg: {
    color: 'red',  
    fontSize: '1.4rem',
    margin: 0
  },
  Login: {
    backgroundColor: colors.g3,
    borderRadius: '1.4rem',
    color: 'white',
    textTransform: 'none',
    fontSize: '1.2rem',
    fontFamily: 'Oswald, sans-serif !important',
    width: '100%',
    maxWidth: '12rem',
    display: 'block',
    margin: '2.4rem auto 1.6rem',
    padding: '0.8rem 0.2rem',
    '&:hover': {
      backgroundColor: colors.g3,
    }
  },
  readMore: {
    textAlign: 'center',
    backgroundColor: colors.g3,
    borderRadius: '1.4rem',
    color: 'white',
    textTransform: 'none',
    fontSize: '1.2rem',
    fontFamily: 'Oswald, sans-serif !important',
    width: '100%',
    display: 'block',
    margin: '2.4rem auto 1.6rem',
    padding: '0.8rem 0.2rem',
    '&:hover': {
      backgroundColor: colors.g3,
    }
  },
  loading: {
    textAlign: 'center',
    fontSize: '1.6rem',
    fontWeight: 'bold'
  }
}));

const Login = () => {

  let email;
  let password;

  const [globalState, setGlobalState] = useContext(AppContext);

  const [state, setState] = useState({
    loading : false,
    errors: null,
    successMessage: false,
    errorMessage: false,
    errorDescription: ''
  });
  const classes = useStyles();


  const doLogin = () => {
      setGlobalState({...globalState, user: {
          name: 'Dany'
      }})
  }

  return (
    <div className={`Login ${classes.main}`}>
      <CssBaseline />
      <div className={classes.header}>
          <BackButton to="/" />
          <Logo />
        </div>
      <Container maxWidth="xs">
        <h1>Join Female and More</h1>

        <input type="text"
            ref={comp=>email = comp}
            className={classes.inputField}
            placeholder="Email"
        />
        <input type="password"
            ref={comp=>password = comp}
            className={classes.inputField}
            placeholder="Password"
        />

        { 
          !state.successMessage && !state.loading &&
          <Button onClick={doLogin} className={`sign-up-button ${classes.Login}`}>
            Login
          </Button>
        }

      </Container>
    </div>
  );
}

export default Login;
