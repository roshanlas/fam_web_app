import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Logo from './Logo';
import { BackButton } from './Heading';
import colors from './colorTheme';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: colors.g2,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    minHeight: '100vh'
  },
  header: {
    position: 'relative'
  },
  title: {
      color: 'white !important'
  },
  copy: {
      color: 'white !important'
  }
}));


const Challenge = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <CssBaseline />
      <div className={classes.header}>
          <BackButton to="/" />
          <Logo />
        </div>
      <Container maxWidth="xs">
        <h1 className={classes.title}>30 Days Challenge</h1>
        <p className={classes.copy}>
        Female and More is an exciting, elevating and enriching innovative program for females passionate about pursuing and achieving a great future. If you are reading this, you are one of such, congratulations!<br/><br/>
        You can sign up for the 30 days Female and More self esteem program online or in the app. To complete the program you have to read a story per day during 30 days. You also have to submit a personal high end goal you will achieve in 5-10 years. <br/><br/>
        After completing the 30 Days Program you will become eligible to participate in a personal leadership development challenge by initiating an activity to address any of the United Nations Sustainable Development Goals (SDGs).<br/><br/>
        Winners of the 2 outstanding projects would win FAM Leadership Award which will include an all expense paid 5 days international learning visit.
        </p>
      </Container>
    </div>
  );
}

export default Challenge;
