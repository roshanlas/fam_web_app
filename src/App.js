import React, { useState, createContext, useEffect } from 'react';
import {  
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import { PrivateRoute } from './PrivateRoute';
import Main from './Main';
import SignUp from './SignUp';
import SignIn from './SignIn';
import About from './About';
import Challenge from './Challenge';
import TermsConditions from './TermsConditions';
import Profile from './Profile';
import ForgotPassword from './ForgotPassword';
import Questionnaire from './Questionnaire';
import Story from './Story';
import './App.css';

export const AppContext = createContext();

const App = () => {

  const [state, setState] = useState({
    user: {}
  });

  useEffect(()=>{
    switch(state.loginStatus) {
      case true:
          // Put the JWT in the browser storage
          localStorage.setItem('firstName', state.firstName);
          localStorage.setItem('lastName', state.lastName);
          localStorage.setItem('token', state.token);
        break;
      case false:
          localStorage.clear();
        break;
      default:
        break;
    }   
  })

  return (
  <AppContext.Provider value={[state, setState]} >    
    <Router>
        <Switch>
            <Route path="/" exact component={Main}/>
            <Route path="/signup" component={SignUp} />
            <Route path="/sign-in" component={SignIn} />
            <Route path="/forgot-password" component={ForgotPassword} />
            <Route path="/about" component={About} />
            <Route path="/30-day-challenge" component={Challenge} />
            <Route path="/terms-and-conditions" component={TermsConditions} />
            <PrivateRoute path="/profile" component={Profile} />
            <PrivateRoute path="/questionnaire" component={Questionnaire} />
            <PrivateRoute path="/story" component={Story} />
        </Switch>
    </Router>
  </AppContext.Provider>    
  );
}

export default App;
