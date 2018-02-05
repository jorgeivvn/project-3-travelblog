import React, { Component } from 'react';
import './Post.css';
import PropTypes from 'prop-types';

class Post extends Component {
  constructor (props){
    super(props);
    this.postTitle = props.postTitle;
    this.postMessage = props.postMessage;
    this.postId = props.postId;
  }
  render(props) {
    return (
        <div className='post'>
          <p className='postTitle'>
            { this.postTitle }
            </p>
          <p className='postMessage'>
            { this.postMessage }
          </p>
        </div>
    );
  };
};

Post.propTypes = {
  postTitle: PropTypes.string,
  postMessage: PropTypes.string,
}

export default Post;
