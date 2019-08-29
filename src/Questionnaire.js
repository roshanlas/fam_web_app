import React, { useContext } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Logo from './Logo';
import { BackButton } from './Heading';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import colors from './colorTheme';

const useStyles = makeStyles({
    questionnaire: {
        background: colors.pink2,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100%',
        minHeight: '100vh',
        color: 'white'
    },
    backButton: {
        top: '1.5rem',
        left: '1.5rem',
        height: '1.6rem',
        width: '1.6rem',
        display: 'block',
        position: 'absolute'
    },
    infoSubHead: {
        display: 'flex',
        justifyContent: 'space-between',
        width: 'calc(100% - 3rem)',
        margin: '1rem 0'
    },
    heading: {
        marginBottom: '1.6rem'
    }
  });
  
const Questionnaire = () => {
    const classes = useStyles();
    return(
        <div className={`${classes.questionnaire}`}>
            <CssBaseline />
            <div className={classes.header}>
                <BackButton to="/" />
                <Logo />
            </div>
            <Container maxWidth="xs">
                <div className={classes.infoSubHead}>
                    <h3>Day 1. Story of the Day</h3>
                    <h3>Pharmacist</h3>
                </div>
                <h2 className={classes.heading}>Dr. Stella</h2>
                <h2>Question 1:</h2>
                <p>Lorem ipsum sit amet, consequter sadiscping elitir?</p>
            </Container>
        </div>
    )
}

export default Questionnaire;