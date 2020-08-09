import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyBmrIfZSVVwSjeecI1E7u5jU1BvPABaOGo",
    authDomain: "covid-19-crf-2d2d6.firebaseapp.com",
    databaseURL: "https://covid-19-crf-2d2d6.firebaseio.com",
    projectId: "covid-19-crf-2d2d6",
    storageBucket: "covid-19-crf-2d2d6.appspot.com",
    messagingSenderId: "8211196944",
    appId: "1:8211196944:web:ba7a29a06387f8bcdeae95",
    measurementId: "G-VXTRLLKL7Z"
  };
  // Initialize Firebase
const fire =  firebase.initializeApp(firebaseConfig);
//   firebase.analytics();
export default fire;