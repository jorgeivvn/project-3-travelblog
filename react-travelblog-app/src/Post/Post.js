import React, { Component } from 'react';
import './Post.css';

class Post extends Component {
  constructor (props){
    super(props);
    this.message="What's GUUUCIIIIII?!";
  }
  render(props) {
    return (
        <div>
          <h1>{ this.message }</h1>
        </div>
    );
  };
};


export default Post;
