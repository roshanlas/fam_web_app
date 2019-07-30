import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Logo from './Logo';
import { BackButton } from './Heading';
import colors from './colorTheme';
import { makeStyles } from '@material-ui/core/styles';

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


const About = () => {
  const classes = useStyles();

  return (
    <div className={classes.main}>
      <CssBaseline />
      <div className={classes.header}>
          <BackButton to="/" />
          <Logo />
        </div>
      <Container maxWidth="xs">
        <h1>About Female and More</h1>
        <p>
        Female And More (FAM) is a self-esteem and leadership initiative of Youngstars Foundation that is increasing females’ self-esteem, promoting women equity and harnessing females’ innate leadership capabilities in order for women to reach their fullest leadership potentials in any chosen field of endeavor. The project uses its 30 days self-esteem and leadership handbook containing inspiring stories of 30 African young and adult women who defied social barriers and stereotypes to achieve greatness. FAM has the secondary school version targeting teenage girls and the digital edition targeting adult females out of secondary school, aged 18 years and above.
        </p>
      </Container>
    </div>
  );
}

export default About;
