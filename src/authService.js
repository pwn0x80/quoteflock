import firebase from "firebase/app";

import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import "firebase/auth";

import { auth } from "../config/firebase.config";
export const AuthService = {
  loginWithGoogle: ({ dispatch }) => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // The signed-in user info.
        //   console.log("login");
        //        console.log(auth);
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch({ type: "LOGIN_FAILURE" });

        //      console.log(errorMessage);
      });
  },
  logout: async () => {
    await firebase.auth().signOut();
  },
};
