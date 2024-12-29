import React from 'react';
import {BrowserRouter as Router, Routes} from 'react-router-dom';

import './App.css';
import './styles/sb-admin-2.min.css';
import Login from './pages/Account/Login';
import Admin from './pages/Admin/Admin';


function App() {
  return (
    <div className="App" id='wrapper'>
      <Router>
        <Routes>
          <Login></Login>
          <Admin></Admin>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
