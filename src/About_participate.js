import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { identifier } from '@babel/types';



const useStyles = makeStyles(theme => ({
  main: {
    flexGrow: 1,
    justify: "center"
  },
  text: {
    display: "flex",
    flexDirection: "column",
    color: "#707070", 
    
  },
  heading: {
    fontSize: "20px",
    fontFamily: "Oswald",
    textAlign: 'center',
  },
  paragraph: {
    textAlign: "center",
    display: "flex",
    flexWrap: "wrap",
     flexDirection: "row",
     alignSelf: "center",
     justifyContent: "center",
     width: "900px",
     color: "#EBEBEB",
     fontFamily: "opens Sans",
  },
  participate: {
    width: "410px",
    height: "167px",
    borderRadius: "30px",
    margin: "10px",
  
    fontFamily: "16px"
  },
  green: {
    backgroundColor: "#8EAD9F",
    borderRadius: "30px",
    margin: "20px",
    padding: "10px"
  },
  brown: {
    backgroundColor: "#E2998E",
    borderRadius: "30px",
    margin: "20px",
    padding: "10px"
  },
  darkerbrown:{
    backgroundColor: "#B78576",
    borderRadius: "30px",
    margin: "20px",
    padding: "10px"
  },
  orange: {
    backgroundColor: "#F3BE84",
    borderRadius: "30px",
    margin: "20px",
    padding: "10px"
  }

}));

export default function About_participate() { 
  const classes = useStyles();

  return(
      <div className={classes.main}>
            <CssBaseline />
            <Container>
            <Grid container spacing={3}>
              <Grid item xs={12}>

                <div className={classes.text}>
                  <div className={classes.heading}>
                    <h2>Areas you can participate in</h2>
                  </div>

                  <div className={classes.paragraph}>

                    <div className={classes.participate}>
                      <div className={classes.green}>
                          <h3>30 days self esteem program</h3>
                            <p>Boost your self esteem by reading success stories of other women for 30 days 
                            and completing quizzes! Collect point and exchange them for gifts.</p>
                      </div>
                    </div>
          
                    <div className={classes.participate}>
                      <div className={classes.orange}>   
                          <h3>Promo</h3>
                            <p>Complete tasks to get points that you can exchange for movie 
                              tickets, leadership seminars tickets, books, online courses and many more!</p>
                      </div>
                    </div>

                     <div className={classes.participate}>    
                      <div className={classes.darkerbrown}>  
                          <h3>Causes</h3>
                            <p>Stories of previous participants and the change they made. Learn about 
                              your fellows' success to get inspired and motivated for your own project.</p>
                        </div>
                      </div>

                      <div className={classes.participate}> 
                        <div className={classes.brown}>   
                          <h3>90 days leadership program</h3>
                            <p>Participate in 90 days projects or create your own to make a 
                              difference for your community. Share your result with others to inspire and engage.</p>
                        </div>
                      </div>
                    
                      <div className={classes.participate}>
                        <div className={classes.green}>
                        <h3>Forums</h3>
                          <p>Connect with your Female and More fellows and discuss topics of your interest 
                        
                            together. Education, Opportunities or Relationships and Fashion - there is a room for all!</p>
                        </div>
                      </div> 

                      </div>
                </div>
              </Grid>
            </Grid>
          </Container>
         </div>
    )
}