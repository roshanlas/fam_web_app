import React, { useContext } from 'react';
import {Redirect, Route} from 'react-router-dom';
import { AppContext } from './App';

export const PrivateRoute = ({ component: Component, ...rest }) => {

    const [globalState] = useContext(AppContext);
    
    return (<Route 
        {...rest}
        render={props=> globalState.user.token || localStorage.getItem('token') ? (
            <Component {...props} />
        ) : (
            <Redirect
                to={{
                    pathname: '/sign-in',
                }}
            />
        )}
    />)
}