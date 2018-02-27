import firebase from 'firebase';


export const DB_CONFIG = {
    apiKey: "AIzaSyAYzx54oOV-yV8xrXb_sXQ9VlvyMQU5WO8",
    authDomain: "travel-blog-7160d.firebaseapp.com",
    databaseURL: "https://travel-blog-7160d.firebaseio.com",
    projectId: "travel-blog-7160d",
    storageBucket: "",
    messagingSenderId: "1004940686396"
  };

export const provider = new firebase.auth.GoogleAuthProvider();
// export const auth = firebase.auth();

provider.addScope('https://www.googleapis.com/auth/plus.login');

// const facebookProvider = new firebase.auth.FacebookAuthProvider()
//
// export {facebookProvider}
