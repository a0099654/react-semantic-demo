import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

import logo from '../styles/images/logo.svg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React yes no
          </h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Button primary>Primary</Button>
          <Button secondary>Secondary</Button>
        </div>
        <div className="ui slider checkbox">
          <input type="checkbox" name="newsletter" />
          <label>Accept terms and conditions</label>
        </div>
      </div>
    );
  }
}

export default App;
