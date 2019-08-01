import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Link as RouterLink } from 'react-router-dom';
import colors from './colorTheme';
import Logo from './Logo';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import About_who from "./About_who";
import About_succeed from "./About_succeed";
import About_testimony from "./About_testimony";
import About_participate from "./About_participate";




const useStyles = makeStyles(theme => ({
    main: {
      backgroundColor: colors.p3,
    },
    heading: {
      fontSize: "30px",
      fontFamily: "Oswald",
      textAlign: 'center',
      color: "#707070"
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
  form: {
    textAlign: 'center',
    paddingBottom: "20px"
  }
  }));


const About = () => {
    const classes = useStyles();
    return(
        <div className={classes.main}>
        <Logo />
        <CssBaseline />
        <Container className={classes.container}>
     
            <About_who />
            <About_succeed />
            <About_testimony />
            <About_participate />
             
            <div className={classes.heading}>
              <h3>Join Female and More to Participate!</h3>
            </div>

            <form className={classes.form} noValidate>
              <Link className={classes.signup} component={RouterLink} to="/signup">
                Sign Up
              </Link>
            </form>
        
        </Container>
        </div>
    )
}

export default About;