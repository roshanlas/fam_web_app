import React, { useState, useContext, useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Logo from './Logo';
import { BackButton } from './Heading';
import { Link as RouterLink } from 'react-router-dom';
import { submitData, getData } from './registration-utils';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DoneIcon from '@material-ui/icons/Done';
import colors from './colorTheme';
import { AppContext } from './App';

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
        width: '100%',
        margin: '1rem 0'
    },
    heading: {
        marginBottom: '1.6rem'
    },
    textbox: {
        padding: '1rem',
        fontSize: '1.2rem',
        borderRadius: '0.6rem',
        width: '100%',
        minHeight: '7.5rem',
        '&:focus': {
            outline: 'none'
        }
    },
    button: {
        color: 'white',
        width: '9rem',
        display: 'block',
        margin: '0.6rem 0 0 0.6rem',
        padding: '0.4rem 0rem',
        fontSize: '1rem',
        maxWidth: '12rem',
        fontFamily: 'Oswald, sans-serif !important',
        borderRadius: '.8rem',
        textTransform: 'none',
        backgroundColor: colors.g3,
        '&:hover': {
          backgroundColor: colors.g3,
        }
    },
    loadingButton: {
        color: 'white',
        width: '9rem',
        display: 'block',
        margin: '0.6rem 0 0 0.6rem',
        padding: '0.4rem 0rem',
        fontSize: '1rem',
        maxWidth: '12rem',
        fontFamily: 'Oswald, sans-serif !important',
        borderRadius: '.8rem',
        textTransform: 'none',
        textAlign: 'center',
        backgroundColor: colors.g3,
        opacity: '0.5',
        '&:hover': {
          backgroundColor: colors.g3,
        }
    },
    doneIcon: {
        position: 'absolute',
        top: '0.5rem',
        right: '0.9rem'
    }, 
    error:{
        fontSize: '1.2em',
        color: 'white',
        background: 'red',
        padding: '0.2em 0.6em',
        borderRadius: '0.2em'
    },
    prompt: {
        display: 'none'
    },
    open: {
        display: 'block',
        position: 'fixed',
        top: '0px',
        left: '0px',
        width: '100%',
        height: '100%',
        background: 'rgba(0,0,0,0.2)'
    },
    promptBox: {
        maxWidth: '30em',
        width: 'calc(100% - 2em)',
        padding: '2em',
        position: 'absolute',
        color: 'black',
        background: 'white',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        boxShadow: '1px 1px 10px rgba(0,0,0,0.5)'
    }
});

const Questionnaire = (props) => {
    const classes = useStyles();
    const [ globalState, setGlobalState ] = useContext(AppContext);
    const [ state, setState ] = useState({ 
        draftSaved: false, 
        loading: false,
        error: false,
        prompt: 'hidden',
        submit: '',
        answersLoading: true
    });
    let questions = globalState.questions? globalState.questions : [];
    let count =0;
    let fields = [];
    let answers;

    const getStudentSubmission = () => {
        getData(
            `submission/retrieve/${globalState.storyID}`, 
            'GET'
        )
        .then(async res => {
            let ret = await res.json();
            if(res.ok) {
                setGlobalState({
                    ...globalState,
                    submission: ret.submission === null ? [] : ret.submission
                });
            } else {
                setGlobalState({
                    ...globalState,
                    submission: false
                })
            }
        })
        .catch(err => {
            console.log('err', err)
            setGlobalState({
                ...globalState,
                submission: false
            })
        });
    };

    /**
     * saveDraft
     */
    const saveDraft = () => {

        setState({ 
            ...state, 
            draftSaved: true, 
            loading: true
        });

        answers = fields.map(field=>
            { return {answer: field.value} }
        );

        submitData({
            submission: answers, 
            storyID: globalState.storyID,
            final: false
        }, 'submission/submit')
        .then(async res=>{
            let ret = Promise.resolve(res.json());
            if(res.ok) {
                setState(
                    { ...state, draftSaved: true, loading: false }
                );
            } else {
                setState(
                    { 
                        ...state, 
                        draftSaved: false, 
                        loading: false, 
                        error: true
                    }
                );
            }
        }).catch(err => {
            setState(
                { 
                    ...state, 
                    draftSaved: false, 
                    loading: false,
                    error: true
                }
            );
        })
    };

    /**
     * 
     */
    const promptSave = () => {
        setState({
            ...state,
            prompt: 'open'
        });
    };

    /**
     * 
     */
    const closePrompt = () => {
        setState({
            ...state,
            prompt: 'close'
        });
    }

    /**
     * submitAndConfirm
     */
    const submitAndConfirm = () => {

        setState({ 
            ...state, 
            draftSaved: true, 
            loading: true
        });

        answers = fields.map(field=>
            { return {answer: field.value} }
        );

        submitData({
            submission: answers, 
            final: true,
            storyID: globalState.storyID,
        }, 'submission/submit')
        .then(async res=>{
            let ret = Promise.resolve(res.json());
            if(res.ok) {
                setState({ 
                    ...state, 
                    loading: false,
                    prompt: 'hidden',
                    submit: 'done'
                });
            } else {
                setState({ 
                    ...state, 
                    loading: false, 
                    error: true,
                    prompt: 'hidden',
                    submit: ''
                });
            }
        }).catch(err => {
            setState(
                { 
                    ...state, 
                    loading: false,
                    error: true,
                    prompt: 'hidden',
                    submit: ''
                }
            );
        })
    };


    useEffect(()=>{
        
        if(globalState.submission === undefined) {
            getStudentSubmission();
        }
    
        if(questions.length === 0) {
            props.history.push(`/profile`)
        }
        count = 0;
    });


    return(
        <div className={`${classes.questionnaire}`}>
            <CssBaseline />
            <div className={classes.header}>
                <BackButton to="/profile" />
                <Logo />
            </div>
            <Container maxWidth="xs">
                <div className={classes.infoSubHead}>
                    <h3>Day {globalState.dayOfMonth} Story of the Day</h3>
                    <h3>{globalState.occupation}</h3>
                </div>
                <h2 className={classes.heading}>{globalState.person}</h2>
                
                {globalState.submission && questions.map(question=>{
                        var e = <div key={count}>
                                <h2>{`Question ${count+1}:`}</h2>
                                <p>{question.title}</p>
                                <textarea 
                                ref={comp=>fields.push(comp)}
                                className={classes.textbox} 
                                defaultValue={
                                    globalState.submission.length > 0 ? 
                                        globalState.submission[count].answer : ''
                                }/>
                            </div>
                        count++; return e;
                    }
                )} 

                
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '2em' }}>
                    { !state.loading && 
                        <Button 
                            onClick={saveDraft}
                            st={state.draftSaved.toString()}
                            className={`btn-draft ${classes.button}`}>
                                Save Draft {state.draftSaved && <DoneIcon className={classes.doneIcon}/>}
                        </Button> 
                    }
                    { state.loading && <div className={`${classes.loadingButton}`}>Please wait</div>}
                    <Button 
                        onClick={promptSave}
                        className={`btn-submit ${classes.button} ${state.submit}`}>
                            Submit
                    </Button>
                </div>
                { state.error && <p className={classes.error}>An error occured. Please try again.</p>}

                <div className={`${classes.prompt} ${classes[state.prompt]} prompt ${state.prompt}`}>
                    <div className={classes.promptBox}>
                        <p>Are you sure you want to submit your answers?</p>
                        <p>You will not be able to change your answers later.</p>
                        <Button className="btn-confirm" onClick={submitAndConfirm}>Submit</Button>
                        <Button className="btn-cancel" onClick={closePrompt}>Cancel</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Questionnaire;