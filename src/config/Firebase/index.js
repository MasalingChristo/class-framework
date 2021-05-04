import firebase from  'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCPYyJtUtX9Fr7BAjVq21eLZjxUo9W6h38",
    authDomain: "webprogramming-253c9.firebaseapp.com",
    databaseURL: "https://webprogramming-253c9-default-rtdb.firebaseio.com",
    projectId: "webprogramming-253c9",
    storageBucket: "webprogramming-253c9.appspot.com",
    messagingSenderId: "863411323281",
    appId: "1:863411323281:web:2b58966325c67ea04cda30"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase;