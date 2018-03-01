import React, { Component } from 'react';
import firebase from 'firebase';
import ImageUploader from 'react-firebase-image-uploader';
import { connect } from 'react-firebase-storage-connector';
import { DB_CONFIG } from './Firebase';
import 'firebase/database';
import NavBar from './Navbar';


class Images extends Component {
  constructor(props){
    super(props);
    if (!firebase.apps.length) {
    this.app = firebase.initializeApp(DB_CONFIG);
  }
    this.state = {
        images: null,
      };
    }


    componentDidMount() {
     firebase.storage()
          .ref("images")
          .once("value")
          .then(snapshot => this.setState({images: snapshot.val()}))
          .catch(error => console.error(error))
    }


//   componentDidMount() {
//     const storageRef = firebase.storage().ref('images');
//     storageRef.on('value', (snapshot) => {
//     let images = snapshot.val();
//     let newState = [];
//     for(let image in images) {
//       newState.push({
//         image: images[image].image
//       })
//     }
//     this.setState({
//       images: newState
//     })
//   })
// }



render() {
    return (
      <div>
       {this.state.images && this.state.images.map((image, index) => {
         <img src={image} key={index}/>
       })}
      </div>
    )
  }
}

export default Images;
