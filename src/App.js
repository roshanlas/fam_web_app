import React, { useState, createContext, useEffect } from 'react';
import {  
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Main from './Main';
import SignUp from './SignUp';
import SignIn from './SignIn';
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
    // If logged in
    // localStorage.setItem('token', 'abcdef12345');

    // Else if logged out
    // localStorage.clear()
  })

  return (
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
  );
}

export default App;
