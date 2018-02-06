import React, { Component } from 'react';
import './App.css';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';
import { DB_CONFIG } from './Firebase';
import firebase from 'firebase';
import 'firebase/database';


class Blog extends Component {
  constructor (props){
    super(props);
    this.addPost = this.addPost.bind(this);

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('posts');

    this.state = {
      posts: [],
    }
  }

  componentWillMount(){
    const previousPosts = this.state.posts;

    this.database.on('child_added', snap => {
      previousPosts.push({
        id: snap.key,
        postMessage: snap.val().postMessage,
      })
      this.setState({
        posts: previousPosts,
      })
    })
  }

addPost(post) {
this.database.push().set({ postMessage: post });
}


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Travel Blog</h1>
        </header>
  <div className="postForm">
  <PostForm addPost = { this.addPost } />
  </div>

<div className="postBody">
{
  this.state.posts.map((post)=>{
    return (
    <div className="postMessage">
    <Post postTitle = { post.postTitle }/>
     <Post postMessage = { post.postMessage } postId={ post.id } key={ post.id }/>
     </div>
    )
  })
}
</div>
      </div>
    );
  }
}

export default Blog;
