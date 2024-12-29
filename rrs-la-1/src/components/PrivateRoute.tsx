import React, { JSX } from 'react';
import Login from '../pages/Account/index.ts';
import {Route, Routes, RouteProps} from 'react-router-dom';

export const PrivateRoute = ({children, ...rest}: RouteProps) => {
  return (
  <Routes>
    <Route {...rest} path='/' element={true ? children : <Login/>}></Route>;
  </Routes>);
    
};
