import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginForm from './components/LoginForm.js';
import PrivateRoute from './components/PrivateRoute.js';

import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/login" component={ LoginForm } />
        <PrivateRoute exact path="/friends" component={ FriendsList } />
      </div>
    </Router>
  );
}

export default App;
