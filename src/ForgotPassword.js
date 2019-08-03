import React, {useState} from 'react';
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
import { fields, populateFormData, validateFields, submitData } from './forgot-pass-utils';

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
  forgotPass: {
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
  successMessage: {
    textAlign: 'center',
    fontSize: '18px',
    color: colors.y1,
  },
}));

const ForgotPassword = () => {

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

  const doSubmit = () => {

    let formData = populateFormData(state.fields);
    let validation = validateFields(formData);

    if(Object.keys(validation).length>0) {
      setState({...state, errors: validation})
      return;
    }

    setState({...state, loading: true})

    submitData(formData)
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
            })

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

  if (state.toProfile === true) {
    return <Redirect to='/profile' />
  }

  return (
    <div className={`ForgotPassword ${classes.main}`}>
      <CssBaseline />
      <div className={classes.header}>
          <BackButton to="/sign-in" />
          <Logo />
        </div>
      <Container maxWidth="xs">
        <h1>Forgot Password?</h1>

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
          !state.successMessage && !state.loading &&
          <Button onClick={doSubmit} className={`sign-in-button ${classes.forgotPass}`}>
            Submit
          </Button>
        }

        { state.loading && <p className={classes.loading}>Please wait...</p>}

        { 
          state.successMessage && 
            <div>
              <p className={classes.successMessage}>
                A link to recover your password will be sent to you shortly
              </p>
            </div> 
        }

      </Container>
    </div>
  );
}

export default ForgotPassword;
