import { onAuthStateChanged } from "firebase/auth";
import { useReducer } from "react";

import { useEffect } from "react";
import { getAuth } from "firebase/auth";

import { createContext } from "react";

import AuthReducer from "./AuthReducer";
import { auth } from "../../config/firebase.config";

const INIT_STATE = {
  user: null,
  isFetching: false,
  error: false,
  loading: false,
};
export const AuthContext = createContext(INIT_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INIT_STATE);
  const value = {
    loading: state.loading,
    auth: auth,
    user: state.user,
    isFetching: state.isFetching,
    error: state.error,
    dispatch,
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({ type: "LOGIN_SUCCESS", payload: user });
      } else {
        dispatch({ type: "NOT_AUTH" });

        //    console.log("no user");
      }
    });
    //eslint-disable-next-line
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
