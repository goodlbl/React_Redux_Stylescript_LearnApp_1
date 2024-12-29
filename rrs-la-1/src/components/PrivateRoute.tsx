import React from 'react';
import Login from '../pages/Account/Login';
import {Route, RouteProps} from 'react-router-dom';

export const PrivateRoute = ({children, ...rest}: RouteProps) => {
  return (
    <Route {...rest} render={()=> {true ? children : <Login/>}}></Route>
  );
};
