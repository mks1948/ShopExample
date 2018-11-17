import Rebase from "re-base";
import firebase from "firebase";
import 'firebase/storage';

const firebaseApp =  firebase.initializeApp({
    apiKey: "AIzaSyBhjCT5RvSR1FYqntF7-vryP_UciHE_fbE",
    authDomain: "zdtim-6dc88.firebaseapp.com",
    databaseURL: "https://zdtim-6dc88.firebaseio.com",
    projectId: "zdtim-6dc88",
    storageBucket: "zdtim-6dc88.appspot.com",
    messagingSenderId: "690336439711"
  });



  const fbase = Rebase.createClass(firebaseApp.database());


  const storage = firebase.storage();
  

  export {storage,fbase, firebaseApp};

