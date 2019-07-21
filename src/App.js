import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from './BottomNavigation';
import FixedContainer from './FixedContainer';
import ProfileSummary from './ProfileSummary';
import colors from './colorTheme';
import './App.css';

const useStyles = makeStyles({
  app: {
    backgroundColor: colors.p3
  },
  day: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#630663',
    margin: 0,
    textAlign: 'center'
  },
  progressBar: {
    transition: 'none',
    width: '100%',
    height: '14px',
    backgroundColor: 'black'
  },
  progress: {
    transition: 'none',
    width: '40%',
    height: '14px',
    backgroundColor: '#79C53A'
  },
  pullUp: {
    position: 'relative',
    top: '-35px'
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.app}>
        <ProfileSummary 
          src="https://unlockwomenspower.files.wordpress.com/2012/06/ratidzo-mambo-head-shot-1.jpg?w=390&h=586&zoom=2" />

        <FixedContainer />
        <BottomNavigation />
    </div>
  );
}

export default App;
