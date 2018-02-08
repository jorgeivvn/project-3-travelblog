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

    this.setState({
      newTitle: e.target.value,
    })
  }

  handleUserInput (e) {

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
      <div className="Container">
      <div className="formWrapper">
      <form>
      <div className="form-group">

      <input type="text" className="form-control"  value={ this.state.newTitle } onChange={ this.handleUserTitleInput } placeholder="Title of Post"/>
      </div>

      <div className="form-group">

      <textarea className="form-control"  value={ this.state.newPostMessage } onChange={ this.handleUserInput } placeholder="Write a new post..."/>
      </div>
      <button className="btn btn-primary" onClick={ this.writePost } type="submit">Submit Post</button>
      </form>
      </div>
      </div>
    )
  }
}

  export default PostForm;
