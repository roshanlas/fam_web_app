import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuAppBar from './MenuAppBar';
import ImgMediaCard from './ImgMediaCard';
import logo from './logo.svg';
import BottomNavigation from './BottomNavigation';
import FixedContainer from './FixedContainer';
import PaperSheet from './PaperSheet';
import SimpleCard from './SimpleCard';
import TextCard from './TextCard';
import Typography from '@material-ui/core/Typography';
import './App.css';

const useStyles = makeStyles({
  app: {
    backgroundColor: '#ED8BA8'
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
        <PaperSheet src="https://unlockwomenspower.files.wordpress.com/2012/06/ratidzo-mambo-head-shot-1.jpg?w=390&h=586&zoom=2" />
        <div className={classes.pullUp}>
          <SimpleCard>
            <Typography className={classes.day}>Day 8</Typography>
            <Typography>Keep working towards your goal!</Typography>          
            <div className={classes.progressBar}>
              <div className={classes.progress}/>
            </div>
          </SimpleCard>
          <TextCard />
          <TextCard />
          <TextCard />
          <FixedContainer />
          <BottomNavigation />
        </div>
    </div>
  );
}

export default App;
