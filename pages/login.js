import firebase from "../config/firebase.config";
import React, { Component, useContext, useEffect, useState } from "react";
import { ContextCalls, logoutCall } from "../component/loginCall";

import { AuthContext } from "../src/Context/authContext";
import styles from "../styles/login.module.css";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";

export default function Login() {
  const { loading, isFetching, user, dispatch } = useContext(AuthContext);
  const router = useRouter();
  console.log("=======================");
  const [err, errSet] = useState();
  useEffect(() => {
    console.log(loading);
    if (user != null) {
      console.log("nono");
      // console.log(user);
      if (
        user.uid != "V9ZnESF1Z1UevyzWtgUx1nmOnbH3" &&
        user.uid != "pv4TCSSn7Ve1HBAjrcBxUNBqLCB3"
      ) {
        logoutCall(dispatch);
        errSet(true);
        console.log(err);
      } else {
        router.push("/admin/post");
      }
    }
  }, [user]);
  // console.log(user);
  // console.log(isFetching);

  let loginTrigger = (e) => {
    e.preventDefault();
    ContextCalls(dispatch);
  };
  if (loading == false) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className={styles.googleBtn}>
        <FcGoogle size="2rem" />
        <button className={styles.gogBtn} onClick={loginTrigger}>
          google
        </button>
      </div>
      {err ? "Only admin can Login" : ""}
    </div>
  );
}
