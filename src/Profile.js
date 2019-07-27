import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from './BottomNavigation';
import FixedContainer from './FixedContainer';
import ProfileSummary from './ProfileSummary';
import colors from './colorTheme';
import './App.css';

const useStyles = makeStyles({
  profile: {
    backgroundColor: colors.p3
  },
});

function Profile() {
  const classes = useStyles();
  return (
    <div className={classes.profile}>
        <ProfileSummary 
          src="https://unlockwomenspower.files.wordpress.com/2012/06/ratidzo-mambo-head-shot-1.jpg?w=390&h=586&zoom=2" />

        <FixedContainer />
        <BottomNavigation />
    </div>
  );
}

export default Profile;
