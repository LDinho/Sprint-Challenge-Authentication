import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import SignUp from './Signup'
import Login from './Login'
import Jokes from './Jokes'

import './App.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li><NavLink to="/login">Log in</NavLink></li>
              <li><NavLink to="/signup">Sign up</NavLink></li>
            </ul>
          </nav>
          <h1>
            Auth Joke App
          </h1>
        </header>
        <main>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/jokes" component={Jokes} />
        </main>
      </div>
    );
  }
}

export default App;
