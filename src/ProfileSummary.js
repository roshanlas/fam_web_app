import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import colors from './colorTheme';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import DoneIcon from '@material-ui/icons/Done';
import StudyAvatar from './StudyAvatar';
import { AppContext } from './App';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: colors.p3,
    color: colors.y1,
    padding: theme.spacing(3, 2),
    height: '270px',
    boxShadow: 'none'
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
  },
  dailyProgress: {
    margin: '1rem 0 0 0',
    textAlign: 'center'
  },
  calendar: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  dayItem: {},
  date: {
    position: 'relative'
  },
  calendarIcon: {
    position: 'absolute',
    right: '-1.5rem'
  },
  done: {
    fontWeight: 'bold',
    color: colors.pink2
  }
}));

const week = [
  {dayNum: 26, dayWeek: 'Mon'},
  {dayNum: 27, dayWeek: 'Tue'},
  {dayNum: 28, dayWeek: 'Wed'},
  {dayNum: 29, dayWeek: 'Thu'},
  {dayNum: 30, dayWeek: 'Fri'},
  {dayNum: 31, dayWeek: 'Sat'},
  {dayNum: 1, dayWeek: 'Sun'},
]

const DayItem = (prop) => {
  const classes = useStyles();
  let icon;


  switch(prop.status){
      case 'done':
        icon = <DoneIcon className={classes.calendarIcon}/>
      break;
    case 'pending':
        icon = <AccessTimeIcon className={classes.calendarIcon}/>
      break;
    default:
    break
  }
  return(
    <div className={`${classes.dayItem} ${classes[prop.status]}`}>
      <div className={classes.date}>
        {`${prop.dayNum}`}{icon}
      </div>
      <div className={classes.label}>
        {`${prop.dayWeek}`}
      </div>
    </div>
  )
}

const DailyProgress = (prop) => {
  const classes = useStyles();
  const [globalState] = useContext(AppContext);

  const getDayStatus = (a, b) => {
    if(parseInt(a) > b && b!==1) {
      return 'done';
    } else if (parseInt(a) === b) {
      return 'pending';
    }
  }

  return (
    <div className={classes.dailyProgress}>
      <h4 style={{textAlign: 'left', margin: '2em auto'}}>{
        `Story of The Day: ${prop.challengeName}`
      }</h4>
      <div className={classes.calendar}>
        {week.map(
          dayItem=><DayItem 
            key={dayItem.dayNum}
            dayWeek={dayItem.dayWeek} 
            dayNum={dayItem.dayNum} 
            status={
              getDayStatus(globalState.dayOfMonth, dayItem.dayNum)
            }  
          />)}
      </div>
      
    </div>
  )
}

export default function ProfileSummary(prop) {
  const classes = useStyles();
  const [globalState] = useContext(AppContext);
  
  return (
    <div>
      <Paper square className={classes.root}>
        <div className={classes.media}>
          <StudyAvatar src={prop.src}/>
          <div className={classes.txtContainer}>
            <p className={classes.text2}>
              {`${localStorage.firstName} ${localStorage.lastName}`}
            </p>
            <p className={classes.text3}>
              <CardGiftcardIcon className={classes.icon}/> 37 Points
            </p>
            <p className={classes.text3}>
              In 10 years I want to be a sucessful lawyer
            </p>
            <DailyProgress 
            challengeName={globalState.title}/>
          </div>
        </div>
      </Paper>
    </div>
  );
}