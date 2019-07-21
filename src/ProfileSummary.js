import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import colors from './colorTheme';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import StudyAvatar from './StudyAvatar';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: colors.p3,
    color: colors.y1,
    padding: theme.spacing(3, 2),
    height: '270px'
  },
  media: {
    margin: '0 auto',
    textAlign: 'center'
  },
  txtContainer: {
    position: 'relative',
    top: '25px'
  },
  text1: {
    margin: 0,
  },
  text2: {
    margin: 0,
    fontSize: '20px',
    fontWeight: 'bold'
  },
  text3: {
    margin: 0,
    fontSize: '14px'
  },
  icon: {
    fontSize: '1.2em',
    position: 'relative',
    top: '3px',
    fontWeight: 'normal'
  }
}));

export default function ProfileSummary(prop) {
  const classes = useStyles();

  return (
    <div>
      <Paper square className={classes.root}>
        <div className={classes.media}>
          <StudyAvatar src={prop.src}/>
          <div className={classes.txtContainer}>
            <p className={classes.text2}>Amara</p>
            <p className={classes.text3}>
              <CardGiftcardIcon className={classes.icon}/> 37 Points
            </p>
            <p className={classes.text3}>
              In 10 years I want to be a sucessful lawyer
            </p>
          </div>
        </div>
      </Paper>
    </div>
  );
}