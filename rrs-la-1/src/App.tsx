import React from 'react';
import {BrowserRouter as Router, Routes} from 'react-router-dom';

import './App.css';
import './styles/sb-admin-2.min.css';
import Admin from './pages/Admin';
import PrivateRoute from './components';
import Login from './pages/Account';


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
