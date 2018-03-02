import React, { Component } from 'react';
import NavBar from './Navbar';
import './App.css';
import Post from './Post/Post';
import PostForm from './PostForm/PostForm';
import { DB_CONFIG } from './Firebase';
import firebase from 'firebase';
import 'firebase/database';
import { Spinner } from '@blueprintjs/core';




class Blog extends Component {
  constructor (props){
    super(props);

    if (!firebase.apps.length) {
    this.app = firebase.initializeApp(DB_CONFIG);

    this.database = this.app.database().ref().child('posts');
}

    this.state = {
      titles: [],
      posts: [],
      loading: true
    }
  }

componentDidMount() {
  this.removeAuthListener = this.app.auth().onAuthStateChanged((user) => {
    if (user) {
      this.setState({
        loading: false
      })
    } else {
      this.setState({
        loading: false
      })
    }
  })
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

componentWillUnmount () {
  this.removeAuthListener();
  }


render() {
  if (this.state.loading === true) {
    return (
      <div className="Loading" style={{ textAlign: "center", position: "absolute", top: "25%", left: "50%" }}>
      <h3>Loading</h3>
      <Spinner/>
      </div>
    )
  }
    return (
      <div className="App">

        <header className="App-header">
          <h1 className="App-title">ˈnōˌmad</h1>
        </header>
            <header>
              <NavBar authenticated={this.state.authenticated}/>
            </header>



<div className="postForm">
  <PostForm/>
  </div>

<div className="postBody">{
  this.state.posts.map((post)=>{
    return (
      <Post key={post.id} id={ post.id } postTitle={ post.title } postMessage={post.post} postUser={post.user} thishandleRemovePost={ this.handleRemovePost } thisHandleUpdatePost= { post.handleUpdatePost } />
    )
  })
}
</div>



      </div>
    );
  }
}


export default Blog;
