import React, { Component } from 'react';



class PostForm  extends Component {
  constructor(props) {
      super(props);
      this.state = {
        newTitle: '',
        newPostMessage: '',
      };
      this.handleUserTitleInput=this.handleUserTitleInput.bind(this);
      this.handleUserInput=this.handleUserInput.bind(this);

      this.writePost = this.writePost.bind(this);
  }

  handleUserTitleInput (e) {
    console.log(this);
    this.setState({
      newTitle: e.target.value,
    })
  }

  handleUserInput (e) {
    console.log(this);
      this.setState({
        newPostMessage: e.target.value,
      })
  }

  writePost() {
    this.props.addTitle(this.state.newTitle);
    this.props.addPost(this.state.newPostMessage);
    this.setState({
      newTitle: '',
      newPostMessage: '',
    })
  }

  render() {
    return (
      <div className="formWrapper">
      <form>
      <div className="form-group">

      <input type="text" className="form-control" id="exampleFormControlInput1" value={ this.state.newTitle } onChange={ this.handleUserTitleInput } placeholder="Title of Post"/>
      </div>

      <div className="form-group">

      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" value={ this.state.newPostMessage } onChange={ this.handleUserInput } placeholder="Write a new post..."></textarea>
      </div>
      <button className="btn btn-primary" onClick= { this.writePost }>Submit Post</button>
      </form>
      </div>
    )
  }
}

  export default PostForm;
