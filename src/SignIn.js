import React, { useState, useContext } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import { Redirect } from 'react-router';
import Button from '@material-ui/core/Button';
import Logo from './Logo';
import { BackButton } from './Heading';
import colors from './colorTheme';
import { makeStyles } from '@material-ui/core/styles';
import { fields, populateFormData, validateFields, submitData } from './sign-in-utils';
import { AppContext } from './App'; 
const queryString = require('query-string');

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
  signin: {
    backgroundColor: colors.g3,
    borderRadius: '1.4rem',
    color: 'white',
    textTransform: 'none',
    fontSize: '1.2rem',
    fontFamily: 'Oswald, sans-serif !important',
    width: '100%',
    maxWidth: '12rem',
    display: 'block',
    margin: '3.4rem auto 1.6rem',
    padding: '0.8rem 0.2rem',
    '&:hover': {
      backgroundColor: colors.g3,
    }
  },
  loading: {
    textAlign: 'center',
    fontSize: '1.6rem',
    fontWeight: 'bold'
  },
  register: {
    textAlign: 'center',
  },
  registerLink: {
    fontFamily: 'Oswald, sans-serif !important',
    fontWeight: 'normal',
    color: '#707070 !important',
    fontSize: '20px', 
  },
  forgotPass: {
    textAlign: 'right',
  },
  forgotPassLink: {
    fontSize: '18px',
    color: colors.y1,
  },
  verified: {
    width: '100%',
    padding: '8px 12px',
    background: '#11eac5',
    textAlign: 'center',
    borderRadius: '5px'
  },
  notVerified: {
    width: '100%',
    padding: '8px 12px',
    background: '#fb5252',
    textAlign: 'center',
    borderRadius: '5px'
  }
}));

const SignIn = (props) => {

  const [globalState, globalSetState] = useContext(AppContext);

  const [state, setState] = useState({
    fields:fields, 
    loading : false,
    errors: null,
    successMessage: false,
    errorMessage: false,
    errorDescription: '',
    toProfile: false
  });
  const classes = useStyles();
  const verified = queryString.parse(props.location.search).verified;

  const doSignIn = () => {

    let formData = populateFormData(state.fields);
    let validation = validateFields(formData);

    if(Object.keys(validation).length>0) {
      setState({...state, errors: validation})
      return;
    }

    setState({...state, loading: true})

    submitData(formData, 'login')
    .then(async res => {
        let ret = await res.json();
        if(res.ok) {
            // Parse json data 
            // Show success message
            setState({ 
                ...state, 
                loading: false,
                errors: null,
                errorMessage: false,
                errorDescription: '',
                successMessage: true,
                toProfile: true,
            });

            globalSetState({
              ...globalState,
              loginStatus: true,
              firstName: ret.firstName,
              lastName: ret.lastName,
              token: ret.token
            });
        } else {
          console.log(res.status)
          // Handle the error
          setState({ 
              ...state, 
              loading: false,
              errors: null,
              errorMessage: true,
              errorDescription: ret.msg,
              successMessage: false,
          })
      }
    }) 
    .catch(err => {
        console.log('err', err);
        setState({ 
          ...state, 
          loading: false,
          errors: null,
          successMessage: false,
          errorMessage: true,
          errorDescription: '',
      })
    })
  }

  console.log('verified', verified);

  if (state.toProfile === true) {
    return <Redirect to='/about?information=true' />
  }

  return (
    <div className={`SignIn ${classes.main}`}>
      <CssBaseline />
      <div className={classes.header}>
          <BackButton to="/" />
          <Logo />
        </div>
      <Container maxWidth="xs">

        {
          verified === "true" && 
          <p className={classes.verified}>Your account has been successfully verified!</p>
        }
        {
          verified === "false" && 
          <p className={classes.notVerified}>Your account has not been verified yet</p>
        }
        <h1>Welcome back!</h1>

        {Object.keys(fields).map(
          field=>{
              let error;
              if(state.errors) {
                error = state.errors[field] ? classes.error : '';
              }
              let required = fields[field].required ? 'required' : '';
              return (
                <input type={fields[field].type}
                  key={field}
                  ref={comp=>fields[field].comp = comp}
                  className={`${field} ${classes.inputField} ${error} ${required}`}
                  placeholder={fields[field].label}
                />
              )
            }
        )}

        <p className={classes.forgotPass}>
          <Link className={classes.forgotPassLink} component={RouterLink} variant="body1" to="/forgot-password">
            Forgot Password?
          </Link>
        </p>

        {
          state.errors && 
          Object.keys(state.errors).map(
            field=><p key={`${field}1`} className={classes.errorMsg}>{state.errors[field]}</p>
          )
        }

        { 
          state.errorMessage && 
          <div className={classes.errorMsg}>
            An error occured. Please try again. <br/>
            {state.errorDescription}
          </div> 
        }

        { 
          state.successMessage && 
            <div>
              <p>
              You have been registered successfully! You will be receiving an email
              from us shortly.
              </p>
            </div> 
        }

        { 
          !state.successMessage && !state.loading &&
          <Button onClick={doSignIn} className={`sign-in-button ${classes.signin}`}>
            Sign In
          </Button>
        }

        { 
          !state.successMessage && !state.loading &&
          <p className={classes.register}>
            <Link className={classes.registerLink} component={RouterLink} variant="body1" to="/signup">
              I am new here
            </Link>
          </p>
        }

        { state.loading && <p className={classes.loading}>Please wait...</p>}


      </Container>
    </div>
  );
}

export default SignIn;
