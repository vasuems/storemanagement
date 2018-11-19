import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import config from './config';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props=>(
      localStorage.getItem(config.accessTokenKey)
        ? <Component {...props} />
        : <Redirect to='/' />
    )}
  />
);

export default PrivateRoute;