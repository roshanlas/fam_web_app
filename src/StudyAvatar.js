
  import React from 'react';
  import Avatar from '@material-ui/core/Avatar';
  import colors from './colorTheme';
  import { makeStyles } from '@material-ui/core/styles';

  const useStyles = makeStyles(theme => ({
    studyAvatar: {
        position: 'relative',
        width: 120,
        height: 120,
        margin: "0 auto 0 auto",
    },
    avatar: {
        color: "red",
        width: 120,
        height: 120,
        border: 'solid 8px white',
    },
    avatarProgress: {
        width: 120,
        height: 120,
        border: `solid 8px ${colors.b2}`,
        borderRadius: '100%',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0
    },
  }));


const StudyAvatar = (prop) => {
    const classes = useStyles();

    return(
        <div className={classes.studyAvatar}>
            <Avatar className={classes.avatar} src={prop.src}/>
            <div className={classes.avatarProgress}></div>
        </div>
    )
}

export default StudyAvatar;