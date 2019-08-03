import React from 'react';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { makeStyles } from '@material-ui/core/styles';
import colors from './colorTheme';

const useStyles = makeStyles(theme => ({
    backButton: {
        top: '1.5rem',
        left: '1.5rem',
        height: '1.6rem',
        width: '1.6rem',
        display: 'block',
        position: 'absolute',
        color: colors.y1,
    }
  }));

export const BackButton = (prop) => {
    const classes = useStyles();
    return (
      <Link className={`${classes.backButton} ${prop.className}`} component={RouterLink} to={prop.to}>
        <ArrowBackIosIcon />
      </Link>
    )
  }