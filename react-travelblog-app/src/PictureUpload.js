import React, { Component } from 'react';
import firebase from 'firebase';
import ImageUploader from 'react-firebase-image-uploader';
import { connect } from 'react-firebase-storage-connector';
import { DB_CONFIG } from './Firebase';
import 'firebase/database';
import NavBar from './Navbar';


class Pictures extends Component {
  constructor(props){
    super(props);
    if (!firebase.apps.length) {
    this.app = firebase.initializeApp(DB_CONFIG);
  }
    this.state = {
        image: '',
        isUploading: false,
        progress: 0,
        imageURL: [],
      };
      this.handleUploadStart = this.handleUploadStart.bind(this);
      this.handleProgress = this.handleProgress.bind(this);
      this.handleUploadError = this.handleUploadError.bind(this);
      this.handleUploadSuccess = this.handleUploadSuccess.bind(this);
      this.handleOnChange = this.handleOnChange.bind(this);
    }

    handleUploadStart() {
      this.setState({isUploading: true, progress: 0});
    }

    handleProgress(progress) {
      this.setState({progress});
    }

    handleUploadError(error) {
        this.setState({isUploading: false});
        console.error(error);
    }

    handleUploadSuccess = (filename) => {
    this.setState({
      image: filename,
      progress: 100,
      isUploading: false
    });
    firebase.storage().ref('images').child(filename).getDownloadURL().then(url =>this.setState({
      imageURL: url
      })
    );
  };

  handleOnChange(e) {
    this.setState({
      imageURL:e.target.imageURLs[0]
    })
  };

//   componentDidMount() {
//     firebase.auth().onAuthStateChanged((user) => {
//       if (user) {
//         this.setState({ user });
//       }
//     });
//     const storage = firebase.database();
//     const storageRef= storage.ref('images');
//     storageRef.on('value', (snapshot) => {
//     let imageURLs = snapshot.val();
//     let newState = [];
//     for(let imageURL in imageURLs) {
//       newState.push({
//         imageURL: imageURLs[imageURL].imageURL
//       })
//     }
//     this.setState({
//       imageURLs: newState
//     })
//   })
// }



  render() {
        return (


            <div>
            <header className="App-header">
              <h1 className="App-title">ˈnōˌmad</h1>
            </header>
                <header>
                  <NavBar authenticated={this.state.authenticated}/>
                </header>

                <form>
                    <label>Image:</label>
                    {this.state.isUploading &&
                        <p>Progress: {this.state.progress}</p>
                    }
                    {this.state.imageURL &&
                      <ol>
                        <img src={this.state.imageURL} />
                        </ol>
                    }

                    <ImageUploader
                        name="image"
                        storageRef={firebase.storage().ref('images')}
                        onUploadStart={this.handleUploadStart}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                        onProgress={this.handleProgress}
                        onChange={this.handleOnChange}
                    />

                </form>
            </div>


        );
    }
}

export default Pictures;
