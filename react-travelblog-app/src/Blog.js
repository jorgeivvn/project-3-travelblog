import React, { Component } from 'react';
import './App.css';

class Blog extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Travel Blog</h1>
        </header>

        <form>
  <div class="form-group">
    <label for="exampleFormControlInput1">Blog Post</label>
    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Title of Post"/>
  </div>

  <div class="form-group">
    <label for="exampleFormControlTextarea1">
    </label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write a new post..."></textarea>
  </div>
  <button class="btn btn-primary" type="submit">Submit Post</button>
</form>
      </div>
    );
  }
}

export default Blog;
