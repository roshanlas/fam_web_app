import React, { useContext } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Logo from './Logo';
import { BackButton } from './Heading';
import colors from './colorTheme';
import { makeStyles } from '@material-ui/core/styles';
import { AppContext } from './App';

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: colors.p3,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%',
    minHeight: '100vh'
  },
  header: {
    position: 'relative'
  }
}));


const Story = () => {
  const classes = useStyles();
  const [ globalState ] = useContext(AppContext)

  return (
    <div className={classes.main}>
      <CssBaseline />
      <div className={classes.header}>
          <BackButton to="/profile" />
          <Logo />
        </div>
      <Container maxWidth="xs">
        <h1>{globalState.title}</h1>
        <p>{globalState.description}</p>
      </Container>
    </div>
  );
}

export default Story;
