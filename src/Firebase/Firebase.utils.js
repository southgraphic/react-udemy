import firebase, { initializeApp } from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
//always import the firebase base

// var firebaseConfig
const config = {
  apiKey: "AIzaSyAFmCbeqNxCKdP6UcWtPR4alEcl39Ub93o",
  authDomain: "eandreiu-21d3e.firebaseapp.com",
  databaseURL: "https://eandreiu-21d3e.firebaseio.com",
  projectId: "eandreiu-21d3e",
  storageBucket: "eandreiu-21d3e.appspot.com",
  messagingSenderId: "645562688598",
  appId: "1:645562688598:web:8b97c2429e5a361d6f87f7",
  measurementId: "G-CDGJ57LXCH"
};

export const createUserProfileDocument = async (userAuth, ...additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  // console.log(firestore.doc('/users/23402934203942034d'));

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName, 
        email, 
        createdAt, 
        ...additionalData
      })

    } catch(error){
        console.log('error creating user'. error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" }); // the google modal
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
