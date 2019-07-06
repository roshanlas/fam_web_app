import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import { relative } from 'path';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#89092f',
    color: '#fff',
    padding: theme.spacing(3, 2),
    height: '270px'
  },
  media: {
    display: 'flex'
  },
  avatar: {
    margin: "0 20px 20px",
    color: "red",
    width: 120,
    height: 120,
    border: 'solid 4px white'
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

export default function PaperSheet(prop) {
  const classes = useStyles();

  return (
    <div>
      <Paper square className={classes.root}>
        <div className={classes.media}>
          <Avatar className={classes.avatar} src={prop.src}/>
          <div className={classes.txtContainer}>
            <p className={classes.text1}>Welcome back</p>
            <p className={classes.text2}>Amara</p>
            <p className={classes.text3}>
              <CardGiftcardIcon className={classes.icon}/> 37 Points
            </p>
          </div>
        </div>
        <Typography component="p">
          Paper can be used to build surface or other elements for your application.
        </Typography>
      </Paper>
    </div>
  );
}