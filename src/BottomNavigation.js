import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import Sidebar from './Sidebar';
import MenuIcon from '@material-ui/icons/Menu';
import colors from './colorTheme';

const useStyles = makeStyles({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    position: 'fixed',
    bottom: '0px',
    zIndex: '20',
    backgroundColor: colors.gray4
  },
  nav: {
    color: '#89092F'
  },
  button: {
    minWidth: 'auto',
    maxWidth: '4.8rem',
    width: '4.8rem'
  }
});


export default function SimpleBottomNavigation(prop) {
  const classes = useStyles();
  const [value, setValue] = React.useState({
    original: 0,
    sidebarOpen: false,
  });

  const toggleSidebar = () => {
    setValue({ ...value, sidebarOpen: !value.sidebarOpen })
  }

  return (
    <div>
      <Sidebar className="Sidebar" onClick={toggleSidebar} open={value.sidebarOpen}/>
      <BottomNavigation
        value={value.orignal}
        onChange={(event, newValue) => {
          setValue({...value, original: newValue});
        }}
        showLabels
        className={classes.root}
      >
        <BottomNavigationAction 
          onClick={toggleSidebar} 
          className={`${classes.button} menu`} 
          icon={<MenuIcon />} />
      </BottomNavigation>
    </div>
  );
}