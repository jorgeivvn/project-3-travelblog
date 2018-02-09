import React, { Component } from 'react';
import firebase from 'firebase';
import 'firebase/database';



class PostForm  extends Component {
  constructor(props) {
      super(props);
      this.state = {
        newTitle: '',
        newPostMessage: '',
        post: [],
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

  }

handleChange(e) {
  this.setState({
    [e.target.name]: e.target.value
  });
}

handleSubmit(e) {
  e.preventDefault();
  const postsRef = firebase.database().ref('posts');
  const post = {
    title: this.state.newTitle,
    post: this.state.newPostMessage
  }
  postsRef.push(post);
  this.setState({
    newTitle: '',
    newPostMessage: ''
  })
}






  render() {
    return (
      <div className="Container">
      <div className="formWrapper">
      <form onSubmit={this.handleSubmit}>
      <div className="form-group">

      <input type="text" className="form-control"  value={ this.state.newTitle } onChange={ this.handleChange } name="newTitle" placeholder="Title of Post"/>
      </div>

      <div className="form-group">

      <textarea className="form-control"  value={ this.state.newPostMessage } onChange={ this.handleChange } name="newPostMessage" placeholder="Write a new post..."></textarea>
      </div>
      <button className="btn btn-primary">Submit Post</button>
      </form>
      </div>
      </div>
    )
  }
}

  export default PostForm;
