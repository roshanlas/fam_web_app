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
  infoGroup: {
    position: 'fixed',
    bottom: '3.5rem',
    width: '100%'
  },
  infoCard: {
    padding: '1rem 2rem',
    marginTop: '-2rem',
    minHeight: '2rem',
    borderRadius: '2rem 0 0 0',
    backgroundColor: colors.pink2,
    width: '100%',
    color: 'white'
  },
  infoSubHead: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 'calc(100% - 3rem)'
  }
});

const InfoCard = (prop) => {
  return (
    <div className={prop.className} style={prop.style}>
    {prop.children}
    </div>
  )
}

const Profile = () => {
  const classes = useStyles();
  return (
    <div className={classes.profile}>
        <ProfileSummary 
          src="https://unlockwomenspower.files.wordpress.com/2012/06/ratidzo-mambo-head-shot-1.jpg?w=390&h=586&zoom=2" />

        <div className={classes.infoGroup}>
          <InfoCard className={classes.infoCard}
          style={{backgroundColor: colors.pink2}}>
            <h2>Day 1 - Answers Pending</h2>
          </InfoCard>
          <InfoCard className={classes.infoCard}
          style={{backgroundColor: colors.g2}}>
            <div className={classes.infoSubHead}>
              <h4>Day 1. Story of the Day</h4>
              <h4>Pharmacist</h4>
            </div>
            <h2>Dr. Stella</h2>
            <p>Dr. Stella Okoli, a Nigerian pharmacist and entreprenuer has defied...</p>
          </InfoCard>
        </div>
        <BottomNavigation />
    </div>
  );
}

export default Profile;
