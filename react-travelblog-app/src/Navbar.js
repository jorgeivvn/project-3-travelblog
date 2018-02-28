import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { provider } from './Firebase';
import { DB_CONFIG } from './Firebase';
import firebase from 'firebase';
import 'firebase/database';


class NavBar extends Component{

  constructor() {
    super();

    if (!firebase.apps.length) {
    this.app = firebase.initializeApp(DB_CONFIG);
  }

    this.state = {
      user: null
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
}

handleChange(e) {
  /* ... */
}

logout() {
  firebase.auth().signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
}

login() {
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      this.setState({
        user
      });
    });
}

componentDidMount() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ user });
    }
  });
}
  render(){
    return (
      <div className="Navbar">
      <header>


        <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="/">ˈnōˌmad</a>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
        <li class="nav-item active">
        <a class="nav-link" href="/blog">Blog <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item active">
        <a class="nav-link" href="/Destinations">Destinations<span class="sr-only">(current)</span></a>
        </li>

        <div className="wrapper">
    {this.state.user ?
      <button class="btn btn-outline-success my-2 my-sm-0" onClick={this.logout}>Log Out</button>
      :
      <button class="btn btn-outline-success my-2 my-sm-0" onClick={this.login}>Log In</button>
    }

        </div>
  </ul>

    <div className="Form">
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="text" placeholder="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>

    </div>
  </div>
</nav>
      </header>
      </div>


    )
  }
}

export default NavBar
