import React, { Component } from 'react';
import './Post.css';
import firebase from 'firebase';
import 'firebase/database';
import PropTypes from 'prop-types';
import Modal from 'react-responsive-modal';




class Post extends Component {
  constructor (props){
    super(props);

    this.state = {
      openModal: false,
      editedTitle: '',
      editedMessage: '',
    }

    this.postTitle = props.postTitle;
    this.postMessage = props.postMessage;
    this.postUser = props.postUser;
    this.postId = props.id;

    // console.log(props.postTitle);
    // console.log(props.postMessage);

    this.handleRemovePost = this.handleRemovePost.bind(this);
    this.handleUpdatePost = this.handleUpdatePost.bind(this);
    this.handleUpdateChange = this.handleUpdateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // console.log(this)
  }

  onOpenModal = () => {
      this.setState({ open: true });
    };

    onCloseModal = () => {
      this.setState({ open: false });
    };

  handleRemovePost(postId) {
    const postsRef = firebase.database().ref(`/posts/${postId}`);
    postsRef.remove();
  }

  handleUpdateChange(e){
  this.setState({
    [e.target.name]: e.target.value
  })
}

handleSubmit(e) {
  e.preventDefault();
  const postsRef = firebase.database().ref('posts');
  const post = {
    title: this.state.editedTitle,
    post: this.state.editedMessage,
  }
  postsRef.push(post);
  this.setState({
    editedTitle: '',
    editedMessage: '',
  });
}

  handleUpdatePost(postId) {
    const postsRef = firebase.database().ref(`/posts/${postId}`);
    let updated = {
      title: this.editedTitle,
      post: this.editedMessage
    };
    postsRef.update(updated);
    this.onCloseModal();
    this.setState({
      editedTitle: '',
      editedMessage: ''
    })
  }



  render(props) {
    const { open } = this.state;
    return (
        <div className='post'>
          <p className='postTitle'>
          Title: {this.postTitle}
            </p>
          <p className='postMessage'>
            { this.postMessage }
          </p>
          <p className='postUser'>
          Posted by: { this.postUser }
          </p>

        <button type="button" class="btn btn-danger"
    onClick={()=> this.handleRemovePost(this.postId) }> Delete </button>

      <div className="example">
        <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.onOpenModal}>
          Edit
        </button>{' '}
        <Modal
          open={open}
          onClose={this.onCloseModal}
          little
          classNames={{
            transitionEnter: 'transition-enter',
            transitionEnterActive: 'transition-enter-active',
            transitionExit: 'transition-exit-active',
            transitionExitActive: 'transition-exit-active',
          }}
          animationDuration={1000}
        >
        <form onSubmit={this.handleSubmit}>

        <div className="form-group">
        <input type="text" className="form-control"  value={ this.state.editedTitle } onChange={ this.handleChange } name="newTitle" placeholder="Edit Title of Post"/>
        </div>

        <div className="form-group">
        <textarea className="form-control"  value={ this.state.editedMessage } onChange={ this.handleChange } name="newPostMessage" placeholder="Edit Post..."></textarea>
        </div>
        <button className="btn btn-success">Make Changes</button>
        </form>
        </Modal>
      </div>

        </div>
    );
  };
};

Post.propTypes = {
  postTitle: PropTypes.string,
  postMessage: PropTypes.string,
}

export default Post;
