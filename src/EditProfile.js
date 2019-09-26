import React, { useState, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Logo from './Logo';
import { BackButton } from './Heading';
import colors from './colorTheme';
import { makeStyles } from '@material-ui/core/styles';
import { fields, populateFormData, validateFields, getData, submitData } from './EditProfileUtils';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import countriesList from './countries-list';

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: colors.p3,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    minHeight: '100vh',
    paddingBottom: '2em'
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
  dropdown: {
    fontSize: '1.4rem',
    background: 'none',
    width: '100%',
    outline: 'none',
    border: 'none'
  },
  error: {
    borderColor: 'red'
  },
  errorMsg: {
    color: 'red',
    fontSize: '1.6rem',
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
    margin: '2.4rem auto 0',
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
  },
  success: {
    width: '100%',
    fontSize: '1.4rem',
    padding: '8px 12px',
    background: '#11eac5',
    textAlign: 'center',
    borderRadius: '5px'
  },
  changePasswordTitle: {
    margin: '2.4rem 0px 1.3rem 0px'
  }
}));

const EditProfile = () => {

  const [state, setState] = useState({
    fields: fields,
    loading: false,
    errors: null,
    successMessage: false,
    successMessageTxt: '',
    errorMessage: false,
    errorDescription: '',
    selectedDate: new Date('2005-08-18T21:11:54')
  });
  const classes = useStyles();

  const getUserProfile = () => {
    getData(
      `profile`,
      'GET'
    ).then(async res => {
      let ret = await Promise.resolve(res.json());
      
      if (res.ok) {
        let fields = Object.assign({}, state.fields);
        Object.keys(fields).forEach(f => {
          if (f != 'password' && f != 'repeatPassword') {
            fields[`${f}`].comp.value = ret[f];
          }
        })
        setState({
          ...state,
          errorMessage: false,
          fields: fields
        });
      } else {
        setState({
          ...state,
          errorMessage: true,
          errorDescription: 'Unable to fetch user records.'
        })
      }
    })
      .catch(err => {
        console.log('err', err)
        setState({
          ...state,
          errorMessage: true,
          errorDescription: 'Unable to fetch user records.'
        })
      });
  };

  useEffect(() => {
    getUserProfile();
  }, []);

  const handleDateChange = (selectedDate) => {
    setState({ ...state, selectedDate })
  }
  const doSaveChanges = () => {
    let formData = populateFormData(state.fields);
    let validation = validateFields(formData);

    if (Object.keys(validation).length > 0) {
      setState({ ...state, errors: validation })
      return;
    }
    
    setState({ ...state, errors: null, loading: true })

    submitData(formData, 'profile')
      .then(async res => {
        let ret = await res.json();
        if (res.ok) {
          // Parse json data 
          // Show success message
          if (ret.emailVerified) {
            localStorage.setItem('firstName', ret.firstName);
            localStorage.setItem('lastName', ret.lastName);
            localStorage.setItem('token', ret.token);

          } else {
            // Email Address Updated
            localStorage.clear();
          }

          setState({
            ...state,
            loading: false,
            errors: null,
            errorMessage: false,
            errorDescription: '',
            successMessage: true,
            successMessageTxt: ret.msg
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
        <h1>Edit Profile</h1>

        <p>* Indicates required fields</p>
        {Object.keys(fields).map(
          field => {
            let error;
            if (state.errors) {
              error = state.errors[field] ? classes.error : '';
            }
            let required = fields[field].required ? 'required' : '';

            if (field === "country") {
              return (
                <div
                  key={field}
                  className={`${field} ${classes.inputField} ${error} ${required}`}>
                  <select
                    key={field}
                    className={classes.dropdown}
                    ref={comp => fields[field].comp = comp}
                    placeholder={fields[field].label}
                  >
                    <option>Select Country*</option>
                    {countriesList.map(
                      country => <option key={country.name} value={country.name}>{country.name}</option>
                    )}
                  </select>
                </div>
              )

            } else if (field === "dobX") {
              return (
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    onChange={handleDateChange}
                    value={state.selectedDate}
                    key={field}
                    margin="normal"
                    className={`field ${field} ${classes.inputField} ${error} ${required}`}
                    format="mm/dd/yyyy"
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>
              )

            } else if (field === "password") {
              return (
                <React.Fragment key={field}>
                  <h2 key='section-title' className={classes.changePasswordTitle}>Change Password</h2>
                  <p>* Leave blank to use the existing password.</p>
                  <input type="password"
                    key={field}
                    ref={comp => fields[field].comp = comp}
                    className={`${field} ${classes.inputField} ${error} ${required}`}
                    placeholder={fields[field].label}
                  />
                </React.Fragment>
              )

            } else if (field === "repeatPassword") {
              return (
                <input type="password"
                  key={field}
                  ref={comp => fields[field].comp = comp}
                  className={`${field} ${classes.inputField} ${error} ${required}`}
                  placeholder={fields[field].label}
                />
              )

            } else if (field === "email") {
              return (
                <React.Fragment key={field}>
                  <p>* Changing email address would require you to re-verify your email.</p>
                  <input type="text"
                    key={field}
                    ref={comp => fields[field].comp = comp}
                    className={`${field} ${classes.inputField} ${error} ${required}`}
                    placeholder={fields[field].label}
                  />
                </React.Fragment>
              )

            } else {
              return (
                <input type="text"
                  key={field}
                  ref={comp => fields[field].comp = comp}
                  className={`${field} ${classes.inputField} ${error} ${required}`}
                  placeholder={fields[field].label}
                />
              )
            }
          }
        )}

        {
          state.errors &&
          Object.keys(state.errors).map(
            field => <p key={`${field}1`} className={classes.errorMsg}>{state.errors[field]}</p>
          )
        }

        {
          state.errorMessage &&
          <div className={classes.errorMsg}>
            An error occured. Please try again. <br />
            {state.errorDescription}
          </div>
        }

        {
          state.successMessage &&
          <div>
            <p className={classes.success}>
              {state.successMessageTxt}
            </p>
          </div>
        }

        {
          !state.successMessage && !state.loading &&
          <Button onClick={doSaveChanges} className={`sign-up-button ${classes.signup}`}>
            Save Changes
          </Button>
        }

        {state.loading && <p className={classes.loading}>Please wait...</p>}


      </Container>
    </div>
  );
}

export default EditProfile;
