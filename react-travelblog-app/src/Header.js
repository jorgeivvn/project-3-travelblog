import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component{
  render(){
    return (
      <header>
        <Link to={'/'}>Home</Link>
        <Link to={'/blog'}>Blog</Link>
        <Link to={'/destinations'}>Destinations</Link>
      </header>
    )
  }
}

export default Header
