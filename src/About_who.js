import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles(theme => ({
  main: {
    flexGrow: 1,
    justify: "center"
  },
  text: {
    padding: theme.spacing(2),
    alignItems: 'center',
    direction: "column",
    color: "#707070",
    margin: "dense"
    
  },
  heading: {
    fontSize: "24px",
    fontFamily: "Oswald",
    textAlign: 'center',
  },
  paragraph: {
    textAlign: 'left',
    fontFamily: "Open Sans",
    fontSize: "16px"
  }
}));


export default function About_who() {
  const classes = useStyles();

  return(
      <div className={classes.main}>
            <CssBaseline />
            <Container>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <div className={classes.text}>
                  <div className={classes.heading}>
                  <h1>About Female and More</h1>
                  </div>
                
                  <div className={classes.paragraph}>
                      <p>Female And More (FAM) is a self-esteem and leadership initiative 
                        of Youngstars Foundation that is increasing females’ self-esteem, 
                        promoting women equity and harnessing females’ innate leadership 
                        capabilities in order for women to reach their fullest leadership 
                        potentials in any chosen field of endeavor. </p>
                        <p>
                        The project uses its 30
                        days self-esteem and leadership handbook containing inspiring stories 
                        of 30 African young and adult women who defied social barriers and 
                        stereotypes to achieve greatness. FAM has the secondary school version 
                        targeting teenage girls and the digital edition targeting adult females
                          out of secondary school, aged 18 years and above.</p>
                      </div>
                  </div>
              </Grid>
            </Grid>
          </Container>
            
          </div>
            
    )
}