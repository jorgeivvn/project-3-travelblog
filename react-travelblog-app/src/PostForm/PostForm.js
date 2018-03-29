import React, { Component } from 'react';
import firebase from 'firebase';
import 'firebase/database';
import { provider } from '../Firebase';


class PostForm  extends Component {
  constructor(props) {
      super(props);
      this.state = {
        newTitle: '',
        user: null,
        username: '',
        newPostMessage: '',
        post: []
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
    post: this.state.newPostMessage,
    user: this.state.user.displayName || this.state.user.email
  }
  postsRef.push(post);
  this.setState({
    newTitle: '',
    newPostMessage: '',
    username: ''
  })
}

logout() {
  firebase.auth().signOut()
    .then(() => {
      this.setState({
        user: null
      });
    });
}

login() {
  firebase.auth().signInWithPopup(provider)
    .then((result) => {
      const user = result.user;
      this.setState({
        user
      });
    });
}

componentDidMount() {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({ user });
    }
  });
  const postsRef = firebase.database().ref('posts');
  postsRef.on('value', (snapshot) => {
    let posts = snapshot.val();
    console.log(posts);
    let newState = [];
    for(let post in posts) {
      newState.push({
        id: post,
        title: posts[post].title,
        post: posts[post].post,
        user: posts[post].user
      })
    }

    this.setState({
      posts: newState
    })
  })
}



  render() {
    return (
      <div className="Container">
      <div className="formWrapper">
      {this.state.user ?
        <div>
      <form onSubmit={this.handleSubmit}>

      <div className="form-group">
      <input type="text" className="form-control" name="username" value={this.state.user.displayName || this.state.user.email} />
      </div>

      <div className="form-group">
      <input type="text" className="form-control" value={ this.state.newTitle } onChange={ this.handleChange } name="newTitle" placeholder="Title of Post"/>
      </div>

      <div className="form-group">
      <textarea className="form-control"  value={ this.state.newPostMessage } onChange={ this.handleChange } name="newPostMessage" placeholder="Write a new post..."></textarea>
      </div>
      <button className="btn btn-success">Submit Post</button>
      </form>

      </div>
      : <p>Please, Log In To See Blog!</p>
      }
      </div>
      </div>
    )
  }
}

  export default PostForm;
