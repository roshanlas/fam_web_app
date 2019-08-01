import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Logo from './Logo';
import { BackButton } from './Heading';
import colors from './colorTheme';
import { makeStyles } from '@material-ui/core/styles';
import { fields, populateFormData, validateFields, submitData } from './registration-utils';

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
  signup: {
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
}));

const SignUp = () => {

  const [state, setState] = useState({
    fields:fields, 
    errors: null,
    successMessage: false,
    errorMessage: false,
    errorDescription: ''
  });
  const classes = useStyles();

  const doSignUp = () => {

    let formData = populateFormData(state.fields);
    let validation = validateFields(formData);

    if(Object.keys(validation).length>0) {
      setState({...state, errors: validation})
      return;
    }

    submitData(formData)
    .then(async res => {
        let ret = await res.json();
        if(res.ok) {
            // Parse json data 
            // Show success message
            setState({ 
                ...state, 
                errors: null,
                errorMessage: false,
                errorDescription: '',
                successMessage: true,
            })
        }
        else {
          console.log(res.status)
          // Handle the error
          setState({ 
              ...state, 
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
          errors: null,
          successMessage: false,
          errorMessage: true,
          errorDescription: ''
      })
    })
  }

  return (
    <div className={`SignUp ${classes.main}`}>
      <CssBaseline />
      <div className={classes.header}>
          <BackButton to="/" />
          <Logo />
        </div>
      <Container maxWidth="xs">
        <h1>Join Female and More</h1>

        {Object.keys(fields).map(
          field=>{
              let error;
              if(state.errors) {
                error = state.errors[field] ? classes.error : '';
              }
              let required = fields[field].required ? 'required' : '';
              return (
                <input type="text"
                  key={field}
                  ref={comp=>fields[field].comp = comp}
                  className={`${field} ${classes.inputField} ${error} ${required}`}
                  placeholder={fields[field].label}
                />
              )
            }
        )}

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
              <Link to="/30-day-challenge" component={RouterLink} className={`${classes.readMore}`}>
                Read the 30 Day Challenge
              </Link>
            </div> 
        }

        { 
          !state.successMessage && 
          <Button onClick={doSignUp} className={`sign-up-button ${classes.signup}`}>
            Sign Up
          </Button>
        }


      </Container>
    </div>
  );
}

export default SignUp;
