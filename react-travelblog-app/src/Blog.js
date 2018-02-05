import React, { Component } from 'react';
import './App.css';
import Post from './Post/Post';

class Blog extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Travel Blog</h1>
        </header>
        <form>
  <div className="form-group">
    <label for="exampleFormControlInput1">Blog Post</label>
    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Title of Post"/>
  </div>

  <div className="form-group">
    <label for="exampleFormControlTextarea1">
    </label>
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write a new post..."></textarea>
  </div>
  <button className="btn btn-primary" type="submit">Submit Post</button>
</form>
  <Post/>
      </div>
    );
  }
}

export default Blog;
