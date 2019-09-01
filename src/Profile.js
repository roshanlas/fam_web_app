import React, { useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from './BottomNavigation';
import ProfileSummary from './ProfileSummary';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import colors from './colorTheme';
import './App.css';
import { AppContext } from './App';

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
    display: 'block',
    padding: '1rem 2rem',
    marginTop: '-2rem',
    minHeight: '2rem',
    borderRadius: '2rem 0 0 0',
    backgroundColor: colors.pink2,
    width: '100%',
    color: 'white',
    '&:hover': {
      textDecoration: 'none'
    }
  },
  infoSubHead: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 'calc(100% - 3rem)'
  }
});

const InfoCard = (prop) => {
  return (
    <Link className={prop.className} style={prop.style}
    component={RouterLink} to={prop.to}>
    {prop.children}
    </Link>
  )
}

export const submitData = async (formData, service) => {
  return await fetch(
      // URL
      `${process.env.REACT_APP_STORY_URL}/${service}`, 
      // Data
      {
          method: 'POST',
          body: JSON.stringify(formData),
          headers: {"Content-Type": "application/json"}
      }
  )
}

const Profile = () => {

  const classes = useStyles();
  const [globalState, setGlobalState] = useContext(AppContext);

  const getStoryOfDay = () => {
    submitData({}, 'story-of-day')
    .then( async res => {
      let ret = await res.json();
      if(res.ok) {

        setGlobalState({
          ...globalState, 
          calendar: ret.calendar,
          currentDay: ret.currentDay,
          dayOfMonth: ret.dayOfMonth,
          storyID: ret.story.storyID,
          person: ret.story.person,
          occupation: ret.story.occupation,
          title: ret.story.title,
          description: ret.story.description,
          questions: ret.story.questions
        });
      }
    });
  };

 

  useEffect(()=>{
    if(!globalState.currentDay) {
      getStoryOfDay();
    }
  }, []);
  
  return (
    <div className={classes.profile}>
        <ProfileSummary 
          story={globalState.story}
          src="./images/profile.jpg" />

        <div className={classes.infoGroup}>
          <InfoCard to="/questionnaire"
          className={classes.infoCard}
          style={{backgroundColor: colors.pink2}}>
            <h2>Day {globalState.dayOfMonth} - Answers Pending</h2>
          </InfoCard>
          <InfoCard to="/story"
          className={classes.infoCard}
          style={{backgroundColor: colors.g2}}>
            <div className={classes.infoSubHead}>
              <h4>Day {globalState.dayOfMonth} Story of the Day</h4>
              <h4>{globalState.occupation}</h4>
            </div>
            <h2>{globalState.person} -  {globalState.title}</h2>
            <p style={{width: 'calc(100% - 5rem)'}}>{
              globalState.description ? globalState.description.slice(0,600).concat('...') : ''
            }</p>
          </InfoCard>
        </div>
        <BottomNavigation />
    </div>
  );
}

export default Profile;
