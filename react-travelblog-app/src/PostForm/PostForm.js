import React, { Component } from 'react';



class PostForm  extends Component {
  constructor(props) {
      super(props);
      this.state = {};
  }
  render() {
    return (
      <div className="PostForm">
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
      </div>
    )
  }
}

  export default PostForm;
