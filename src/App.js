import React, { useState, createContext, useEffect } from 'react';
import {  
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Main from './Main';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Login from './Login';
import About from './About';
import Challenge from './Challenge';
import TermsConditions from './TermsConditions';
import Profile from './Profile';
import './App.css';
import ForgotPassword from './ForgotPassword';

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
            <Route path="/profile" component={Profile} />
        </Switch>
    </Router>
  </AppContext.Provider>    
  );
}

export default App;
