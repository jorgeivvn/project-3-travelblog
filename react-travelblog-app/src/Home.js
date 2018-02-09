import React, { Component } from 'react';
import NavBar from './Navbar';

class Home extends Component {
  render() {
    return (
      <div className="Home">

      <header className="App-header">
        <h1 className="App-title">ˈnōˌmad</h1>
      </header>

      <header>
      <NavBar/>
      </header>

      </div>
    );
  }
}

export default Home;
