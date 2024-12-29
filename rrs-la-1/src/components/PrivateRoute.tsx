import React, { JSX } from 'react';
import Login from '../pages/Account/index.ts';
import {Route, RouteProps} from 'react-router-dom';

export const PrivateRoute = ({children, ...rest}: RouteProps):JSX.Element => {
  return <Route {...rest} path='/' element={false ? children : <Login/>}></Route>;
    
};
