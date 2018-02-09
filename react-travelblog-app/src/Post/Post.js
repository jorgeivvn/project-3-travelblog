import React, { Component } from 'react';
import './Post.css';
import firebase from 'firebase';
import 'firebase/database';
import PropTypes from 'prop-types';




class Post extends Component {
  constructor (props){
    super(props);
    this.postTitle = props.postTitle;
    this.postMessage = props.postMessage;
    this.postId  = props.id;
    // console.log(props.postTitle);
    // console.log(props.postMessage);

    this.handleRemovePost = this.handleRemovePost.bind(this);
    // console.log(this)
  }

  handleRemovePost(postId) {
    const postRef = firebase.database().ref(`/posts/${postId}`);
    postRef.remove();
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

        <button type="button" class="btn btn-danger"
    onClick={()=> this.handleRemovePost(this.postId) }>
      Delete</button>

        </div>
    );
  };
};

Post.propTypes = {
  postTitle: PropTypes.string,
  postMessage: PropTypes.string,
}

export default Post;
