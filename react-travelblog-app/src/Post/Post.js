import React, { Component } from 'react';
import './Post.css';
import PropTypes from 'prop-types';

class Post extends Component {
  constructor (props){
    super(props);
    this.postMessage = props.postMessage;
    this.postId = props.postId;
  }
  render(props) {
    return (
        <div className='post'>
          <p className='postMessage'>
            { this.postMessage }
          </p>
        </div>
    );
  };
};

Post.propTypes = {
  postMessage: PropTypes.string;
}

export default Post;
