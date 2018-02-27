import React, { Component } from 'react';
import NavBar from './Navbar';
import './Home.css';
import { DB_CONFIG } from './Firebase';
import firebase from 'firebase';
import 'firebase/database';

class Home extends Component {
  constructor (props){
    super(props);
    if (!firebase.apps.length) {
    this.app = firebase.initializeApp(DB_CONFIG);
  this.state = {
    authenticated: false,
    loading: true
  }
}
}
componentDidMount() {
  this.removeAuthListener = this.app.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({
        authenticated: true,
        loading: false
      })
    } else {
      this.setState({
        authenticated: false,
        loading: false
      })
    }
  })
}

  render() {
    return (
      <div className="Home">

      <header className="App-header">
        <h1 className="App-title">ˈnōˌmad</h1>
      </header>

      <header>
      <NavBar authenticated={this.state.authenticated}/>
      </header>

      <div className="HomePicture">
      <h3><img className="HomePic"  src={require('./Static/Images/TravelMap.jpg')}/></h3>
      </div>

      </div>
    );
  }
}

export default Home;
