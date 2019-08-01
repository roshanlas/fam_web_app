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
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    padding: theme.spacing(2),
    alignItems: 'center',
    direction: "column",
    color: "#707070",
    margin: "dense", 
    
  },
  heading: {
    fontSize: "20px",
    fontFamily: "Oswald",
    textAlign: 'center',
  },
  paragraph: {
    textAlign: 'left',
    fontFamily: "Open Sans italic",
    fontSize: "4p4x",
    display: "flex",
     /*background-color: grey;*/
     height: "auto",
     alignSelf: "center",
     justify: "center",
     margin: "5px",
     fontStyle: "italic",
     padding: "5px"
  },
  testy: {
    display: "flex",
    flexDirection: "column",
    width: "400px"
  },
  c: {
    quotes: "«" ,
    qoutes: "»",
   
  }

}));

export default function About_testimony() { 
  const classes = useStyles();

  return(
      <div className={classes.main}>
            <CssBaseline />
            <Container>
            <Grid container spacing={3}>
              <Grid item xs={12}>

                <div className={classes.text}>
                  <div className={classes.heading}>
                  <h2>Participants testimony</h2>
                  </div>

                  <div className={classes.paragraph}>

                    <div className={classes.testy}>
                        <p><q className={classes.c}>It is a long established fact that a reader will be distracted by the 
                              readable content of a page when looking at its layout.
                        </q></p>
                              
                        <p><q className={classes.c}> Lorem Ipsum is that it has a more-or-less normal distribution of letters, 
                              as opposed to using 'Content here, content here', making it look like readable 
                            English. Many desktop publishing packages and web page editors now use 
                        </q> </p>
                    </div>

                          <div className={classes.testy}>
                            <p><q className={classes.c}> Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
                              will uncover many web sites still in their infancy. Various versions have evolved 
                              over the years 
                            </q></p>
                            <p><q className={classes.c}> Lorem Ipsum as their default model text, and a search for 'lorem ipsum' 
                              will uncover many web sites still in their infancy. Various versions have evolved 
                              over the years 
                            </q></p>
                    </div>
                
                    </div>
                  
                  </div>
              </Grid>
            </Grid>
          </Container>
         </div>
    )
}