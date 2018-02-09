import React, { Component } from 'react';
import NavBar from './Navbar';
import './Home.css';

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

      <div className="HomePicture">
      <h3><img className="HomePic"  src={require('./Static/Images/TravelMap.jpg')}/></h3>
      </div>

      </div>
    );
  }
}

export default Home;
