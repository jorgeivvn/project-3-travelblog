import React, { Component } from 'react';
import './App.css';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';

class Blog extends Component {
  constructor (props){
    super(props);

    this.state = {
      posts: [
        {id: 1, postTitle: "Post title 1 goes here", postMessage: "Post 1 goes right here!"},
        {id: 2, postTitle: "Post title 1 goes here", postMessage: "Post 2 goes right here!"},
      ],
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Travel Blog</h1>
        </header>
  <div className="postForm">
  <PostForm/>
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
