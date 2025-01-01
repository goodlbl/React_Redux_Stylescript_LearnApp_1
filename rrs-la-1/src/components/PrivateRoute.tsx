import React, { JSX } from 'react';
import {useSelector} from 'react-redux';
import Login from '../pages/Account/index.ts';
import {Route, Routes, RouteProps} from 'react-router-dom';
import { AccountState } from '../store/account/types.ts';
import { AppState } from '../store/index.ts';

export const PrivateRoute = ({children, ...rest}: RouteProps) => {
  const account: AccountState = useSelector((state: AppState) => state.account);
  return (
  <Routes>
    <Route {...rest} path='/' element={account.token ? children : <Login/>}></Route>;
  </Routes>);
    
};

