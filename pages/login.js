import firebase from "../config/firebase.config";
import React, { Component, useContext, useEffect } from "react";
import { ContextCalls } from "../component/loginCall";
import { AuthContext } from "../src/Context/authContext";
import styles from "../styles/login.module.css";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";

export default function Login() {
  const { loading, isFetching, user, dispatch } = useContext(AuthContext);
  const router = useRouter();
  console.log("=======================");
  useEffect(() => {
    if (user != null) {
      // console.log(user);

      router.push("/admin/post");
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
    <div className={styles.googleBtn}>
      <FcGoogle size="2rem" />
      <button className={styles.gogBtn} onClick={loginTrigger}>
        google
      </button>
    </div>
  );
}
