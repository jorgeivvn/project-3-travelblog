import React, { Component } from 'react';
import NavBar from './Navbar';
import './Destinations.css';

class Destinations extends Component {
  render() {
    return (
      <div className="Destinations">

      <header className="App-header">
        <h1 className="App-title">ˈnōˌmad</h1>
      </header>

      <header>
      <NavBar/>
      </header>

      <div className="Pictures">
      <h3> Castellabate, Italy <br/> <img className="TravelPics"  src={require('./Static/Images/Castellabate.png')}/></h3>
      </div>

      <div className="Pictures">
      <h3> Madrid, Spain <br/> <img className="ClasicoPic"  src={require('./Static/Images/Clasico.png')}/></h3>
      </div>

      <div className="Pictures">
      <h3> Rome, Italy <br/> <img className="TravelPics"  src={require('./Static/Images/Coliseo.png')}/></h3>
      </div>

      <div className="Pictures">
      <h3> Rio de Janeiro, Brasil <br/> <img className="RioPic"  src={require('./Static/Images/Cristo.png')}/></h3>
      </div>

      <div className="Pictures">
      <h3> Grand Canyon, Arizona <br/> <img className="TravelPics"  src={require('./Static/Images/GrandCanyon.png')}/></h3>
      </div>

      <div className="Pictures">
      <h3> Palmizana, Croatia <br/> <img className="TravelPics"  src={require('./Static/Images/Palmizana.png')}/></h3>
      </div>

      <div className="Pictures">
      <h3> Paris, France <br/> <img className="ParisPic"  src={require('./Static/Images/Paris.png')}/></h3>
      </div>
      </div>
    );
  }
}

export default Destinations;
