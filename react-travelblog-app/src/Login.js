// import React, { Component } from 'react';
// import NavBar from './Navbar';
// import { DB_CONFIG, facebookProvider } from './Firebase';
// import firebase from 'firebase';
// import 'firebase/database';
//
// import { Redirect } from 'react-router-dom';
// import { Toaster, Intent } from '@blueprintjs/core';
//
// class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.authWithFacebook = this.authWithFacebook.bind(this)
//     this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
//     this.app = firebase.initializeApp(DB_CONFIG)
//     this.state = {
//       redirect: false
//     }
//   }
//
//   authWithFacebook() {
//     this.app.auth().signInWithPopup(facebookProvider)
//     .then((result, error) => {
//       if (error) {
//         this.toaster.show({ intent: Intent.Danger, message: "Unable to sign in with Facebook"})
//       } else {
//         this.setState({ redirect: true })
//         }
//       })
//     }
//
//   authWithEmailPassword(event) {
//     event.preventDefault()
//     const email = this.emailInput.value
//     const password = this.passwordInput.value
//
//     this.app.auth().fetchProvidersForEmail(email)
//       .then((providers) => {
//         if (providers.length === 0) {
//           return this.app.auth().createUserWithEmailAndPassword(email, password)
//         } else if (providers.indexOf("password") === -1) {
//           this.toaster.show({ intent: Intent.WARNING, message: "Try an alternative login."})
//         } else {
//           return this.app.auth().signInWithEmailAndPassword(email, password)
//         }
//     })
//     .then((user) => {
//         if (user && user.email) {
//           this.loginForm.reset()
//           this.setState({ redirect: true })
//         }
//       })
//     .catch((error) => {
//       this.toaster.show({ intent: Intent.DANGER, message: error.message})
//     })
//   }
//
//   render(){
//     if (this.state.redirect === true) {
//       return <Redirect to='/destinations' />
//     }
//     return (
//       <div className="Login">
//         <header className="App-header">
//           <h1 className="App-title">ˈnōˌmad</h1>
//         </header>
//         <header>
//           <NavBar/>
//         </header>
//       <div>
//         <Toaster ref={(element) => { this.toaster = element }} />
//         <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => {this.authWithFacebook()}}>Log In with Facebook</button>
//         <hr style={{marginTop: "10px", marginBottom: "10px"}}/>
//         <form onSubmit={(event) => {this.authWithEmailPassword(event)}} ref={(form) => this.loginForm = form}>
//         <div style={{marginBottom: "10px"}} className="pt-callout pt-icon-info-sign">
//         <h5>Note</h5>
//         If you do not have an account already, this form will create one for you.
//         </div>
//           <label className="pt-label">
//             Email
//             <input style={{width: "100%"}} className="pt-input" name="email" type="email" ref={(input) => { this.emailInput = input }} placeholder="Email"></input>
//             </label>
//
//             <label className="pt-label">
//               Password
//               <input style={{width: "100%"}} className="pt-input" name="password" type="password" ref={(input) => { this.passwordInput = input}} placeholder="Password"></input>
//               </label>
//               <input style={{width: "100%"}} type="submit" className="pt-button pt-intent-primary" value="Log In"></input>
//         </form>
//       </div>
//     </div>
//     )
//   }
// }
//
// export default Login
