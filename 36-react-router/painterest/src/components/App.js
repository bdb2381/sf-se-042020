import React, { Component } from 'react';
import Navbar from './Navbar';
import PaintingsContainer from './PaintingsContainer';
import About from './About';
import Login from './Login';
import PaintingsNew from './PaintingsNew';
import PaintingShow from './PaintingShow';

import { Route, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar
          color="green"
          title="Painterest"
          description="our app"
          icon="paint brush"
        />

        <div className="ui container grid">
          <div id="content" className="sixteen wide column">
            <Route exact={true} path="/" component={About} />
            <Route path="/login" component={Login} />
            <PaintingsContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
