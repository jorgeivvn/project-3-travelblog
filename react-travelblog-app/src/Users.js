import React, { Component } from 'react';
import NavBar from './Navbar';
import './Users.css';
import InstagramEmbed from 'react-instagram-embed';

class Users extends Component {
  render() {
    return (
      <div className="Destinations">

      <header className="App-header">
        <h1 className="App-title">ˈnōˌmad</h1>
      </header>

      <header>
      <NavBar/>
      </header>

      <div className="Spacing">
      </div>


            <InstagramEmbed
        url="https://www.instagram.com/p/BXN28a5lDJv/"
        maxWidth={500}
        hideCaption={false}
        containerTagName='div'
        protocol=''
        onLoading={() => {}}
        onSuccess={() => {}}
        onAfterRender={() => {}}
        onFailure={() => {}}
      />

      <div className="Spacing">
      </div>


      <InstagramEmbed
      url="https://www.instagram.com/p/BcsMdUhHRVF/"
      maxWidth={500}
      hideCaption={false}
      containerTagName='div'
      protocol=''
      onLoading={() => {}}
      onSuccess={() => {}}
      onAfterRender={() => {}}
      onFailure={() => {}}
      />

      <div className="Spacing">
      </div>


      <InstagramEmbed
      url="https://www.instagram.com/p/BdVgGqKlk6_/"
      maxWidth={500}
      hideCaption={false}
      containerTagName='div'
      protocol=''
      onLoading={() => {}}
      onSuccess={() => {}}
      onAfterRender={() => {}}
      onFailure={() => {}}
      />

      <div className="Spacing">
      </div>

      <InstagramEmbed
      url="https://www.instagram.com/p/BfWAKU1D8h8/"
      maxWidth={500}
      hideCaption={false}
      containerTagName='div'
      protocol=''
      onLoading={() => {}}
      onSuccess={() => {}}
      onAfterRender={() => {}}
      onFailure={() => {}}
      />

      <div className="Spacing">
      </div>

      <InstagramEmbed
      url="https://www.instagram.com/p/BAaGvRRkkQ-/"
      maxWidth={500}
      hideCaption={false}
      containerTagName='div'
      protocol=''
      onLoading={() => {}}
      onSuccess={() => {}}
      onAfterRender={() => {}}
      onFailure={() => {}}
      />

      <div className="Spacing">
      </div>

      <InstagramEmbed
      url="https://www.instagram.com/p/Bf0bw9rl6cW/"
      maxWidth={500}
      hideCaption={false}
      containerTagName='div'
      protocol=''
      onLoading={() => {}}
      onSuccess={() => {}}
      onAfterRender={() => {}}
      onFailure={() => {}}
      />

      <div className="Spacing">
      </div>

      <InstagramEmbed
      url="https://www.instagram.com/p/BewOLbGB7Oo/"
      maxWidth={500}
      hideCaption={false}
      containerTagName='div'
      protocol=''
      onLoading={() => {}}
      onSuccess={() => {}}
      onAfterRender={() => {}}
      onFailure={() => {}}
      />

      </div>
    );
  }
}

export default Users;
