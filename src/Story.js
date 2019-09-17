import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Logo from './Logo';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';
import { BackButton } from './Heading';
import colors from './colorTheme';
import { makeStyles } from '@material-ui/core/styles';
import Story003 from './story_documents/003';

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: colors.p3,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    minHeight: '100vh',
    padding: ' 0 0 2em 0'
  },
  header: {
    position: 'relative'
  },
  link: {
    backgroundColor: colors.g3,
    borderRadius: '1.4rem',
    color: 'white',
    textTransform: 'none',
    textAlign: 'center',
    fontSize: '1.4rem',
    width: '100%',
    maxWidth: '12rem',
    display: 'block',
    margin: '2.4rem auto 1.6rem',
    padding: '0.8rem 0.2rem'
  }
}));


const Story = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <CssBaseline />
      <div className={classes.header}>
          <BackButton to="/profile" />
          <Logo />
        </div>
      <Container maxWidth="sm">
        <Story003 />
        <Link className={classes.link} 
        component={RouterLink} to="/questionnaire">Go to questions</Link>
      </Container>
    </div>
  );
}

export default Story;
