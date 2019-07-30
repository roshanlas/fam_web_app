import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import Logo from './Logo';
import { BackButton } from './Heading';
import colors from './colorTheme';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: colors.p3,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    minHeight: '100vh'
  },
  header: {
    position: 'relative'
  },
  inputField: {
    display: 'block',
    backgroundColor: colors.gray4,
    border: `0.1rem solid ${colors.green}`,
    borderRadius: '1rem',
    padding: '0.6rem 1.2rem',
    margin: '0 0 1.2rem',
    fontSize: '1.4rem',
    width: '100%',
    '&:focus': {
      outline: 'none'
    }
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
    padding: '0.8rem 0.2rem',
    '&:hover': {
      backgroundColor: colors.g3,
    }
},
}));


const SignUp = () => {
  const classes = useStyles();
  let fields = {
    email: {comp: null, label: 'Email'}, 
    password: {comp: null, label: 'Password'}, 
    repeatPassword: {comp: null, label: 'Repeat Password'}, 
    firstName: {comp: null, label: 'First Name'}, 
    lastName: {comp: null, label: 'Last Name'},
    dob: {comp: null, label: 'Date of Birth'}, 
    gender: {comp: null, label: 'Gender'}, 
    marriageStatus: {comp: null, label: 'Marriage Status'}, 
    occupation: {comp: null, label: 'Occupation'}, 
    residence: {comp: null, label: 'Residence'}, 
    city: {comp: null, label: 'City'},
    homeAddress: {comp: null, label: 'Home Address'}, 
    postCode: {comp: null, label: 'Post Code'}
  };

  let formData;

  const registerUser = () => {

    formData = {};
    Object.keys(fields).forEach(
      f=>Object.assign(formData, { [`${f}`]: fields[`${f}`].comp.value })
    )

    fetch(
        // URL
        'http://localhost:3011/register', 
        // Data
        {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {"Content-Type": "application/json"}
        }
    )
    .then(res => {
        if(res.status === "400") {
            // Handle the error
            // setLocalState({ 
            //     ...localState, 
            //     successMessage: false,
            //     errorMessage: true
            // })

        } else {
            // Parse json data 
            res.json();

            // Show success message
            // setLocalState({ 
            //     ...localState, 
            //     successMessage: true,
            //     errorMessage: false
            // })
        }
    }) 
    .catch(err => {
        console.log('err', err);
    })
  }

  return (
    <div className={classes.main}>
      <CssBaseline />
      <div className={classes.header}>
          <BackButton to="/" />
          <Logo />
        </div>
      <Container maxWidth="xs">
        <h1>Join Female and More</h1>

        {Object.keys(fields).map(
          field=><input type="text"
            key={field}
            ref={comp=>fields[field].comp = comp}
            className={classes.inputField}
            placeholder={fields[field].label}
          />
        )}

        <Button onClick={registerUser} className={classes.signup}>
          Sign Up
        </Button>
      </Container>
    </div>
  );
}

export default SignUp;
