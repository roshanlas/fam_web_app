import React, { useContext } from 'react';
import Container from '@material-ui/core/Container';
import Logo from './Logo';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import colors from './colorTheme';
import { AppContext } from './App';

const useStyles = makeStyles({
  sidebar: {
    position: 'fixed',
    top: '0px',
    right: '0px',
    width: '0%',
    height: '100%',
    textAlign: 'left',
    background: colors.p3,
    zIndex: '10',
    transition: 'width 0.25s'
  },
  open: {
      width: '100%'
  },
  link: {
    display: 'block',
    color: '#868383',
    fontSize: '1.4em',
    borderBottom: 'solid 1px #868383',
    width: '100%',
    padding: '1em 0',
    '&:hover': {
      textDecoration: 'none'
    }
  },
  backButton: {
      top: '1.5rem',
      left: '1.5rem',
      height: '1.6rem',
      width: '1.6rem',
      display: 'block',
      position: 'absolute'
  }
});


const Sidebar = (prop) => {
    const classes = useStyles();
    const [globalState, setGlobalState] = useContext(AppContext);
    const status = prop.open? classes.open : "";
    const logout = () => {
        setGlobalState({...globalState, loginStatus: false})
    }
    return(
      <div className={`${classes.sidebar} ${prop.className} ${status}`}>
        <div className={classes.header}>
            <Button className={classes.backButton} onClick={prop.onClick}>
              <ArrowBackIosIcon/>
            </Button>
            <Logo />
        </div>
        <Container>
            <h1>Settings</h1>
            <Link 
            className={classes.link} 
            onClick={logout}
            component={RouterLink} to="/">
                Log Out
            </Link>
            <Link 
            className={classes.link} 
            component={RouterLink} to="/about">
                About Female and More
            </Link>
        </Container>
      </div>
    )
  };

export default Sidebar;