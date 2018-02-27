import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Spinner } from '@blueprintjs/core';
import { DB_CONFIG } from './Firebase';
import firebase from 'firebase';
import 'firebase/database';

class Logout extends Component {
  constructor () {
    super();
    this.app = firebase.initializeApp(DB_CONFIG)
    this.state = {
      redirect: false
    }
  }

  componentWillMount() {
    this.app.auth().signOut().then((user) => {
      this.setState({ redirect: true })
    })
  }

  render(){
      if (this.state.redirect === true) {
        return <Redirect to="/destinations" />
      }

      return (
        <div className="Loading" style={{ textAlign: "center", position: "absolute", top: "25%", left: "50%" }}>
        <h3>Logging Out</h3>
        <Spinner />
        </div>
      )
  }
}


export default Logout
