import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';
import './styles/sb-admin-2.min.css';
import {PrivateRoute} from './components/index.ts';
import Login from './pages/Account/index.ts';
import Admin from './pages/Admin/index.ts';


function App() {
  return (
    <div className="App" id='wrapper'>
      <Router>
        <Routes>
          <PrivateRoute>
            <Login/>
          </PrivateRoute>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
