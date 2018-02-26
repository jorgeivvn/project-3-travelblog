import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props)
    this.authWithFacebook = this.authWithFacebook.bind(this)
    this.authWithEmailPassword = this.authWithEmailPassword.bind(this)
  }

  authWithFacebook() {
    console.log("authed with facebook")
  }

  authWithEmailPassword(event) {
    event.preventDefault()
    console.log("authed with email")
    console.table([{
      email: this.emailInput.value,
      password: this.passwordInput.value
    }])
  }
  render(){
    return (
      <div>
        <button className="btn btn-outline-success my-2 my-sm-0" onClick={() => {this.authWithFacebook()}}>Log In with Facebook</button>
        <hr style={{marginTop: "10px", marginBottom: "10px"}}/>
        <form onSubmit={(event) => {this.authWithEmailPassword(event)} ref={(form) => this.loginForm = form}}>
        <div style={{marginBottom: "10px"}} className="pt-callout pt-icon-info-sign">
        <h5>Note</h5>
        If you do not have an account already, this form will create one for you.
        </div>
          <label className="pt-label">
            Email
            <input style={{width: "100%"}} className="pt-input" name="email" type="email" ref{(input) => { this.emailInput = input}} placeholder="email"></input>
            </label>

            <label className="pt-label">
              Password
              <input style={{width: "100%"}} className="pt-input" name="password" type="password" ref{(input) => { this.passwordInput = input}} placeholder="Password"></input>
              </label>
              <input style={{width: "100%"}} type="submit" className="pt-button pt-intent-primary" value"Log In"></input>
        </form>
      </div>
    )
  }
}

export default Login
