import React, { useState, createContext } from 'react';
import {  
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Main from './Main';
import SignUp from './SignUp';
import Login from './Login';
import About from './About';
import Challenge from './Challenge';
import TermsConditions from './TermsConditions';
import Profile from './Profile';
import './App.css';

export const AppContext = createContext();

const App = () => {

  const [state, setState] = useState({
    user: {}
  });

  return (
    <AppContext.Provider value={[state, setState]} >
      <Router>
          <Switch>
              <Route path="/" exact component={Main}/>
              <Route path="/signup" component={SignUp} />
              <Route path="/login" component={Login} />
              <Route path="/about" component={About} />
              <Route path="/profile" component={Profile} />
              <Route path="/30-day-challenge" component={Challenge} />
              <Route path="/terms-and-conditions" component={TermsConditions} />
          </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
