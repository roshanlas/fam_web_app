import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    logo: {
        display: 'block',
        width: '14rem',
        margin: '0 auto',
        padding: '3.2rem 0 0'
    }
}));

const Logo = () => {
    const classes = useStyles();
    return(
        <img className={classes.logo} src="images/logo.png" alt="Female & More"/>
    )
}

export default Logo;